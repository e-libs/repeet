import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Button = styled.TouchableOpacity<{ color: string; disabled: boolean }>`
  ${({ color, disabled }) => css`
    background-color: ${color};
    flex: 1;
    border: 5px solid black;
    opacity: ${disabled ? '0.1' : '1'};
  `}
`;
