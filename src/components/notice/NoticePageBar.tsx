import { Notice } from '@/types/notice';
import Chevron from '@assets/index';
import * as S from '@styles/notice/NoticePageBar';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
const NoticePageBar = ({ noticeList }: { noticeList: Notice[] }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');

  const totalPage = Math.ceil(noticeList.length / 6); //총 페이지 수
  const pageList = Array.from({ length: totalPage }, (_, i) => i + 1);

  console.log(pageList, noticeList, 4 % 6);

  const handleSetPage = (page: number) => {
    searchParams.set('page', decodeURIComponent(page.toString()));
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!currentPage) {
      searchParams.set('page', decodeURIComponent('1'));
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, currentPage]);

  return (
    <S.Container>
      <Chevron
        style={{ cursor: 'pointer' }}
        fill={currentPage === '1' ? 'var(--PaleBlue)' : 'black'}
      />
      {pageList.map((item, index) => {
        const page = item; // 숫자 값으로 가정

        return page === Number(currentPage) ? (
          <S.CurrentPageText key={index} onClick={() => handleSetPage(page)}>
            {page}
          </S.CurrentPageText>
        ) : (
          <S.PageText key={index} onClick={() => handleSetPage(page)}>
            {page}
          </S.PageText>
        );
      })}
      <Chevron
        style={{ cursor: 'pointer', transform: 'rotate(180deg)' }}
        fill={Number(currentPage) === totalPage ? 'var(--PaleBlue)' : 'black'}
      />
    </S.Container>
  );
};

export default NoticePageBar;
