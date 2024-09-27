import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 60px;
  z-index: 100;

  background-color: var(--WhiteSmoke);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 30px;
`;

export const NavigationWrap = styled.div<{ $selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 65px;
  height: 60px;
  cursor: pointer;

  border-bottom: ${props =>
    props.$selected ? '2px solid var(--SoftBlue)' : '2px solid transparent'};

  @media (min-width: 480px) {
    min-width: 95px;
    height: 80px;
  }

  @media (min-width: 600px) {
    min-width: 110px;
    height: 95px;
  }

  @media (min-width: 750px) {
    min-width: 130px;
    height: 110px;
    border-bottom-width: 3px;
  }

  @media (min-width: 1000px) {
    min-width: 150px;
    height: 120px;
  }

  @media (min-width: 1300px) {
    min-width: 170px;
    height: 130px;
    border-bottom-width: 4px;
  }

  @media (min-width: 1500px) {
    min-width: 200px;
    height: 140px;
    border-bottom-width: 5px;
  }

  @media (min-width: 1800px) {
    min-width: 240px;
    height: 190px;
    border-bottom-width: 6px;
  }
`;

export const NavigationText = styled.div<{ $selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  user-select: none;
  white-space: pre-wrap;
  font: ${props =>
    props.$selected ? 'var(--NaviFocus)' : 'var(--NaviDefault)'};

  @media (min-width: 480px) {
    font-size: 18px;
  }

  @media (min-width: 600px) {
    font-size: 20px;
  }

  @media (min-width: 750px) {
    font-size: 22px;
  }

  @media (min-width: 1000px) {
    font-size: 26px;
  }

  @media (min-width: 1300px) {
    font-size: 30px;
  }

  @media (min-width: 1500px) {
    font-size: 36px;
  }

  @media (min-width: 1800px) {
    font-size: 42px;
  }
`;

export const Line = styled.div`
  height: 16px;
  border: 0.5px solid var(--SoftBlue);

  @media (min-width: 480px) {
    height: 20px;
  }

  @media (min-width: 600px) {
    height: 26px;
  }

  @media (min-width: 750px) {
    height: 30px;
  }

  @media (min-width: 1000px) {
    height: 35px;
    border-width: 1px;
  }

  @media (min-width: 1300px) {
    height: 40px;
  }

  @media (min-width: 1500px) {
    height: 45px;
  }

  @media (min-width: 1800px) {
    height: 50px;
  }
`;
