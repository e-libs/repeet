import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 40px;
`;

export const Label = styled.Text<{ disabled: boolean }>`
  ${({ disabled }) => css`
    color: ${disabled ? '#999' : '#000'};
  `}
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const Description = styled.Text<{ disabled: boolean }>`
  ${({ disabled }) => css`
    color: ${disabled ? '#888' : '#000'};
  `}
  margin-top: 20px;
  font-size: 18px;
`;
