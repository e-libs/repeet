import styled from 'styled-components/native';

export const MainView = styled.View`
  flex: 1;
`;

export const HeaderView = styled.View`
  flex: 2;
`;

export const SequencerView = styled.View`
  flex: 5;
  background-color: #000000;
  padding: 5px;
`;

export const ReadyView = styled.View`
  flex: 1.1;
  flex-direction: row;
  background-color: #000000;
`;

export const PlayerView = styled.View`
  background-color: #000000;
  flex: 5;
  padding: 5px 5px 20px;
`;

export const ReadyButton = styled.TouchableOpacity`
  /* color: red; */
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  padding: 0 20px;
`;

export const ReadyButtonText = styled.Text`
  color: #315f7e;
  font-size: 40px;
  font-weight: bold;
  bottom: 4px;
`;

export const TrainingInstructions = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const TrainingMessage = styled.Text`
  font-size: 30px;
  color: #ffffff;
  text-align: justify;
`;

export const ReadyButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;
