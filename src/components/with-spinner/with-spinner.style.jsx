import styled from 'styled-components';
import Spinner from '../../assets/spinner.gif'

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  background-image: url(${Spinner});
  background-size: cover;
`