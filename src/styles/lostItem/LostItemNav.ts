import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 60px;
`;

export const NavItem = styled.div<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${props => (props.isActive ? '51.5px' : '50px')};
  background-color: ${props =>
    props.isActive ? 'var(--PaleBlue)' : 'var(--SoftBlue)'};
  font: ${props => (props.isActive ? 'var(--TapFocus)' : 'var(--TapDefault)')};
  color: ${props => (props.isActive ? 'var(--SoftBlue)' : 'white')};
  border-top: ${props =>
    props.isActive ? 'var(--PastelBlue) 1.5px solid' : ''};
  border-bottom: ${props =>
    !props.isActive ? 'var(--PastelBlue) 1.5px solid' : ''};
  border-left: ${props =>
    props.isActive ? 'var(--PastelBlue) 1.5px solid' : ''};
  border-right: ${props =>
    props.isActive ? 'var(--PastelBlue) 1.5px solid' : ''};
`;
