import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

export const ConfirmButton = styled.TouchableHighlight`
  background-color: #f194ff;
  border-radius: 20px;
  padding: 20px;
`;

export const CancelButton = styled.TouchableHighlight`
  background-color: yellow;
  border-radius: 20px;
  padding: 20px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;
