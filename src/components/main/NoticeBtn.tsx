import * as S from '@styles/main/NoticeBtnStyle';
import ReminderIcon from '@icons/header/Reminder.svg?react';
import ChevronLeftIcon from '@icons/header/ChevronLeft.svg?react';
import { useNavigate } from 'react-router-dom';

const NoticeBtn = () => {
  const navigate = useNavigate();

  return (
    <S.BtnContainer
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/notice');
      }}
    >
      <S.LeftWrap>
        <ReminderIcon color="var(--White)" />
        <p>공지사항</p>
      </S.LeftWrap>
      <ChevronLeftIcon color="var(--PaleYellow)" />
    </S.BtnContainer>
  );
};

export default NoticeBtn;
