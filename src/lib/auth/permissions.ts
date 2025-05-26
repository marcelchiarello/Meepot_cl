import { UserRole, Permission } from '@/types'

// Role-based permission matrix
export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  organizer: [
    'manage_event',
    'delete_event',
    'manage_invites',
    'approve_requests',
    'manage_participants',
    'assign_roles',
    'remove_participants',
    'manage_tasks',
    'manage_content',
    'post_messages',
    'view_participants',
    'view_contacts',
    'view_details'
  ],
  co_organizer: [
    'manage_event',
    'manage_invites',
    'approve_requests',
    'manage_participants',
    'assign_roles',
    'remove_participants',
    'manage_tasks',
    'manage_content',
    'post_messages',
    'view_participants',
    'view_contacts',
    'view_details'
  ],
  collaborator: [
    'manage_invites',
    'approve_requests',
    'manage_tasks',
    'manage_content',
    'post_messages',
    'view_participants',
    'view_contacts',
    'view_details'
  ],
  participant: [
    'manage_tasks',
    'manage_content',
    'post_messages',
    'view_participants',
    'view_details'
  ],
  guest: [
    'view_participants',
    'view_details'
  ],
  pending: [
    'view_details'
  ]
}

// Check if a role has a specific permission
export function hasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) || false
}

// Get all permissions for a role
export function getPermissions(role: UserRole): Permission[] {
  return ROLE_PERMISSIONS[role] || []
}

// Check if a role can perform an action on another role
export function canManageRole(actorRole: UserRole, targetRole: UserRole): boolean {
  // Organizers can manage all roles
  if (actorRole === 'organizer') return true
  
  // Co-organizers can manage all except organizers
  if (actorRole === 'co_organizer' && targetRole !== 'organizer') return true
  
  // Others cannot manage roles
  return false
}