// Core type definitions for Meepot

export type UserRole = 'organizer' | 'co_organizer' | 'collaborator' | 'participant' | 'guest' | 'pending'

export type EventVisibility = 'public' | 'private'

export type EventStatus = 'draft' | 'published' | 'cancelled' | 'completed'

export type EventType = 'party' | 'dinner' | 'trip' | 'meeting' | 'celebration' | 'other'

export type EventCategory = 'social' | 'business' | 'family' | 'friends' | 'community'

export type InvitationType = 'personal' | 'group' | 'private' | 'public' | 'hierarchical'

export type InvitationStatus = 'pending' | 'accepted' | 'declined' | 'expired'

export type TaskStatus = 'pending' | 'in_progress' | 'completed'

export type TaskCategory = 'food' | 'drinks' | 'supplies' | 'activities'

export type ExpenseStatus = 'pending' | 'approved' | 'rejected' | 'settled'

export type ParticipantStatus = 'invited' | 'accepted' | 'declined' | 'maybe' | 'waitlisted'

export type SettlementStatus = 'pending' | 'partial' | 'settled'

// Permission types
export type Permission = 
  | 'manage_event'
  | 'delete_event'
  | 'manage_invites'
  | 'approve_requests'
  | 'manage_participants'
  | 'assign_roles'
  | 'remove_participants'
  | 'manage_tasks'
  | 'manage_content'
  | 'post_messages'
  | 'view_participants'
  | 'view_contacts'
  | 'view_details'

// Location interface
export interface Location {
  address: string
  lat?: number
  lng?: number
  placeId?: string
  name?: string
}