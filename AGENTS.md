# Project instructions

## What we are building

This is a teaching project: a polished, Duolingo-inspired language-learning app built with Expo. It should feel like a real mobile app while staying simple enough for developers to learn from one feature at a time.

Possible features include AI video lessons, audio lessons, chat tutoring, vocabulary review, language selection, and locally tracked XP and lesson completion.

## How to work in this project

Before changing code:

1. Read this file and inspect the existing code and project conventions.
2. Understand the requested feature and identify the smallest set of files that need to change.
3. Implement the feature in a clear, teachable way. Keep changes focused and avoid unnecessary abstractions or unrelated rewrites.
4. Follow existing patterns. Make sure the feature works end to end and address errors caused by your changes.
5. Explain what changed and how the user can try it.

Prefer simple, readable code over clever code. Refactor only when repetition or complexity makes it useful.

## Technology choices

Use the project's existing versions of:

- Expo, React Native, TypeScript, and Expo Router
- NativeWind / Tailwind CSS
- Zustand and AsyncStorage
- Clerk for authentication
- Stream / GetStream for video and real-time communication
- Stream Vision Agents for AI video-teacher features

Use server-side API routes or backend functions for secrets, tokens, and AI requests. Never put secret keys in the mobile app.

Do not add or install a major library without the user's approval. If a new library would materially improve the feature, explain why and ask before adding it.

## Project structure

Follow the existing structure. The preferred organization is:

```text
app/          Routes and screens
  (auth)/
  (tabs)/
  lesson/
components/   Reusable UI
constants/    Shared constants and image exports
data/         Typed, hardcoded lesson and language content
hooks/        Reusable hooks
lib/          External-service helpers and utilities
store/        Zustand state
types/        Shared TypeScript types
assets/       Images and other static files
```

Screens should compose UI and call hooks or stores. Keep large reusable UI blocks and complex business logic out of screens.

Create a component when it is reused, represents a clear UI concept (such as `LessonCard` or `XPBar`), or makes a screen meaningfully easier to read. Avoid extracting tiny one-off components prematurely. Use judgment for borderline cases.

## UI and styling

When the user provides a design reference, reproduce all visible elements as closely as possible: layout, spacing, typography, colors, sizing, alignment, corner radii, and shadows. Do not omit or simplify details unless asked.

Keep the app playful, polished, friendly, and mobile-first. Use clear spacing, rounded cards, readable progress indicators, large touch targets, and useful empty states. Make layouts work across screen sizes.

Use the NativeWind version already in `package.json`. Before writing NativeWind code, check that version and use syntax supported by it. Do not upgrade NativeWind without approval. Reference: https://www.nativewind.dev/v5/llms-full.txt

Use NativeWind utility classes for styling by default. Use `StyleSheet` or inline styles when NativeWind cannot express the required React Native behavior, including dynamic or platform-specific values, animated styles, and component props that need a `style` object. Examples include `SafeAreaView`, `KeyboardAvoidingView`, `Modal`, `ScrollView` content styles, `TextInput` native props, pressed-state styles, platform-specific shadows, and complex transforms. Keep inline styles small and purposeful.

If a useful style pattern is repeated, consider adding a clearly named utility to `global.css` using the conventions already present in that file.

## Images

Before using an image, check whether `constants/images.ts` exists. Create it if needed, export app images from it, and reference images through that shared object rather than importing assets directly in screens or components.

```ts
import mascot from "@/assets/images/mascot.png";

export const images = { mascot };
```

```tsx
<Image source={images.mascot} />
```

If image generation is requested, keep generated assets consistent with the provided reference and design system. Save them under `assets/` with descriptive names, for example `assets/images/mascot-happy.png`.

## Data, state, and services

- Keep lesson and language content in typed JSON or TypeScript files under `data/`. Do not add a database unless the user explicitly requests one.
- Use Zustand for shared app state, such as selected language, completed lessons, XP, streaks, current lesson, and settings.
- Use local component state for temporary UI state.
- Persist appropriate client state with AsyncStorage.
- Put external-service helpers in `lib/`. Never expose secrets in frontend code.
- Use Clerk for authentication; do not build a separate custom authentication system.

## Code quality

- Use TypeScript strictly; avoid `any`.
- Keep types and abstractions straightforward.
- Follow the project's existing code style and dependency versions.
- Do not introduce a database for this version.

## Validation

After implementing a feature, run the project checks when available:

```bash
npm run lint
npm run typecheck
```

Fix errors caused by the changes before finishing. If a check cannot run, say which one and why.

## How to communicate

Be concise and practical. Summarize the change and tell the user how to try it. When a decision is unclear, use the project context and your judgment; ask the user only when their preference or approval is needed, such as before adding a library.
