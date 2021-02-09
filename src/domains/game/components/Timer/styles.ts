import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ visible: boolean }>`
  ${({ visible }) => css`
    flex: 1;
    display: ${visible ? 'flex' : 'none'};
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const Indicator = styled.View<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#FFF' : '#333')};
  width: 8px;
`;
