import styled from 'styled-components'

export const Entire = styled.main`
width: 100vw;
height: 100vh;
background-image: url(${props => props.itemProp});
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;

&::before {
  content: '';
  width: 100vw;
  height: 100vh;
  background: rgba(110, 19, 22, 0.9);
  position: absolute;
  z-index: 2;
}
`

export const ContentWrap = styled.section`
position: relative;
z-index: 3;
`

export const Name = styled.h1`
font-size: 16px;
color: #fff;
`
