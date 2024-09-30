import ImgSwitcher from '../common/ImgSwitcher';
import { AffiliateBarList } from '@/constants/affiliatebar';

const BarDetailTab = ({
  selectedId,
  setSelectedId,
}: {
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const isPrevDisabled = selectedId === 0;
  const isNextDisabled = selectedId === AffiliateBarList.length - 1;

  const handlePrev = () => {
    setSelectedId(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setSelectedId(prev => Math.min(prev + 1, AffiliateBarList.length - 1));
  };

  return (
    <div>
      <ImgSwitcher
        img={AffiliateBarList[selectedId].bigImg}
        handlePrev={handlePrev}
        isPrevDisabled={isPrevDisabled}
        handleNext={handleNext}
        isNextDisabled={isNextDisabled}
      />
    </div>
  );
};

export default BarDetailTab;
