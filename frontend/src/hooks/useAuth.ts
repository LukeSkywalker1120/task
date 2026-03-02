/**
 * Auth hooks – login / logout / cached session
 *
 * Authentication is cookie-based (HTTP-only session cookie set by the server).
 * After a successful login the full LoginResponse is stored in React Query
 * cache so the rest of the app can read user / account data without extra
 * network requests.
 */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AuthService, type LoginRequest, type LoginResponse } from '../api/generated';

/** Stable cache key for the active session */
export const AUTH_QUERY_KEY = ['auth', 'session'] as const;

/**
 * Read the cached login session.
 * Returns `null` when the user is not logged in.
 * Data is populated exclusively by `useLogin`; it is never auto-fetched.
 */
export function useCurrentSession() {
  return useQuery<LoginResponse | null>({
    queryKey: AUTH_QUERY_KEY,
    // Never actually called – data arrives via queryClient.setQueryData in useLogin
    queryFn: () => null,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialData: null,
  });
}

/**
 * Login mutation.
 * On success the full `LoginResponse` (user + account + subscription) is
 * cached under AUTH_QUERY_KEY so any component can read it via
 * `useCurrentSession`.
 */
export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (credentials: LoginRequest) =>
      AuthService.loginApiV1AuthLoginPost(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(AUTH_QUERY_KEY, data);
    },
  });
}

/**
 * Logout mutation.
 * Calls the server logout endpoint and then clears the cached session
 * regardless of the server response, so the UI is always consistent.
 * Also invalidates all website queries that required auth.
 */
export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => AuthService.logoutApiV1AuthLogoutPost(),
    onSettled: () => {
      queryClient.setQueryData(AUTH_QUERY_KEY, null);
      queryClient.invalidateQueries({ queryKey: ['websites'] });
    },
  });
}
