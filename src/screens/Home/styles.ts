import styled, { css } from 'styled-components/native';

export const MainView = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex: 1.2;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const HomeContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 11;
`;

export const TapToStart = styled.Text<{ color: string }>`
  ${({ color }) => css`
    color: ${color};
    text-align: center;
    font-size: 30px;
  `}
`;

export const ConfigContainer = styled.View`
  padding-right: 20px;
`;

export const HistoryContainer = styled.View`
  padding-left: 20px;
`;

export const FooterContainer = styled.View`
  flex: 2;
`;
