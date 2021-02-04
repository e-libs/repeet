import styled, { css } from 'styled-components/native';
import type { Sign } from 'domains/game/data/modules/Sign/types';

export const Box = styled.View<{ sign: Sign }>`
  ${({ sign }) => css`
    flex: 1;
    background-color: ${sign.color};
    border: 5px solid black;
  `}
`;
