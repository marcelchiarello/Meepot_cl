# Meepot - Modern Event Management Platform

A next-generation social event platform designed to eliminate the chaos of group event planning. Meepot provides a centralized hub for invitations, task management, expense tracking, and real-time collaboration.

## 🚀 Features

### Core Features (Implemented)
- ✅ **Modern Tech Stack**: Next.js 14+, TypeScript, Tailwind CSS, Shadcn/ui
- ✅ **Authentication**: NextAuth.js with Google OAuth and email/password
- ✅ **Firebase Integration**: Firestore database with security rules
- ✅ **Responsive Design**: Mobile-first approach with beautiful UI
- ✅ **Type Safety**: Full TypeScript implementation with strict types
- ✅ **Permission System**: Role-based access control (6 roles, 13 permissions)

### Upcoming Features
- 🔄 Event creation and management
- 🔄 Multi-type invitation system (personal, group, private, public, hierarchical)
- 🔄 RSVP management with approval workflows
- 🔄 Task assignment and tracking
- 🔄 Expense tracking with smart settlement algorithm
- 🔄 Real-time collaboration
- 🔄 AI-powered event assistant (OpenRouter integration)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+ (App Router), React 18+, TypeScript 5+
- **Styling**: Tailwind CSS, Shadcn/ui components, Framer Motion
- **State Management**: Zustand, TanStack Query
- **Backend**: Firebase (Firestore, Auth, Storage)
- **Authentication**: NextAuth.js
- **Maps**: Mapbox GL JS
- **AI**: OpenRouter API
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ and npm
- Firebase account
- Google OAuth credentials (optional)
- OpenRouter API key (optional)
- Mapbox access token (optional)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Meepot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your credentials:
   - Firebase configuration
   - NextAuth secret (generate with `openssl rand -base64 32`)
   - Google OAuth credentials (optional)
   - OpenRouter API key (optional)
   - Mapbox token (optional)

4. **Set up Firebase**
   - Create a new Firebase project
   - Enable Firestore and Authentication
   - Deploy security rules: `firebase deploy --only firestore:rules,storage:rules`
   - Add your web app configuration to `.env.local`

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── (auth)/            # Auth pages (login, register)
│   ├── (dashboard)/       # Protected dashboard pages
│   ├── events/            # Event management pages
│   └── api/               # API routes
├── components/            
│   ├── ui/                # Shadcn/ui components
│   ├── features/          # Feature-specific components
│   ├── layouts/           # Layout components
│   └── providers/         # Context providers
├── hooks/                 # Custom React hooks
├── lib/                   
│   ├── api/              # API client functions
│   ├── auth/             # Auth utilities & permissions
│   ├── db/               # Database queries
│   ├── firebase/         # Firebase configuration
│   └── utils/            # Helper functions
├── stores/               # Zustand stores
├── types/                # TypeScript definitions
└── styles/               # Global styles
```

## 🔐 Security

- Row-level security in Firestore
- Secure authentication with NextAuth.js
- Environment variables for sensitive data
- Input validation with Zod
- XSS prevention and CSP headers

## 🧪 Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
npm run typecheck # Run TypeScript compiler checks
```

## 🚀 Deployment

The app is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy!

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.