import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.93);
`;

export const ModalView = styled.View`
  align-items: center;
`;

export const NewScoreContainer = styled.View`
  /* margin-top: 50%; */
  justify-content: center;
  align-items: center;
`;

export const PlayerScore = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-bottom: 30px;
`;

export const PlayerLevel = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-bottom: 30px;
`;

export const InitialsMessage = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.View`
  margin-top: 50%;
  justify-content: space-evenly;
`;

export const FarewellMessage = styled.Text`
  color: #fff;
  font-size: 35px;
  margin-bottom: 30px;
`;

const Button = styled.TouchableHighlight`
  border-radius: 20px;
  padding: 20px 50px;
  margin: 20px;
`;

export const ExitButton = styled(Button)`
  background-color: #222;
`;

export const TryAgainButton = styled(Button)`
  background-color: #649700;
`;

export const ButtonText = styled.Text<{ color: string }>`
  ${({ color }) => css`
    color: ${color};
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  `}
`;
