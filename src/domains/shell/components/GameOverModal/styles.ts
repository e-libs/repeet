import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.93);
`;

export const ModalView = styled.SafeAreaView`
  flex: 1;
`;

export const NewScoreContainer = styled.View`
  flex: 4;
  padding: 20px;
  align-items: center;
`;

export const InputContainer = styled.View`
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  flex-direction: row;
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
  margin-bottom: 30px;
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

export const Initial = styled.Text<{
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}>`
  ${({ backgroundColor, borderColor, borderWidth }) => css`
    background-color: ${backgroundColor};
    border-color: ${borderColor};
    border-width: ${borderWidth}px;
    width: 80px;
    height: 80px;
    font-size: 60px;
    margin: 10px;
    text-align: center;
    font-weight: bold;
  `}
`;

export const SaveButton = styled.TouchableHighlight<{ disabled: boolean }>`
  ${({ disabled }) => css`
    border-radius: 20px;
    padding: 20px 50px;
    margin: 20px;
    background-color: ${disabled ? 'grey' : '#649700'};
  `}
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

export const SavedMessageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const SavedMessage = styled.Text`
  color: red;
  font-size: 40px;
`;

export const HiddenTextInput = styled.TextInput`
  opacity: 0;
  position: absolute;
`;
