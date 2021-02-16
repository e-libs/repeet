import styled, { css } from 'styled-components/native';

export const Box = styled.View<{ color?: string }>`
  ${({ color }) => css`
    flex: 1;
    background-color: ${color ?? 'black'};
    border: 5px solid black;
  `}
`;
