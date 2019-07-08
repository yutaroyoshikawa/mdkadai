import styled, { keyframes } from 'styled-components'

const DesctopOpening = keyframes`
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

const TabletOpening = keyframes`
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

const MobileOpening = keyframes`
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
@media screen and (min-width: 1024px) {
  animation: ${DesctopOpening} 1000ms ease 2000ms 1 forwards;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  animation: ${TabletOpening} 1000ms ease 2000ms 1 forwards;
}

@media screen and (max-width: 767px) {
  animation: ${MobileOpening} 1000ms ease 2000ms 1 forwards;
}
`

export const LogoWrap = styled.div`
@media screen and (min-width: 1024px) {
	margin-top: 70px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
	margin-top: 70px;
}

@media screen and (max-width: 767px) {
	margin-top: 17px;
}
`
