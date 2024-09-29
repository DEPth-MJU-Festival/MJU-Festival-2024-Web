import styled from 'styled-components';

const IconPosition = styled.div`
  position: absolute;
`;

export const LeftTop = styled(IconPosition)<{ $padding: number }>`
  top: ${props => props.$padding}px;
  left: ${props => props.$padding}px;
`;

export const RightTop = styled(IconPosition)<{ $padding: number }>`
  top: ${props => props.$padding}px;
  right: ${props => props.$padding}px;
`;

export const RightBottom = styled(IconPosition)<{ $padding: number }>`
  bottom: ${props => (props.$padding === 4 ? 0 : 12)}px;
  right: ${props => props.$padding}px;
`;

export const LeftBottom = styled(IconPosition)<{ $padding: number }>`
  bottom: ${props => (props.$padding === 4 ? 0 : 12)}px;
  left: ${props => props.$padding}px;
`;
