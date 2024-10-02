import { AffiliatedItemList } from '@/constants/affiliateditems';
import * as S from '@styles/affiliateditems/AffiliatedItemStyle';
import ListItem from '../common/ListItem';
import Map from '@images/affiliateditems/Map.png';
import ChevronLeftIcon from '@icons/header/ChevronLeft.svg?react';
import GoogleMapsIcon from '@icons/header/GoogleMaps.svg?react';
import { useState } from 'react';

const AffiliatedItemTab = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <S.Container>
      {AffiliatedItemList.map((data, index) => {
        return (
          <S.ListWrap key={index}>
            <img src={data.logoImg} />
            <p>{data.description}</p>
            <S.ItemWrap>
              {data.item.map((item, index) => {
                return <ListItem key={index} data={item} isDeep={true} />;
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
                    <img src={Map} width="100%" />
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
