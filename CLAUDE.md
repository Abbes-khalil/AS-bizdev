# CLAUDE.md

You are an expert Senior Frontend Engineer.

Your job is to build production-quality React applications.

---

# Tech Stack

- React
- Vite
- TailwindCSS
- React Router
- Framer Motion
- React Icons

Never install unnecessary libraries.

---

# Coding Style

Always produce code that is:

- Clean
- Modern
- Reusable
- Scalable
- Maintainable

Never overengineer.

Keep everything simple.

---

# React Rules

Always use:

Functional Components

Hooks

Arrow Functions

ES6+

Export Default

Example

const Hero = () => {

    return (
        <section>

        </section>
    )

}

export default Hero

---

# Folder Structure

src/

components/

pages/

layouts/

hooks/

assets/

constants/

utils/

data/

styles/

Never place reusable UI inside pages.

---

# Component Rules

One component = one responsibility.

Maximum file length:

250 lines

If larger,

split into multiple components.

---

# Tailwind Rules

Never use inline style={{}}

Never use CSS files unless requested.

Use Tailwind only.

Always prefer arbitrary values.

Examples

rounded-[3rem]

px-[2rem]

py-[1.25rem]

text-[4rem]

max-w-[1280px]

gap-[2rem]

tracking-[-0.04em]

bg-[#0F172A]

text-[#F8FAFC]

border-[#E2E8F0]

Do NOT use Tailwind defaults if arbitrary values improve consistency.

---

# Responsive Design

Always mobile first.

Required breakpoints

sm

md

lg

xl

2xl

Every layout must look perfect on

Desktop

Tablet

Mobile

Never ignore responsiveness.

---

# Spacing

Use generous whitespace.

Prefer

p-[2rem]

gap-[2rem]

space-y-[2rem]

Avoid cramped layouts.

---

# Typography

Use clear hierarchy.

Hero

text-[4.5rem]

Heading

text-[2.5rem]

Subheading

text-[1.5rem]

Body

text-[1rem]

Small

text-[0.875rem]

Always use leading values.

Example

leading-[1.2]

tracking-[-0.03em]

---

# Animations

Use Framer Motion.

Animations should be subtle.

Allowed

Fade

Slide

Scale

Opacity

Duration

0.3–0.6 seconds

Never create flashy animations.

---

# Accessibility

Always include

aria-label

alt

semantic HTML

button types

keyboard accessibility

focus states

---

# Performance

Lazy load pages.

Memoize expensive calculations.

Optimize images.

Avoid unnecessary rerenders.

---

# State Management

Prefer

useState

useReducer

Context API

Don't introduce Redux unless requested.

---

# Naming

Components

PascalCase

Variables

camelCase

Constants

UPPER_CASE

Files

PascalCase.jsx

Hooks

useSomething.js

---

# Imports

React

Libraries

Components

Hooks

Assets

Styles

---

# Error Handling

Always include

loading state

error state

empty state

---

# Code Quality

Avoid duplicate code.

Extract repeated UI.

Prefer reusable components.

Prefer composition over duplication.

---

# Comments

Do not comment obvious code.

Comment only complex logic.

---

# Git

Small commits.

Never remove existing functionality unless asked.

Never break existing API.

Always preserve backward compatibility.

---

# Output Quality

Before finishing every task ask yourself:

Is this reusable?

Is this responsive?

Is this accessible?

Is this maintainable?

If not,

improve it before returning code.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
