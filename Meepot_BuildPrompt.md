# Build Meepot - Modern Event Management Platform

Create a comprehensive event management platform that revolutionizes how people organize social gatherings, from intimate dinners to large celebrations, with intelligent AI assistance and seamless cost sharing.

## IDENTITY & CONTEXT
You are building a next-generation social event platform designed to eliminate the chaos of group event planning. This application will serve event organizers and participants by providing a centralized hub for invitations, task management, expense tracking, and real-time collaboration.

## CORE OBJECTIVES
- **Primary Goal:** Replace fragmented WhatsApp groups and spreadsheets with an integrated event management solution
- **Success Metrics:** 90%+ RSVP response rate, <30 seconds to create an event, zero payment disputes
- **User Value:** Stress-free event planning with automated task distribution and transparent cost splitting
- **Business Value:** Network effects through social connections, premium features monetization, community building

## TECHNICAL ARCHITECTURE

### Stack Requirements:
- **Frontend:** Next.js 14+ with App Router, React 18+, TypeScript 5+
- **UI Components:** Shadcn/ui with Radix UI primitives, Framer Motion for animations
- **Styling:** Tailwind CSS with custom design system, CSS variables for theming
- **State Management:** Zustand for global state, TanStack Query for server state
- **Backend:** Edge functions (Vercel/Netlify), Firebase for real-time features
- **Database:** Firestore with offline-first architecture, Redis for caching
- **Auth:** NextAuth.js with multiple providers (Google, Email, Apple)
- **AI Integration:** OpenRouter API with streaming responses
- **Real-time:** WebSockets via Firebase Realtime Database
- **Maps:** Mapbox GL JS for modern, interactive location features
- **Deployment:** Vercel with edge runtime, automatic preview deployments

### Performance Targets:
- **Initial Load:** <1.5s on 4G, <3s on 3G
- **Lighthouse Scores:** 95+ across all metrics
- **Animations:** Consistent 60fps, no jank
- **Offline Support:** Full functionality with background sync
- **Bundle Size:** <200KB initial JS

## CORE FEATURES (Priority Order)

### P0 - Must Have:

**Feature: Event Creation & Management**
User Story: As an organizer, I want to create events in seconds so that I can focus on planning details
Implementation Requirements:
- Smart form with progressive disclosure
- Event templates for common types (dinner, party, trip, etc.)
- Rich text editor for descriptions
- Drag-and-drop image upload with optimization
- Location autocomplete with map preview
- Recurring event support
- Draft auto-save every keystroke
Success Criteria: Event created in <30 seconds with all details

**Feature: Multi-Type Invitation System**
User Story: As an organizer, I want flexible invitation options so that I can reach all my guests
Implementation Requirements:
- Personal invitations with contact import (Google, Apple, CSV)
- Group invitations with shareable links and QR codes
- Public events with SEO optimization
- Private invitations requiring email verification
- Hierarchical invitations (guests can invite others)
- Bulk operations with progress tracking
- Beautiful email templates with customization
- SMS fallback for critical invitations
Success Criteria: 95%+ delivery rate, <2 seconds to send 100 invitations

**Feature: RSVP Management with Approval Workflows**
User Story: As a guest, I want to easily respond to invitations so that I can confirm my attendance
Implementation Requirements:
- One-click RSVP from email/SMS
- Guest capacity management with waitlist
- Approval workflows for private events
- Plus-one handling with name collection
- Dietary restrictions and preferences
- Real-time availability updates
- Calendar integration (Google, Apple, Outlook)
Success Criteria: 90%+ RSVP response rate within 48 hours

**Feature: Role-Based Access Control**
User Story: As an organizer, I want to delegate responsibilities so that I can share the workload
Implementation Requirements:
- 6 role types: Organizer, Co-organizer, Collaborator, Participant, Guest, Pending
- 13 granular permissions with inheritance
- Role assignment with notification
- Permission changes audit trail
- Bulk role management
- Visual permission matrix
Success Criteria: Zero unauthorized access incidents

### P1 - Should Have:

**Feature: Task Management System**
User Story: As a participant, I want to know what to bring so that I can contribute effectively
Implementation Requirements:
- Categorized tasks (Food, Drinks, Supplies, Activities)
- Volunteer signup or direct assignment
- Progress tracking with reminders
- Task templates by event type
- Cost estimation per task
- Task dependencies
- Mobile-optimized task lists
Success Criteria: 100% task completion rate before events

**Feature: Expense Tracking & Smart Settlement**
User Story: As a participant, I want fair cost splitting so that everyone pays their share
Implementation Requirements:
- Receipt photo capture with OCR
- Multiple split methods (equal, percentage, itemized)
- Multi-currency support
- Settlement optimization algorithm (minimum transactions)
- Payment integration (Venmo, PayPal, bank transfer)
- Expense approval workflows
- Historical expense analytics
- Dispute resolution system
Success Criteria: <3 transactions to settle any event, zero payment disputes

