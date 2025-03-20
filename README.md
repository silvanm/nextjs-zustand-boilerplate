# Next.js + Zustand Boilerplate

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://reactzustand-hvcg43aon-silvan-mhlemanns-projects.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Zustand](https://img.shields.io/badge/Zustand-latest-brown)](https://zustand.docs.pmnd.rs/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-latest-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

A modern, lightweight boilerplate demonstrating how to use [Zustand](https://zustand.docs.pmnd.rs/) for state management in a [Next.js](https://nextjs.org) application with TypeScript and Tailwind CSS.

## 🚀 Live Demo

Check out the live demo: [https://reactzustand-hvcg43aon-silvan-mhlemanns-projects.vercel.app](https://reactzustand-hvcg43aon-silvan-mhlemanns-projects.vercel.app)

## ✨ Features

- **Next.js 15** with App Router for modern React applications
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling
- **Zustand** for simple, fast state management
- **ESLint** for code linting and best practices

## 🐻 Zustand Integration

This boilerplate demonstrates how to use Zustand for state management in a Next.js application. The demo shows:

- Creating a store with Zustand
- Subscribing to specific parts of the state in different components
- Updating state with actions
- Sharing state across components

### Store Structure

The store is defined in `src/store/useStore.ts`:

```typescript
import { create } from 'zustand';

interface BearState {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

const useStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () => set((state) => ({ bears: Math.max(0, state.bears - 1) })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

export default useStore;
```

### Component Usage

Components can subscribe to only the parts of the state they need:

```typescript
// Subscribe to state
const bears = useStore((state) => state.bears);

// Subscribe to actions
const { increasePopulation } = useStore((state) => ({
  increasePopulation: state.increasePopulation
}));
```

## 🏗️ Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js App Router
│   ├── components/   # React components
│   └── store/        # Zustand store
├── memory-bank/      # Project documentation
└── package.json      # Dependencies and scripts
```

## 🚦 Getting Started

First, clone the repository:

```bash
git clone https://github.com/silvanm/nextjs-zustand-boilerplate.git
cd nextjs-zustand-boilerplate
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://zustand.docs.pmnd.rs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📝 License

MIT
