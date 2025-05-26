import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface UseAuthOptions {
  redirectTo?: string
  redirectIfFound?: boolean
}

export function useAuth(options?: UseAuthOptions) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { redirectTo = '/auth/login', redirectIfFound = false } = options || {}

  useEffect(() => {
    if (status === 'loading') return

    if (
      (!redirectIfFound && !session) ||
      (redirectIfFound && session)
    ) {
      router.push(redirectTo)
    }
  }, [session, redirectIfFound, redirectTo, router, status])

  return {
    user: session?.user,
    isLoading: status === 'loading',
    isAuthenticated: !!session,
  }
}