**Feature: Real-time Collaboration**
User Story: As a co-organizer, I want to see changes instantly so that we stay coordinated
Implementation Requirements:
- Live presence indicators
- Collaborative editing with conflict resolution
- Real-time notifications
- Activity feed with filtering
- Instant messaging with threading
- @mentions with notifications
- Read receipts for critical updates
Success Criteria: <100ms update latency, zero data conflicts

### P2 - Nice to Have:

**Feature: AI-Powered Event Assistant**
User Story: As a user, I want intelligent help so that planning becomes effortless
Implementation Requirements:
- Natural language event creation
- Smart suggestions based on history
- Menu planning with dietary considerations
- Budget optimization recommendations
- Vendor suggestions with reviews
- Weather-based recommendations
- Conversation memory across sessions
- Multi-language support
Success Criteria: 80%+ user satisfaction with AI suggestions

**Feature: Social Network & Community**
User Story: As a user, I want to connect with fellow attendees so that I can build lasting relationships
Implementation Requirements:
- User profiles with event history
- Friend connections with privacy controls
- Event-based introductions
- Shared interest discovery
- Private messaging
- Public event feed with recommendations
- Host ratings and reviews
- Social login integration
Success Criteria: 50%+ users make new connections

**Feature: Advanced Analytics Dashboard**
User Story: As an organizer, I want insights so that I can improve future events
Implementation Requirements:
- Attendance patterns visualization
- Cost analysis trends
- Guest satisfaction metrics
- Task completion analytics
- Popular time slots heatmap
- Dietary preference insights
- Export to PDF/Excel
Success Criteria: Actionable insights within 5 clicks

## USER EXPERIENCE SPECIFICATIONS

