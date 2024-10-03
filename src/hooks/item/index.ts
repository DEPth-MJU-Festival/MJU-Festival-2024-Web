import { getItems } from '@/apis/lostItems';
import { ItemCategory, ItemResponse } from '@/types/lostItem';
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

export function useGetitems(
  category: ItemCategory,
): UseSuspenseQueryResult<ItemResponse, Error> {
  const QUERY_KEY = 'items';
  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getItems(category),
  });
}
