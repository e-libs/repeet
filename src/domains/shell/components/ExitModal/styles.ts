import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ConfirmText = styled.Text`
  font-size: 30px;
  margin-bottom: 30px;
`;

export const ConfirmButton = styled.TouchableHighlight`
  background-color: #c70039;
  border-radius: 20px;
  padding: 20px 30px;
  margin: 0 10px;
`;

export const CancelButton = styled.TouchableHighlight`
  background-color: #658d9a;
  border-radius: 20px;
  padding: 20px 30px;
  margin: 0 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
