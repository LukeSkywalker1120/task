/**
 * Custom hooks for Websites API using generated WebsitesService
 */
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  WebsitesService,
  type WebsiteCreateRequest,
  type WebsiteUpdateRequest,
} from '../api/generated';

/**
 * Hook to list all websites with pagination
 */
export function useWebsitesList(limit = 20, offset = 0) {
  return useQuery({
    queryKey: ['websites', { limit, offset }],
    queryFn: () => WebsitesService.listWebsitesApiV1WebsitesGet(limit, offset),
  });
}

/**
 * Hook to get a single website by ID
 */
export function useWebsite(websiteId: string | null) {
  return useQuery({
    queryKey: ['websites', websiteId],
    queryFn: () => {
      if (!websiteId) throw new Error('Website ID is required');
      return WebsitesService.getWebsiteDetailApiV1WebsitesWebsiteIdGet(websiteId);
    },
    enabled: !!websiteId,
  });
}

/**
 * Hook to create a new website
 */
export function useCreateWebsite() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: WebsiteCreateRequest) =>
      WebsitesService.createWebsiteApiV1WebsitesPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['websites'] });
    },
  });
}

/**
 * Hook to update a website
 */
export function useUpdateWebsite(websiteId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: WebsiteUpdateRequest) =>
      WebsitesService.updateWebsiteApiV1WebsitesWebsiteIdPut(websiteId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['websites'] });
      queryClient.invalidateQueries({ queryKey: ['websites', websiteId] });
    },
  });
}

/**
 * Hook to delete a website
 */
export function useDeleteWebsite() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (websiteId: string) =>
      WebsitesService.deleteWebsiteApiV1WebsitesWebsiteIdDelete(websiteId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['websites'] });
    },
  });
}
