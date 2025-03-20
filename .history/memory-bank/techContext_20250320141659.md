# Technical Context: Next.js + Zustand Boilerplate

## Technologies Used

### Core Technologies
- **Next.js 15**: React framework with App Router
- **React 18+**: UI library
- **TypeScript**: Type-safe JavaScript
- **Zustand**: State management library
- **Tailwind CSS**: Utility-first CSS framework

### Development Tools
- **ESLint**: Code linting
- **Node.js**: JavaScript runtime
- **npm/yarn/pnpm**: Package managers

## Development Setup

### Prerequisites
- Node.js (latest LTS version recommended)
- npm, yarn, pnpm, or bun

### Local Development
```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The development server runs on http://localhost:3000 by default.

## Technical Constraints

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- No explicit support for IE11 or older browsers

### Performance Considerations
- Next.js provides server-side rendering and static generation
- Zustand is lightweight compared to alternatives like Redux
- Tailwind's utility classes are purged in production for minimal CSS

## Dependencies

### Production Dependencies
- **next**: React framework
- **react/react-dom**: UI library
- **zustand**: State management
- **tailwindcss**: CSS framework

### Development Dependencies
- **typescript**: Type checking
- **eslint**: Code linting
- **postcss**: CSS processing

## Deployment

### Vercel Deployment
The application is deployed to Vercel with the following configuration:
- **Build Command**: `next build`
- **Development Command**: `next dev --port $PORT`
- **Install Command**: `npm install` (or equivalent)
- **Output Directory**: Next.js default

### Environment Variables
No custom environment variables are required for this demo application.

### Deployment URLs
- **Production**: https://reactzustand-hvcg43aon-silvan-mhlemanns-projects.vercel.app
- **Dashboard**: https://vercel.com/silvan-mhlemanns-projects/reactzustand/5Y9LoP6Rg31VU4NKynUGdqhAfDse
