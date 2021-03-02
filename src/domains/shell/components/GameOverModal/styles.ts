import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.93);
`;

export const ModalView = styled.SafeAreaView`
  flex: 1;
`;

export const NewScoreContainer = styled.View`
  flex: 5;
  /* border: 1px solid red; */
  padding-top: 10px;
  justify-content: space-evenly;
  align-items: center;
`;

export const InputContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PlayerScore = styled.Text`
  color: #ffe067;
  font-size: 40px;
`;

export const PlayerLevel = styled.Text`
  color: #ffe067;
  font-size: 40px;
`;

export const InitialsMessage = styled.Text`
  color: #fff;
  font-size: 30px;
`;

export const ButtonContainer = styled.View`
  flex: 5;
  justify-content: space-evenly;
  padding: 100px 0;
`;

export const FarewellMessageContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding-top: 20px;
`;

export const SaveScoreContainer = styled.View`
  flex: 5;
  justify-content: center;
`;

export const FarewellMessage = styled.Text`
  color: #fff;
  font-size: 35px;
`;

const Button = styled.TouchableHighlight`
  border-radius: 20px;
  padding: 20px 50px;
  margin: 20px;
`;

export const ExitButton = styled(Button)`
  background-color: #222;
`;

export const SkipButton = styled(Button)`
  background-color: #222;
`;

export const TryAgainButton = styled(Button)`
  background-color: #649700;
`;

export const SaveButton = styled(Button)`
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
