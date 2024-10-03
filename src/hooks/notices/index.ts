import { getNoticeDetail, getNotices } from '@/apis/notices';
import { NoticeResponse, NoticeResponseDetail } from '@/types/notice';
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

export function useGetNotice(
  page: number,
  size: number,
): UseSuspenseQueryResult<NoticeResponse, Error> {
  const QUERY_KEY = 'Notice';
  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getNotices(page, size),
  });
}

export function useGetNoticeDetail(
  noticeId: string,
): UseSuspenseQueryResult<NoticeResponseDetail, Error> {
  const QUERY_KEY = 'NoticeDetail';
  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getNoticeDetail(noticeId),
  });
}
