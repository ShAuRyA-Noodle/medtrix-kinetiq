# Project conventions

Stack: Next.js 15 (App Router), React 18.3, Tailwind CSS v3, Framer Motion v11, Lenis smooth scroll, Geist Sans + Mono.

Design tokens live in app/globals.css as CSS custom properties and are mapped to Tailwind colors in tailwind.config.ts.

Component layout: components/sections for page sections, components/ui for primitives, components/motion for motion wrappers, components/providers for client providers, lib for helpers, app for routes.

Icons: hand-rolled inline SVG primitives in components/ui/icons.tsx. Do not add an icon library.

No em dashes in any user-facing copy.
