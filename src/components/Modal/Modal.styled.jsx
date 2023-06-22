import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  /* z-index: 1200; */
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: auto;
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  overflow: hidden;

  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 48px);
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

export const ModalDescription = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
`;
