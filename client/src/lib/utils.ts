import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

// Helper to create smooth scrolling to sections
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

// Helper for animating elements on scroll
export function animateOnScroll(target: Element) {
  target.classList.add('is-visible');
}