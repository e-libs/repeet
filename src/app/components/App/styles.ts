import styled, { css } from 'styled-components/native';

export const MainView = styled.View<{ color: string }>`
  ${({ color }) => css`
    flex: 1;
    background-color: ${color};
    align-items: center;
    justify-content: center;
  `}
`;
