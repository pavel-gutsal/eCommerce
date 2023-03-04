import styled from 'styled-components';
import { colors, theme } from '../../Theme';

export const SBlockContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${theme.sizes.header};
  background: ${colors.backgroundApp};
`;
