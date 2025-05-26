import { 
  UserRole, 
  EventVisibility, 
  EventStatus, 
  EventType, 
  EventCategory,
  InvitationType,
  InvitationStatus,
  TaskStatus,
  TaskCategory,
  ExpenseStatus,
  ParticipantStatus,
  SettlementStatus,
  Location
} from './index'

// User model
export interface User {
  id: string
  email: string
  name: string
  photoURL?: string
  phoneNumber?: string
  preferences?: {
    notifications: boolean
    emailReminders: boolean
    smsReminders: boolean
  }
  createdAt: Date
  updatedAt: Date
}

// Event model
export interface Event {
  id: string
  title: string
  description: string
  date: Date
  endDate?: Date
  location: Location
  organizer: {
    id: string
    name: string
    email: string
  }
  type: EventType
  category: EventCategory
  status: EventStatus
  visibility: EventVisibility
  maxGuests?: number
  currentGuests: number
  requiresApproval: boolean
  coverImage?: string
  tags?: string[]
  settings: {
    allowGuestInvites: boolean
    showGuestList: boolean
    enableComments: boolean
    enableTasks: boolean
    enableExpenses: boolean
  }
  createdAt: Date
  updatedAt: Date
}

// Participant model
export interface Participant {
  id: string
  eventId: string
  userId: string
  name: string
  email: string
  photoURL?: string
  role: UserRole
  status: ParticipantStatus
  plusOnes?: number
  dietaryRestrictions?: string
  notes?: string
  invitedBy?: string
  invitedAt: Date
  respondedAt?: Date
  joinedAt?: Date
}

// Invitation model
export interface Invitation {
  id: string
  eventId: string
  type: InvitationType
  status: InvitationStatus
  token: string
  createdBy: string
  maxAcceptedUsers?: number
  acceptedCount: number
  requiresApproval: boolean
  message?: string
  expiresAt?: Date
  metadata?: {
    groupName?: string
    allowPlusOnes?: boolean
    maxPlusOnes?: number
  }
  history: InvitationAction[]
  createdAt: Date
  updatedAt: Date
}

export interface InvitationAction {
  action: 'created' | 'sent' | 'viewed' | 'accepted' | 'declined' | 'expired'
  userId?: string
  timestamp: Date
  metadata?: Record<string, unknown>
}

// Task model
export interface Task {
  id: string
  eventId: string
  title: string
  description?: string
  category: TaskCategory
  status: TaskStatus
  assignees: string[]
  volunteers?: string[]
  dueDate?: Date
  cost?: number
  paidBy?: string
  attachments?: string[]
  completedAt?: Date
  completedBy?: string
  createdBy: string
  createdAt: Date
  updatedAt: Date
}

// Comment model
export interface Comment {
  id: string
  eventId: string
  userId: string
  userName: string
  userPhoto?: string
  content: string
  parentId?: string
  mentions?: string[]
  edited: boolean
  createdAt: Date
  updatedAt: Date
}

// Expense model
export interface Expense {
  id: string
  eventId: string
  title: string
  amount: number
  currency: string
  category: string
  paidBy: string
  paidFor: string[]
  splitMethod: 'equal' | 'percentage' | 'amount' | 'custom'
  splits?: ExpenseSplit[]
  receipt?: string
  notes?: string
  status: ExpenseStatus
  approvedBy?: string
  approvedAt?: Date
  createdAt: Date
  updatedAt: Date
}

export interface ExpenseSplit {
  userId: string
  amount: number
  percentage?: number
  isPaid: boolean
  paidAt?: Date
}

// Settlement model
export interface Settlement {
  id: string
  eventId: string
  status: SettlementStatus
  totalExpenses: number
  currency: string
  balances: UserBalance[]
  transactions: Transaction[]
  optimizedTransfers: Transfer[]
  settledAt?: Date
  createdAt: Date
  updatedAt: Date
}

export interface UserBalance {
  userId: string
  paid: number
  owed: number
  balance: number
}

export interface Transaction {
  id: string
  from: string
  to: string
  amount: number
  status: 'pending' | 'completed' | 'cancelled'
  method?: 'venmo' | 'paypal' | 'bank' | 'cash' | 'other'
  reference?: string
  completedAt?: Date
  createdAt: Date
}

export interface Transfer {
  from: string
  to: string
  amount: number
}

// Contact model
export interface Contact {
  id: string
  userId: string
  name: string
  email?: string
  phoneNumber?: string
  notes?: string
  tags?: string[]
  lastInvited?: Date
  eventsAttended: number
  createdAt: Date
  updatedAt: Date
}