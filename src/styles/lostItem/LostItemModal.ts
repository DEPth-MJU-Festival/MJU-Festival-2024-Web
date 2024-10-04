import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 40px 50px;
  width: 90%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1001;
`;

export const Title = styled.h2`
  margin: 10px 0px;
  font-size: 20px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  box-shadow: 0 4px 10px rgba(141, 166, 212, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const Name = styled.p`
  font: var(--BodyText);
  margin-top: 10px;
`;
