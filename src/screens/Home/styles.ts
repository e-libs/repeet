import styled, { css } from 'styled-components/native';

export const MainView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TapToStart = styled.Text<{ color: string }>`
  ${({ color }) => css`
    color: ${color};
    text-align: center;
    font-size: 30px;
    margin-top: 30px;
  `}
`;
