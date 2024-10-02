import BaseballUniformImg from '@images/goods/BaseballUniform.png';
import BasketballUniformImg from '@images/goods/BasketballUniform.png';
import SloganImg from '@images/goods/Slogan.png';
import BandanaImg from '@images/goods/Bandana.png';
import KeyringImg from '@images/goods/Keyring.png';
import PostcardImg from '@images/goods/Postcard.png';
import StickerImg from '@images/goods/Sticker.png';
import DiaryImg from '@images/goods/Diary.png';

export const GoodsList = [
  {
    title: '야구 유니폼',
    img: BaseballUniformImg,
    description: 'S, M, L, XL, 2XL, 3XL\n사이즈별 굿즈 판매 수량',
    price: '가격 : 36,000원',
    notice: '* 등번호는 ‘24’로 고정입니다.',
    reference:
      '* 사전 구매자분들만 수령 가능한 제품으로, 현장 구매는 불가합니다.',
  },
  {
    title: '농구 유니폼',
    img: BasketballUniformImg,
    description: 'XS, S, M, L, XL, 2XL, 3XL\n사이즈별 굿즈 판매 수량',
    price: '가격 : 27,000원',
    notice: '* 등번호는 ‘24’로 고정입니다.',
    reference:
      '* 사전 구매자분들만 수령 가능한 제품으로, 현장 구매는 불가합니다.',
  },
  {
    title: '슬로건',
    img: SloganImg,
    description: '단일 사이즈',
    price: '가격 : 4,000원',
    reference:
      '* 사전 구매자분들만 수령 가능한 제품으로, 현장 구매는 불가합니다.',
  },
  {
    title: '반다나',
    img: BandanaImg,
    price: '가격 : 4,000원',
    reference: '* 양일 각 175장, 총 350장 판매',
  },
  {
    title: '키링 (2종)',
    img: KeyringImg,
    price: '가격 : 3,000원',
    reference: '* 양일 각 75개, 총 150개',
  },
  {
    title: '엽서',
    img: PostcardImg,
    price: '가격 : 낱장 1,000원 / 3장 묶음 : 2,500원',
    reference: '* 엽서 당 하루 60장, 총 120장',
  },
  {
    title: '스티커',
    img: StickerImg,
    price: '가격 : 1세트 3,000원',
    reference: '* 양일 각 50세트, 총 100세트(1세트에 10장)',
  },
  {
    title: '다이어리',
    img: DiaryImg,
    price: '가격 : 10,000원',
    reference: '* 양일 각 25권,총 50권',
  },
];

export const LocationList = [
  {
    title: '부스 운영 안내',
    description1: '운영 시간 : 10:00 ~ 15:00',
    description2: '구매 가능 대상 : 축제에 참여하는 모두',
    description3: '결제 방법 : 계좌이체(현금결제 불가)',
  },
  {
    title: '레플리카 수령 방법',
    description1: '1. 굿즈 판매 부스로 방문 후 신분증 제시',
    description2: '가능 신분증 : 주민등록증, 운전면허증, 학생증,',
    description2_2: '디지털 원패스, 여권',
    description3: '2. 명단 확인 후 레플리카 배부',
  },
];
