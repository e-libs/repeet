import styled, { css } from 'styled-components/native';

export const Placeholder = styled.View`
  flex-direction: row;
`;

export const Char = styled.View<{ color: string }>`
  ${({ color }) => css`
    width: 27px;
    align-items: center;
    border: solid 1px grey;
    background-color: ${color};
    margin: 0 1.5px;
  `}
`;

export const Text = styled.Text<{ color: string }>`
  ${({ color }) => css`
    font-weight: bold;
    font-size: 25px;
    color: ${color};
  `}
`;
