import { QueryClient } from '@tanstack/react-query'

/**
 * Single QueryClient instance for the app.
 *
 * Nothing fetches from a real backend yet (this is still the static
 * marketing site) — but the callback form submission is already wired
 * through useMutation in Contact.jsx so swapping in a real API endpoint
 * later is a one-line change, not a rewrite.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})
