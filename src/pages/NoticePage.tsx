import NoticePageBar from '@/components/notice/NoticePageBar';
import NoticePreviewComponent from '@/components/notice/NoticePreviewComponent';
import { useGetNotice } from '@/hooks/notices';
import * as S from '@styles/notice/NoticePage';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const NoticePage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';

  const { data, refetch, isLoading } = useGetNotice(Number(page), 6);

  const noticeList = data?.data?.information?.dataList || [];

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <S.Container>
      {isLoading && <S.LoadingMessage>로딩 중입니다...</S.LoadingMessage>}

      <S.Title>공지사항</S.Title>

      {noticeList.length > 0 ? (
        noticeList.map((content, index) => (
          <NoticePreviewComponent content={content} key={index} />
        ))
      ) : (
        <S.NoNoticeMessage>공지사항이 없습니다.</S.NoNoticeMessage>
      )}
      <NoticePageBar totalPage={data.data.information.pageInfo.totalPage} />
    </S.Container>
  );
};

export default NoticePage;
