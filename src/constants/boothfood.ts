import SurvivalImg from '@images/boothfood/StudentCouncilBooth/Survival.png';
import BraceletBoothImg from '@images/boothfood/StudentCouncilBooth/BraceletBooth.png';
import GoodsBoothImg from '@images/boothfood/StudentCouncilBooth/GoodsBooth.png';
import PartnershipBoothImg from '@images/boothfood/StudentCouncilBooth/PartnershipBooth.png';
import EmergencyBoothImg from '@images/boothfood/StudentCouncilBooth/EmergencyBooth.png';
import LawCollegeImg from '@images/boothfood/CollegeBooth/LawCollege.png';
import ICTConvergenceImg from '@images/boothfood/CollegeBooth/ICTConvergence.png';
import StudentUnionImg from '@images/boothfood/CollegeBooth/StudentUnion.png';
import BusinessDepartmentImg from '@images/boothfood/DepartmentBooth/BusinessDepartment.png';
import LibraryInfoDepartmentImg from '@images/boothfood/DepartmentBooth/LibraryInfoDepartment.png';
import EnglishLitDepartmentImg from '@images/boothfood/DepartmentBooth/EnglishLitDepartment.png';
import SoftwareConvergenceImg from '@images/boothfood/DepartmentBooth/SoftwareConvergence.png';
import YouthGuidanceDepartmentImg from '@images/boothfood/DepartmentBooth/YouthGuidanceDepartment.png';
import PublicAdminDepartmentImg from '@images/boothfood/DepartmentBooth/PublicAdminDepartment.png';
import RCYImg from '@images/boothfood/CampusOrganizationBooth/RCY.png';
import MyeongjiServiceImg from '@images/boothfood/CampusOrganizationBooth/MyeongjiService.png';
import SaebitHongboImg from '@images/boothfood/CampusOrganizationBooth/SaebitHongbo.png';
import DisabilitySupportersImg from '@images/boothfood/CampusOrganizationBooth/DisabilitySupporters.png';
import AouramiImg from '@images/boothfood/CampusOrganizationBooth/Aourami.png';
import StartupClubImg from '@images/boothfood/CampusOrganizationBooth/StartupClub.png';
import MyeongjiMilitaryImg from '@images/boothfood/CampusOrganizationBooth/MyeongjiMilitary.png';
import MyeongjiTomorrowImg from '@images/boothfood/CampusOrganizationBooth/MyeongjiTomorrow.png';
import DonghwaDahmImg from '@images/boothfood/CampusOrganizationBooth/DonghwaDahm.png';
import NightBoothImg from '@images/boothfood/NightBooth/NightBooth.png';

import BeefBibimbapImg from '@images/boothfood/FoodTruck/BeefBibimbap.png';
import ChickenGangjeongImg from '@images/boothfood/FoodTruck/ChickenGangjeong.png';
import SundaeGopchangImg from '@images/boothfood/FoodTruck/SundaeGopchang.png';
import ChurrosImg from '@images/boothfood/FoodTruck/Churros.png';
import ChickenSkewersImg from '@images/boothfood/FoodTruck/ChickenSkewers.png';
import TakoyakiImg from '@images/boothfood/FoodTruck/Takoyaki.png';
import CrepeImg from '@images/boothfood/FoodTruck/Crepe.png';
import YakisobaImg from '@images/boothfood/FoodTruck/Yakisoba.png';
import SteakImg from '@images/boothfood/FoodTruck/Steak.png';
import CoffeeImg from '@images/boothfood/FoodTruck/Coffee.png';

