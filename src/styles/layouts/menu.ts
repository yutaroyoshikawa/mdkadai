import styled from 'styled-components'

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
left: 40px;
z-index: 20;
`

export const MainContent = styled.ul`
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.4);
display: flex;
justify-content: space-evenly;
align-items: center;
`

export const Contents = styled.li`
width: 103px;
height: 103px;
border: solid 1px #fff;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: background 200ms ease;

&:hover {
  background: rgba(255, 255, 255, 0.1);
}
`
