import styled from 'styled-components'

export const WorksWrap = styled.ul`
margin: calc(50vh - 175px) 0;
`

export const Works = styled.li`
width: 560px;
height: 350px;
margin: 300px auto;
cursor: pointer;
display: flex;
justify-content: flex-start;
align-items: center;
transition: filter 500ms ease;
filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));

&:hover {
  filter: drop-shadow(0 0 18px rgba(0, 0, 0, 0.5));
}
`

export const LeftTitle = styled.h2`
font-size: 38px;
position: relative;
display: block;
position: relative;
z-index: 2;
transform: translateY(100px);
`

export const RightTitle = styled.h2`
font-size: 38px;
position: absolute;
display: block;
z-index: 2;
transform: translate(200px, 100px);
`

export const RightArtWorkWrap = styled.figure`
width: 350px;
position: absolute;
transform: translateX(200px);
z-index: 1;
`

export const LeftArtWorkWrap = styled.figure`
width: 350px;
position: relative;
z-index: 1;
`

export const ArtWork = styled.img`
width: 100%;
`
