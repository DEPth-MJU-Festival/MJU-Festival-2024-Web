import { AffiliatedItemList } from '@/constants/affiliateditems';
import * as S from '@styles/affiliateditems/AffiliatedItemTabStyle';
import ListItem from '../common/ListItem';
import MapImg from '@images/affiliateditems/Map.png';
import ChevronLeftIcon from '@icons/header/ChevronLeft.svg?react';
import GoogleMapsIcon from '@icons/header/GoogleMaps.svg?react';
import { useState } from 'react';

const paddingTopValues = [
  '7.25%',
  '10.34%',
  '12.29%',
  '8.37%',
  '6.70%',
  '6.15%',
];

const AffiliatedItemTab = ({
  preloadImages,
  preloadLogoImages,
}: {
  preloadImages: string[];
  preloadLogoImages: string[];
}) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  let preloadIndex = 0;

  return (
    <S.Container>
      {AffiliatedItemList.map((data, index) => {
        return (
          <S.ListWrap key={index}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: paddingTopValues[index],
              }}
            >
              <img
                src={preloadLogoImages[index]}
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
            <p>{data.description}</p>
            <S.ItemWrap>
              {data.item.map((item, index) => {
                const preloadImage = preloadImages[preloadIndex++];

                return (
                  <ListItem
                    key={index}
                    data={item}
                    isDeep={true}
                    preloadImage={preloadImage}
                  />
                );
              })}
              <S.DropdownWrap>
                <S.ButtonWrap
                  $selected={selectedIds.includes(data.id)}
                  onClick={() => handleSelect(data.id)}
                >
                  <h2>{data.locationTitle}</h2>
                  <ChevronLeftIcon color="var(--SoftBlue)" />
                </S.ButtonWrap>
                {selectedIds.includes(data.id) && (
                  <S.SelectedWrap>
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        paddingTop: '57.51%',
                      }}
                    >
                      <img
                        src={MapImg}
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
                    <div>
                      <GoogleMapsIcon color="var(--DeepBlue" />
                      <h6>{data.location}</h6>
                    </div>
                    {data.reference && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.reference.replace(
                            / {3,}/g,
                            '&nbsp;&nbsp;&nbsp;',
                          ),
                        }}
                      />
                    )}
                  </S.SelectedWrap>
                )}
              </S.DropdownWrap>
            </S.ItemWrap>
          </S.ListWrap>
        );
      })}
    </S.Container>
  );
};

export default AffiliatedItemTab;
