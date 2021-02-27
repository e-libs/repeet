import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.93);
`;

export const ModalView = styled.SafeAreaView`
  /* align-items: center; */
  flex: 1;
`;

export const NewScoreContainer = styled.View`
  flex: 3;
  border: 1px solid red;
  padding: 20px;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.View`
  border: 1px solid red;
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
  flex: 3;
  margin-top: 50%;
  justify-content: space-evenly;
`;

export const FarewellMessageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const SaveScoreContainer = styled.View`
  justify-content: center;
  align-items: center;
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

export const HighScoresButton = styled(Button)`
  background-color: #77f;
`;

export const ButtonText = styled.Text<{ color: string }>`
  ${({ color }) => css`
    color: ${color};
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  `}
`;
