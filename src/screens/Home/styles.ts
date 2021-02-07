import styled, { css } from 'styled-components/native';

export const MainView = styled.View`
  flex: 1;
`;

export const HomeContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 7;
`;

export const TapToStart = styled.Text<{ color: string }>`
  ${({ color }) => css`
    color: ${color};
    text-align: center;
    font-size: 30px;
    margin-top: 30px;
  `}
`;

export const ConfigContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 20px;
`;
