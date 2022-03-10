import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  

  background-color: ${({ theme }) => theme.colors.header};
`;