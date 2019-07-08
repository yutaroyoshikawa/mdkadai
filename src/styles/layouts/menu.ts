import styled from 'styled-components'
import transition from 'styled-transition-group'

export const Entire = styled.nav`
position: fixed;
top: 0;
left: 0;
`

export const HumbergerWrap = styled.div`
height: 100vh;
display: flex;
align-items: center;
position: absolute;
top: 0;
z-index: 20;
@media screen and (min-width: 1024px) {
  left: 40px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  left: 40px;
}

@media screen and (max-width: 767px) {
  left: 20px;
}
`

export const MainContent = transition.ul.attrs({
  timeout: 200,
  unmountOnExit: true,
})`
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.7);
display: flex;
justify-content: space-evenly;
align-items: center;

&:enter {
  opacity: 0.01;
}
&:enter-active {
  opacity: 1;
  transition: opacity 200ms ease;
}
&:exit {
  opacity: 1;
}
&:exit-active {
  opacity: 0.01;
  transition: opacity 200ms ease;
}

@media screen and (min-width: 1024px) {
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  flex-direction: column;
  flex-wrap: wrap;
}

@media screen and (max-width: 767px) {
  flex-direction: column;
  flex-wrap: wrap;
}
`

export const Contents = styled.li`
border: solid 1px #fff;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: background 200ms ease;

&:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media screen and (min-width: 1024px) {
  width: 103px;
  height: 103px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  width: 103px;
  height: 103px;
}

@media screen and (max-width: 767px) {
  width: 51px;
  height: 51px;
  font-size: 7px;
}
`
