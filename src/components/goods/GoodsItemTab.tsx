import { GoodsList } from '@/constants/goods';
import * as S from '@styles/goods/GoodsItemTabStyle';

const GoodsItemTab = () => {
  return (
    <S.Container>
      {GoodsList.map((data, index) => {
        return (
          <S.ItemWrap key={index}>
            <h1>{data.title}</h1>
            <img src={data.img} width="100%" />
            <h5>{data.description}</h5>
            <h2>{data.price}</h2>
            <p>{data.notice}</p>
            <h6>{data.reference}</h6>
          </S.ItemWrap>
        );
      })}
    </S.Container>
  );
};

export default GoodsItemTab;