export const BoothItemList = [
  {
    id: 1,
    header: '총학생회 부스',
    item: [
      {
        img: BraceletBoothImg,
        item: [
          {
            host: '총학생회',
            title: '팔찌 배부 부스',
            description: '부스 내용 : 팔찌 및 리플렛 배부',
            time: '운영 시간 : 10:00 ~ 19:00',
            location: '학생회관 앞',
          },
        ],
      },
      {
        img: GoodsBoothImg,
        item: [
          {
            host: '총학생회',
            title: '이벤트 부스',
            description:
              '낭만 우체국 : 10:00 ~ 선착순 150명 종료 시까지\n낭만 모음.zip : 10:00 ~ 18:00',
            location: '종합관 앞',
            etc: '*자세한 내용은 이벤트 페이지에서 확인 부탁드립니다.',
          },
          {
            host: '총학생회',
            title: '굿즈 판매 부스',
            description:
              '부스 내용 : 사전 구매 레플리카 배부 및 축제 굿즈 판매',
            time: '운영 시간 : 10:00 ~ 15:00',
            location: '종합관 앞',
            etc: '*자세한 내용은 이벤트 페이지에서 확인 부탁드립니다.',
          },
        ],
      },
      {
        img: PartnershipBoothImg,
        item: [
          {
            host: '총학생회',
            title: '이벤트 · 제휴 부스',
            description: '부스 내용 : 축제 협찬품 증정',
            time: '청춘 출력소 : 10:00 ~ 18:00\n드레스 코드 이벤트 : 12:00 ~ 선착순 50명 종료 시까지\n낭만 찾아 삼만리 : 10:00 ~ 선착순 40명 종료 시까지\n제휴 부스 : 10:00 ~ 재고 소진 시 마감\n제휴 부스 : 10:00 ~ 재고 소진 시 마감',
            location: '구령대',
            etc: '*자세한 내용은 이벤트 페이지에서 확인 부탁드립니다.',
          },
        ],
      },
      {
        img: SurvivalImg,
        item: [
          {
            host: '총학생회',
            title: '서바이벌 존',
            description: '부스 내용 : 레이저태그 서바이벌 게임 진행',
            time: '운영 시간 : 11:00 ~ 16:00',
            location: '농구장',
          },
        ],
      },
      {
        img: EmergencyBoothImg,
        item: [
          {
            host: '총학생회',
            title: '응급 부스',
            description: '부스 내용 : 의료 지원 및 분실물 관리',
            time: '운영 시간 : 10:00 ~ 22:00',
            location: '축구장 출입구 부근',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    header: '단과대학 부스',
    item: [
      {
        img: LawCollegeImg,
        item: [
          {
            host: '법과대학',
            title: '나 주먹왕 랄프인데, 이거 재밌다',
            description: '야시장 / 펀치 게임 / 호떡 및 소세지 판매',
            location: '종합관 앞',
          },
        ],
      },
      {
        img: ICTConvergenceImg,
        item: [
          {
            host: 'ICT융합대학',
            title: '요즘 아이시티의 정석',
            description: '카페 (요아정, 아망추) / 오락',
            location: '종합관 앞',
          },
        ],
      },
      {
        img: StudentUnionImg,
        item: [
          {
            host: '총동아리연합회',
            title: 'Temu:th',
            description: '짝',
            location: '종합관 앞',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    header: '학과 부스',
    item: [
      {
        img: BusinessDepartmentImg,
        item: [
          {
            host: '경영학과',
            title: '포켓몬 센터',
            description: '뽑기 / 돈까스 판매',
            location: '종합관 앞',
          },
        ],
      },
      {
        img: LibraryInfoDepartmentImg,
        item: [
          {
            host: '문헌정보학과',
            title: '북(BOOK)적북적',
            description: '오락실 + 소개팅',
            location: '종합관 앞',
          },
        ],
      },
      {
        img: EnglishLitDepartmentImg,
        item: [
          {
            host: '영어영문학과',
            title: '9와 4분의 3 승강장에서 영문과가 널 기다려',
            description: '해리포터 컨셉 카페(핫도그+과일에이드)',
            location: '종합관 앞',
          },
        ],
      },
      {
        img: SoftwareConvergenceImg,
        item: [
          {
            host: '융합소프트웨어학부',
            title: '사랑의 알고리즘',
            description: '성향 테스트 + 궁합 찾기',
            location: '종합관 앞',
          },
        ],
      },
      {
        img: YouthGuidanceDepartmentImg,
        item: [
          {
            host: '청소년지도학과',
            title: '깜깜 시그널(블라인드 단체 미팅)',
            description: '블라인드 미팅 + 뽑기',
            location: '종합관 앞',
          },
        ],
      },
      {
        img: PublicAdminDepartmentImg,
        item: [
          {
            host: '행정학과',
            title: '우㉣ㅣ행촌ㅎトスト(´ε｀)♡',
            description: '싸이월드(소개팅+노래 맞추기)',
            location: '종합관 앞',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    header: '교내 단체 부스',
    item: [
      {
        img: RCYImg,
        item: [
          {
            host: 'RCY',
            title: 'TOY STORY : 앤디가 잠든 사이',
            description: '팬케이크 + 총 게임',
            location: 'MCC관 앞',
          },
        ],
      },
      {
        img: MyeongjiServiceImg,
        item: [
          {
            host: '명지사랑봉사단 X 그린캠퍼스 지킴이',
            title: '사회봉사단과 지구 사랑할래?',
            description: '분리배출 게임',
            location: 'MCC관 앞',
          },
        ],
      },
      {
        img: SaebitHongboImg,
        item: [
          {
            host: '새빛모리&홍보기자단',
            title: '홍보기자단X새빛모리',
            description:
              '새빛모리: 오락실(게임+풍선 제공)\n홍기단: 사진관(폴라로이드+엽서)',
            location: 'MCC관 앞',
          },
        ],
      },
      {
        img: DisabilitySupportersImg,
        item: [
          {
            host: '장애학생 서포터즈 “아띠”',
            title: '우리랑 배(리어)프(리)할래?',
            description: '인식 개선',
            location: '종합관 앞',
          },
        ],
      },
      {
        img: AouramiImg,
        item: [
          {
            host: '어우라미',
            title: '어우라미 헤나 부스',
            description: '헤나+상품 뽑기',
            location: '행정동 앞',
          },
        ],
      },
      {
        img: StartupClubImg,
        item: [
          {
            host: '창업동아리',
            title: '네잎클로버',
            description: '네잎클로버 그립톡 만들기+행운의 상대',
            location: 'MCC관 앞',
          },
        ],
      },
      {
        img: MyeongjiMilitaryImg,
        item: [
          {
            host: '명지대 학군단',
            title: 'ROTC는 스펙이다',
            description: '사격+체력경연대회+다과 제공',
            location: 'MCC관 앞',
          },
        ],
      },
      {
        img: MyeongjiTomorrowImg,
        item: [
          {
            host: '명지내일',
            title: '취명타 : 취업 문제 명중 타격',
            description: '플라잉디스크',
            location: '종합관 앞',
          },
        ],
      },
      {
        img: DonghwaDahmImg,
        item: [
          {
            host: '동화담 X 다함',
            title: '졸업했지만 학교는 가고싶어.',
            description: '휘낭시에 및 쿠키 판매',
            location: 'MCC관 앞',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    header: '야간 부스',
    item: [
      {
        img: NightBoothImg,
        item: [
          {
            host: '경영대학 X 사회과학대학 X 인문대학',
            title: 'NEON Bloom',
            description: '연합 주점',
            location: '미래융합관 앞',
          },
        ],
      },
    ],
  },
];

export const NoticeText = [
  {
    title: '푸드트럭',
    date: '- 10월 7일 : 10:00 ~ 23:00\n- 10월 8일 : 10:00 ~ 22:00',
    location: '국제관 앞',
  },
  {
    title: '취식존',
    date: '- 10월 7일 : 10:00 ~ 23:00\n- 10월 8일 : 10:00 ~ 22:00',
    location: '방목학술정보관과 행정동 사이',
  },
];

export const FoodItemList = [
  {
    img: BeefBibimbapImg,
    title: '메이트럭',
    description: '소고기 불초밥',
  },
  {
    img: ChickenGangjeongImg,
    title: '블랙키친',
    description: '닭강정',
  },
  {
    img: SundaeGopchangImg,
    title: '곱창 좋은 날',
    description: '순대곱창',
  },
  {
    img: ChurrosImg,
    title: '부부츄러스',
    description: '회오리감자\n츄러스, 아이스크림 츄러스',
  },
  {
    img: ChickenSkewersImg,
    title: '혜표',
    description: '닭꼬치',
  },
  {
    img: TakoyakiImg,
    title: '타코스토리',
    description: '타코야끼, 소떡소떡',
  },
  {
    img: CrepeImg,
    title: '보리마루',
    description: '수제 크레페',
  },
  {
    img: YakisobaImg,
    title: '오야붕트럭',
    description: '야끼소바',
  },
  {
    img: SteakImg,
    title: '스테이킹',
    description: '스테이크',
  },
  {
    img: CoffeeImg,
    title: '하루다방',
    description: '커피',
  },
];
