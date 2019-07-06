import styled from 'styled-components'

export const entire = styled.main`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const Wrap = styled.div`
display: flex;
align-items: flex-start;
`

export const VisualWrap = styled.section`
display: flex;
justify-content: flex-start;
align-items: center;
transition: filter 500ms ease;
filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
`

export const ArtWorkWrap = styled.figure`
width: 350px;
height: 350px;
display: flex;
`

export const ArtWork = styled.img`
width: 100%;
`

export const TitleWrap = styled.div`
font-size: 38px;
position: absolute;
display: block;
z-index: 2;
transform: translate(200px, 100px);
`

export const Title = styled.h1`
font-size: 38px;
`

export const Release = styled.h2`
font-size: 16px;
`

export const OverView = styled.p`
display: block;
width: 553px;
height: 200px;
overflow-y: scroll;
text-align: justify;
font-size: 16px;
margin-left: 70px;
line-height: 30px;
letter-spacing: 3px;
`
