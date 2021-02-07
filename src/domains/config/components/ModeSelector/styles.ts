import styled, { css } from 'styled-components/native';

export const Label = styled.Text`
  font-size: 40px;
`;

export const ButtonContainer = styled.View`
  /* flex: 1;
  display: flex; */
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

// TODO: reuse / share styles below
export const DefaultButton = styled.TouchableOpacity<{ active: boolean }>`
  ${({ active }) => css`
    flex: 1;
    align-items: center;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: ${active ? '#26bd53' : '#AAA'};
    padding: 20px;
  `}
`;

export const ExtendedButton = styled.TouchableOpacity<{ active: boolean }>`
  ${({ active }) => css`
    flex: 1;
    align-items: center;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: ${active ? 'green' : '#AAA'};
    padding: 20px;
  `}
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 30px;
`;

export const Description = styled.Text`
  margin-top: 20px;
  font-size: 20px;
`;
