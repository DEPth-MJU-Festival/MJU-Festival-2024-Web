import { useGetNoticeDetail } from '@/hooks/notices';
import * as S from '@styles/notice/NoticeDetailPage';

const NoticeDetailPage = () => {
  const queryParams = new URLSearchParams(location.search);
  const noticeId = queryParams.get('noticeId')!;
  const { data } = useGetNoticeDetail(noticeId!);
  const noticeDetail = data.data.information;
  return (
    <S.Container>
      <S.BannerTitle>공지사항</S.BannerTitle>

      <S.Title>{noticeDetail.title}</S.Title>
      <S.Time>{noticeDetail.createdDate}</S.Time>
      <S.Content>{noticeDetail.content}</S.Content>
    </S.Container>
  );
};

export default NoticeDetailPage;
