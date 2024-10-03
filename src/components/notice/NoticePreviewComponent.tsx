import { Notice } from '@/types/notice';
import * as S from '@styles/notice/NoticePreviewComponent';
import { useNavigate } from 'react-router-dom';

const NoticePreviewComponent = ({ content }: { content: Notice }) => {
  const navigator = useNavigate();
  const handleMoveNoticeDetail = () => {
    navigator(`/noticeDetail?noticeId=${content.noticeId}`);
  };

  // 126자를 초과하는 경우 잘라내고 '...' 추가
  const truncateContent = (text: string | null | undefined) => {
    return text && text.length > 126 ? text.slice(0, 126) + '...' : text || '';
  };

  return (
    <S.Container onClick={handleMoveNoticeDetail}>
      <S.Title>{content.title}</S.Title>
      <S.Preview>{truncateContent(content.content)}</S.Preview>
      <S.Date>{content.createdDate}</S.Date>
    </S.Container>
  );
};

export default NoticePreviewComponent;
