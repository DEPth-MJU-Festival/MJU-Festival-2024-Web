import { getNoticeDetail, getNotices } from '@/apis/notices';
import { NoticeResponse, NoticeResponseDetail } from '@/types/notice';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export function useGetNotice(
  page: number,
  size: number,
): UseQueryResult<NoticeResponse, Error> {
  const QUERY_KEY = 'Notice';
  return useQuery({
    queryKey: [QUERY_KEY, page, size],
    queryFn: () => getNotices(page, size),
  });
}

export function useGetNoticeDetail(
  noticeId: string,
): UseQueryResult<NoticeResponseDetail, Error> {
  const QUERY_KEY = 'NoticeDetail';
  return useQuery({
    queryKey: [QUERY_KEY, noticeId],
    queryFn: () => getNoticeDetail(noticeId),
  });
}
