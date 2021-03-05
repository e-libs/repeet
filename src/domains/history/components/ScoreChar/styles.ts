import styled, { css } from 'styled-components/native';

export const Placeholder = styled.View`
  flex-direction: row;
`;

export const Char = styled.View<{ color: string; isFirst: boolean }>`
  ${({ color, isFirst }) => css`
    width: 30px;
    align-items: center;
    box-shadow: ${isFirst ? '4px 8px 2px #333' : '4px 8px 5px #888888'};
    background-color: ${color};
    margin: 0 1px;
    border-radius: 5px;
  `}
`;

export const Text = styled.Text<{ color: string; isFirst: boolean }>`
  ${({ color, isFirst }) => css`
    font-weight: ${isFirst ? 'bold' : 'normal'};
    font-size: 25px;
    color: ${color};
  `}
`;
