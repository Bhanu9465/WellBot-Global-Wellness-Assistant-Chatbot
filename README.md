# WellBot - Global Wellness Assistant Chatbot

WellBot is a React + TypeScript wellness assistant chatbot application built with Vite and Tailwind CSS. It supports authentication and backend integration through Firebase and Supabase.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Firebase (Auth, Firestore)
- Supabase

## Project Structure

- `src/pages` - Main app pages (Sign In, Sign Up, Dashboard)
- `src/components` - Shared UI components
- `src/contexts` - React context providers (authentication)
- `src/lib` - Firebase and Supabase clients
- `supabase/migrations` - SQL migrations

## Prerequisites

- Node.js 18+ (recommended)
- npm

## Getting Started

1. Install dependencies:

   npm install

2. Create a local environment file:

   - Copy `.env.example` to `.env`
   - Fill in your real credentials

3. Add required environment variables in `.env`:

   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

   VITE_FIREBASE_API_KEY=your-firebase-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-firebase-app-id

4. Start the development server:

   npm run dev

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type-checking

## Deployment

This project includes deployment configuration for:

- Firebase Hosting (`firebase.json`)
- Vercel (`vercel.json`)

Build first before deploying:

npm run build

## Notes

- Do not commit real secrets in `.env`.
- Keep `.env.example` updated when adding new environment variables.
