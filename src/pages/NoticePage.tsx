import NoticePageBar from '@/components/notice/NoticePageBar';
import NoticePreviewComponent from '@/components/notice/NoticePreviewComponent';
import { useGetNotice } from '@/hooks/notices';
import * as S from '@styles/notice/NoticePage';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const NoticePage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';

  const { data, refetch } = useGetNotice(Number(page), 6);

  const noticeList = data?.data?.information?.dataList || [];
  const totalPage = data?.data.information.pageInfo.totalPage || 0;

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <S.Container>
      <S.Title>공지사항</S.Title>
      {noticeList.length > 0 ? (
        noticeList.map((content, index) => (
          <NoticePreviewComponent content={content} key={index} />
        ))
      ) : (
        <S.NoNoticeMessage>공지사항이 없습니다.</S.NoNoticeMessage>
      )}
      <NoticePageBar totalPage={totalPage!} />
    </S.Container>
  );
};

export default NoticePage;
