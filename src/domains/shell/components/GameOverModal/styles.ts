import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.93);
`;

export const ModalView = styled.View`
  align-items: center;
`;

export const ButtonContainer = styled.View`
  margin-top: 50%;
  justify-content: space-evenly;
`;

export const FarewellMessage = styled.Text`
  color: #fff;
  font-size: 40px;
  margin-bottom: 30px;
`;

export const ExitButton = styled.TouchableHighlight`
  background-color: #222;
  border-radius: 20px;
  padding: 20px 50px;
  margin: 20px;
`;

export const TryAgainButton = styled.TouchableHighlight`
  background-color: #649700;
  border-radius: 20px;
  padding: 20px 50px;
  margin: 20px;
`;

export const ButtonText = styled.Text<{ color: string }>`
  ${({ color }) => css`
    color: ${color};
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  `}
`;
