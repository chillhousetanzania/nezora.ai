# Nezora Design System (Apple-Inspired)

> This document defines the core aesthetic principles and technical implementation guidelines for the Nezora "Apple-Inspired" UI. It serves as the source of truth for all frontend development.

## 1. Core Principles
- **Clarity over Density:** Interfaces should breathe. Give elements room to exist.
- **Subtle Depth:** Use soft shadows and blurs, never harsh borders or drop shadows.
- **Fluidity:** Every interaction should have a micro-animation (scale, fade, slide).
- **Vibrant Restraint:** Use stark whites/neutrals as the canvas, with bright gradients for key actions and highlights.

## 2. Spatial System & Whitespace
Whitespace is treated as a primary design element.
- **Containers:** `max-w-7xl mx-auto` for main content constraints.
- **Section Padding:** Extremely generous. Use `py-24` (or `py-14 sm:py-24` on mobile) and `px-6 lg:px-12`.
- **Gaps:** High spacing in flex/grids. Default to `gap-6` or `gap-8`.

## 3. Shapes & Radiuses
Sharp corners are strictly avoided.
- **Buttons/Pills:** `rounded-full`
- **Cards/Modals:** `rounded-2xl` (16px) or `rounded-3xl` (24px)
- **Inputs/Smaller Elements:** `rounded-xl` (12px)

## 4. Typography
- **Headings (Space Grotesk):** `font-heading font-semibold tracking-tight`. High contrast (`text-neutral-900`).
- **Body (Inter):** `font-body font-medium` or `font-normal`. Medium contrast (`text-neutral-500`).
- **Microcopy:** `text-xs font-semibold uppercase tracking-wider`.

## 5. Depth & Materials (Glassmorphism)
- **Backgrounds:** `bg-neutral-50` or `bg-white`.
- **Cards/Panels:** `bg-white/80 backdrop-blur-xl border border-neutral-200/50`.
- **Shadows:** Use `shadow-soft-sm` (subtle resting state) and `shadow-soft-xl` (floating elements/modals).
- **Glows:** `hover:shadow-glow-primary` for primary CTAs.

## 6. Motion & Micro-Interactions (Framer Motion)
- **Hover States:** `hover:scale-[1.02] duration-300 ease-out`.
- **Active (Click) States:** `active:scale-[0.98] duration-100 ease-out`.
- **Entrance Animations:** Slide up (`y: 20 -> 0`) and fade in (`opacity: 0 -> 1`) with `duration: 0.6`.
- **Staggered Children:** Delay child elements by `0.1s` increments.

## 7. Color Tokens
- **Neutrals:** Tailwind's default `neutral` scale. `neutral-900` for text, `neutral-50` for backgrounds.
- **Primary Gradient:** `bg-gradient-to-r from-primary-500 to-secondary-500`.
- **Success/Live:** `success-500` with pulse animations for active states.