### Design Principles:
- **Visual Style:** Modern, clean, with playful touches
- **Color Scheme:** 
  - Primary: Vibrant purple (#8B5CF6)
  - Secondary: Warm orange (#F97316) 
  - Accent: Teal (#14B8A6)
  - Semantic colors for success/warning/error
- **Typography:** 
  - Headers: Inter or SF Pro Display
  - Body: System fonts for performance
  - Consistent scale using Tailwind defaults
- **Spacing:** 8px grid system with consistent padding

### Interaction Patterns:
- **Animations:** 
  - Smooth page transitions with shared element animations
  - Micro-interactions on all interactive elements
  - Skeleton screens during loading
  - Parallax scrolling for landing pages
  - Spring physics for natural motion
- **Feedback:** 
  - Optimistic updates with rollback
  - Toast notifications with actions
  - Inline validation with helpful messages
  - Progress indicators for long operations
- **Loading States:** 
  - Progressive content revelation
  - Staggered animations for lists
  - Lazy loading for images
  - Infinite scroll with intersection observer
- **Error States:** 
  - Friendly error messages with recovery actions
  - Offline mode indicators
  - Automatic retry with exponential backoff

### Accessibility Requirements:
- **WCAG 2.1 AA Compliance:** Full adherence required
- **Keyboard Navigation:** Tab order, focus indicators, shortcuts
- **Screen Reader Support:** ARIA labels, live regions, semantic HTML
- **Color Contrast:** 4.5:1 minimum, dark mode support
- **Responsive Design:** Mobile-first, touch targets 44px minimum
- **Reduced Motion:** Respect prefers-reduced-motion

## IMPLEMENTATION GUIDELINES

### Code Organization:
```
src/
├── app/                    # Next.js app router pages
│   ├── (auth)/            # Auth-related pages
│   ├── (dashboard)/       # Protected dashboard pages
│   ├── events/            # Event pages
│   └── api/               # API routes
├── components/            
│   ├── ui/                # Shadcn/ui components
│   ├── features/          # Feature-specific components
│   ├── layouts/           # Layout components
│   └── providers/         # Context providers
├── hooks/                 # Custom React hooks
├── lib/                   
│   ├── api/              # API client functions
│   ├── auth/             # Auth utilities
│   ├── db/               # Database queries
│   └── utils/            # Helper functions
├── stores/               # Zustand stores
├── types/                # TypeScript definitions
└── styles/               # Global styles

```

### Component Standards:
- **Single Responsibility:** One component, one purpose
- **Props Validation:** Strict TypeScript types, no any
- **Composition:** Prefer composition over inheritance
- **Performance:** Memo only when measured necessary
- **Testing:** Unit tests for logic, integration for features
- **Documentation:** JSDoc for public APIs

### State Management Strategy:
- **Local State:** useState for component-specific UI state
- **Global State:** Zustand for user preferences, UI state
- **Server State:** TanStack Query with optimistic updates
- **Form State:** React Hook Form with Zod validation
- **URL State:** Next.js router for shareable state

### Data Architecture:
```typescript
// Core entities with strict typing
interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: Location;
  organizer: User;
  type: EventType;
  category: EventCategory;
  status: EventStatus;
  visibility: 'public' | 'private';
  maxGuests?: number;
  requiresApproval: boolean;
  costs: Cost[];
  tasks: Task[];
  participants: Participant[];
  invitations: Invitation[];
  createdAt: Date;
  updatedAt: Date;
}

interface Invitation {
  id: string;
  eventId: string;
  type: 'personal' | 'group' | 'private' | 'public' | 'hierarchical';
  status: InvitationStatus;
  token: string;
  expiresAt?: Date;
  maxAcceptedUsers?: number;
  acceptedCount: number;
  requiresApproval: boolean;
  history: InvitationAction[];
}

interface Task {
  id: string;
  eventId: string;
  title: string;
  category: 'food' | 'drinks' | 'supplies' | 'activities';
  assignees: string[];
  status: 'pending' | 'in_progress' | 'completed';
  cost?: number;
  paidBy?: string;
  completedAt?: Date;
}

interface Settlement {
  eventId: string;
  transactions: Transaction[];
  balances: Map<string, number>;
  optimizedTransfers: Transfer[];
  status: 'pending' | 'partial' | 'settled';
}
```

### Security Implementation:
- **Authentication:** JWT with refresh tokens, secure HTTP-only cookies
- **Authorization:** Row-level security in Firestore
- **Input Validation:** Zod schemas for all inputs
- **XSS Prevention:** Automatic escaping, CSP headers
- **Rate Limiting:** API route protection, DDoS mitigation
- **Secrets Management:** Environment variables, never in code
- **Audit Logging:** All critical operations logged

## CRITICAL IMPLEMENTATION DETAILS

### Settlement Algorithm (Cost Splitting):
```typescript
function optimizeSettlement(balances: Map<string, number>): Transfer[] {
  // Sort creditors and debtors by amount
  // Use greedy algorithm to minimize transactions
  // Handle rounding errors with tolerance
  // Return optimal transfer list
}
```

### Permission System:
```typescript
const ROLE_PERMISSIONS = {
  organizer: ['manage_event', 'delete_event', 'manage_invites', 'approve_requests', 
              'manage_participants', 'assign_roles', 'remove_participants', 
              'manage_tasks', 'manage_content', 'post_messages', 'view_participants',
              'view_contacts', 'view_details'],
  co_organizer: [/* all except delete_event */],
  collaborator: ['manage_invites', 'approve_requests', 'manage_tasks', 
                 'manage_content', 'post_messages', 'view_participants', 
                 'view_contacts', 'view_details'],
  participant: ['manage_tasks', 'manage_content', 'post_messages', 
                'view_participants', 'view_details'],
  guest: ['view_participants', 'view_details'],
  pending: ['view_details']
};
```

### Real-time Sync Strategy:
- Use Firestore real-time listeners for active events
- Implement optimistic updates with rollback
- Queue offline changes with background sync
- Conflict resolution: last-write-wins with version tracking
- Efficient subscription management to prevent memory leaks

### AI Integration Architecture:
- Stream responses for better UX
- Context management across conversations
- Implement retry logic with fallback models
- Token usage tracking and limits
- Secure API key handling through edge functions

## QUALITY REQUIREMENTS

### Performance Metrics:
- Time to Interactive: <2 seconds
- First Contentful Paint: <1 second  
- Cumulative Layout Shift: <0.1
- Total Bundle Size: <500KB
- API Response Time: <200ms p95

### Code Quality Standards:
- TypeScript strict mode enabled
- ESLint with recommended rules
- Prettier for consistent formatting
- 80%+ test coverage for business logic
- Zero console errors/warnings in production
- Comprehensive error boundaries

### Production Readiness:
- Progressive Web App with offline support
- Push notifications for critical updates
- Automated backups every 6 hours
- Zero-downtime deployments
- Monitoring with Sentry/LogRocket
- A/B testing framework ready

## DELIVERABLES

Create a fully functional Meepot application with:

1. **Complete Features:** All P0 and P1 features fully implemented
2. **Beautiful UI:** Modern, responsive design exceeding current standards
3. **Smart Defaults:** Pre-configured for common use cases
4. **Sample Data:** Realistic demo events and users
5. **Documentation:** Setup guide and feature overview
6. **Deployment Ready:** Environment configs for Vercel/Netlify

Focus on creating an exceptional user experience that makes event planning delightful. The application should feel magical - anticipating user needs and eliminating friction at every step. Emphasize beautiful animations, thoughtful micro-interactions, and intelligent features that showcase the platform's modern capabilities.

Remember: This is not just an event planning tool - it's a platform that brings people together and creates lasting memories. Every feature should contribute to reducing stress and increasing joy in social gatherings.

🚀 Build Meepot to be the gold standard for modern event management platforms.