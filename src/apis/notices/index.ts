import { NoticeResponse } from '@/types/notice';
import api from '..';

export async function getNotices(
  page: number,
  size: number,
): Promise<NoticeResponse> {
  return await api.get(`api/v1/notices?page=${page}&size=${size}`);
}

export async function getNoticeDetail(
  noticeId: string,
): Promise<NoticeResponse> {
  return await api.get(`api/v1/notices/${noticeId}`);
}
