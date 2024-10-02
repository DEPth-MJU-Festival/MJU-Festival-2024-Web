import * as S from '@styles/common/TabBarStyle';

type Props = {
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
  tabTitles: string[];
  topContent?: React.ReactNode;
  tabContents: React.ReactNode[];
};

const TapBar = ({
  selectedId,
  setSelectedId,
  tabTitles,
  topContent,
  tabContents,
}: Props) => {
  return (
    <S.Container>
      <S.TabWrap>
        {tabTitles.map((title, index) => (
          <S.TabItem
            key={index}
            $selected={selectedId === index}
            $selectedId={index}
            onClick={() => setSelectedId(index)}
          >
            {title}
          </S.TabItem>
        ))}
      </S.TabWrap>
      {topContent}
      {tabContents[selectedId]}
    </S.Container>
  );
};
export default TapBar;
