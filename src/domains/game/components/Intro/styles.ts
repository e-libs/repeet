import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ color: string }>`
  ${({ color }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${color};
  `}
`;

export const GetReadyContainer = styled.View`
  flex: 2.5;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const TimerContainer = styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;
`;

export const GetReadyLabel = styled.Text`
  font-weight: bold;
  font-size: 65px;
`;

export const Timer = styled.Text`
  font-weight: bold;
  font-size: 280px;
`;

export const Go = styled.Text`
  font-weight: bold;
  font-size: 170px;
`;

export const BottomSpacer = styled.View`
  flex: 3;
`;
