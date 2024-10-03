import { ItemCategory, LostItem } from '@/types/lostItem';
import api from '..';

export async function getItems(category: ItemCategory): Promise<LostItem> {
  return await api.get(`api/v1/items?category=${category}`);
}
