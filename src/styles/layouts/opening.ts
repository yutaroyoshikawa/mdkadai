import styled, { keyframes } from 'styled-components'

const Opening = keyframes`
0% {
  width: 100vw;
  height: 100vh;
  background: rgba(110, 19, 22, 1);
}
100% {
  width: 80px;
  height: 80px;
  background: rgba(110, 19, 22, 0);
}
`

export const Entire = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background: rgba(110, 19, 22, 1);
animation: ${Opening} 1000ms ease 2000ms 1 forwards;
`
