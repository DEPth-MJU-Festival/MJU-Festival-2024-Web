import Chevron from '@assets/index';
import * as S from '@styles/notice/NoticePageBar';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
const NoticePageBar = ({ totalPage }: { totalPage: number }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');

  const pageList = Array.from({ length: totalPage }, (_, i) => i + 1);

  const handleSetPage = (page: number) => {
    searchParams.set('page', decodeURIComponent(page.toString()));
    setSearchParams(searchParams);
  };

  const handlePrevPage = () => {
    if (Number(currentPage) > 1) {
      searchParams.set(
        'page',
        decodeURIComponent((Number(currentPage) - 1).toString()),
      );
      setSearchParams(searchParams);
    }
  };

  const handleNextPage = () => {
    if (Number(currentPage) < totalPage) {
      searchParams.set(
        'page',
        decodeURIComponent((Number(currentPage) + 1).toString()),
      );
      setSearchParams(searchParams);
    }
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
        onClick={handlePrevPage}
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
        onClick={handleNextPage}
      />
    </S.Container>
  );
};

export default NoticePageBar;
