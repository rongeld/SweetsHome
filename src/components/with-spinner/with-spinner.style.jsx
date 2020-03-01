import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.img.attrs(
  props => ({'src': props.img})
)`
  display: inline-block;
  width: 100px;
  height: 100px;
`