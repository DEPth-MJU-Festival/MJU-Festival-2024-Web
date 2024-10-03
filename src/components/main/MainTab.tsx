import * as S from '@styles/main/MainTabStyle';
import { MainText } from '@constants/main';
import { forwardRef, useState } from 'react';

const MainTab = forwardRef<HTMLDivElement, { preloadImage: string }>(
  ({ preloadImage }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <div ref={ref}>
        <div
          style={{ position: 'relative', width: '100%', paddingTop: '141.54%' }}
        >
          <img
            src={preloadImage}
            onLoad={() => setIsLoaded(true)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
            }}
          />
        </div>

        <S.TextWrap>{MainText}</S.TextWrap>
      </div>
    );
  },
);

export default MainTab;
