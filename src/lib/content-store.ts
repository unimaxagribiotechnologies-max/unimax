import { useEffect, useState } from "react";

import {
  gallery as defaultGallery,
  posts as defaultPosts,
  products as defaultProducts,
  testimonials as defaultTestimonials,
  type Post,
  type Product,
  type Testimonial,
} from "@/lib/site";

export type EnquiryStatus = "New" | "Contacted" | "Resolved";

export type Enquiry = {
  id: string;
  createdAt: string;
  status: EnquiryStatus;
  name: string;
  mobile: string;
  email: string;
  type: string;
  subject: string;
  message: string;
};

export type ManagedContent = {
  products: Product[];
  posts: Post[];
  testimonials: Testimonial[];
  gallery: string[];
};

const CONTENT_KEY = "unimax-managed-content-v1";
const ENQUIRIES_KEY = "unimax-enquiries-v1";
const CONTENT_EVENT = "unimax-content-updated";
const ENQUIRIES_EVENT = "unimax-enquiries-updated";

export const defaultContent: ManagedContent = {
  products: defaultProducts,
  posts: defaultPosts,
  testimonials: defaultTestimonials,
  gallery: defaultGallery,
};

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function loadContent(): ManagedContent {
  return readJson(CONTENT_KEY, defaultContent);
}

export function saveContent(content: ManagedContent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONTENT_KEY, JSON.stringify(content));
  window.dispatchEvent(new Event(CONTENT_EVENT));
}

export function resetContent() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CONTENT_KEY);
  window.dispatchEvent(new Event(CONTENT_EVENT));
}

export function useManagedContent() {
  const [content, setContent] = useState<ManagedContent>(defaultContent);

  useEffect(() => {
    const sync = () => setContent(loadContent());
    sync();
    window.addEventListener(CONTENT_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CONTENT_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return {
    content,
    setContent: (next: ManagedContent) => {
      saveContent(next);
      setContent(next);
    },
  };
}

export function loadEnquiries(): Enquiry[] {
  return readJson<Enquiry[]>(ENQUIRIES_KEY, []);
}

export function saveEnquiry(input: Omit<Enquiry, "id" | "createdAt" | "status">) {
  if (typeof window === "undefined") return;
  const enquiry: Enquiry = {
    ...input,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    status: "New",
  };
  window.localStorage.setItem(ENQUIRIES_KEY, JSON.stringify([enquiry, ...loadEnquiries()]));
  window.dispatchEvent(new Event(ENQUIRIES_EVENT));
  return enquiry;
}

export function updateEnquiry(id: string, changes: Partial<Pick<Enquiry, "status">>) {
  if (typeof window === "undefined") return;
  const enquiries = loadEnquiries().map((enquiry) =>
    enquiry.id === id ? { ...enquiry, ...changes } : enquiry,
  );
  window.localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(enquiries));
  window.dispatchEvent(new Event(ENQUIRIES_EVENT));
}

export function deleteEnquiry(id: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(
    ENQUIRIES_KEY,
    JSON.stringify(loadEnquiries().filter((enquiry) => enquiry.id !== id)),
  );
  window.dispatchEvent(new Event(ENQUIRIES_EVENT));
}

export function useEnquiries() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    const sync = () => setEnquiries(loadEnquiries());
    sync();
    window.addEventListener(ENQUIRIES_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(ENQUIRIES_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return enquiries;
}
