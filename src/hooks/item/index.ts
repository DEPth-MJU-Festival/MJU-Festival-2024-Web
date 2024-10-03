import { getItems } from '@/apis/lostItems';
import { ItemCategory, ItemResponse } from '@/types/lostItem';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export function useGetitems(
  category: ItemCategory,
): UseQueryResult<ItemResponse, Error> {
  const QUERY_KEY = 'items';
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getItems(category),
  });
}
