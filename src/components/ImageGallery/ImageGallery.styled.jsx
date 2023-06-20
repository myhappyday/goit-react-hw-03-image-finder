import styled from '@emotion/styled';

export const ImageGalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  margin: 0 auto;
  padding: 24px;
  max-width: 70%;
  text-align: center;
  color: #3f51b5;
  font-size: 28px;
  font-weight: 500;
`;
