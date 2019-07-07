import styled, { css } from 'styled-components'

export const WorksWrap = styled.ul`
@media screen and (min-width: 1024px) {
  margin: calc(50vh - 175px) 0;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  margin: calc(50vh - 165px) 0;
}

@media screen and (max-width: 767px) {
  margin: calc(50vh - 62px) 0;
}
`

export const Works = styled.li`
cursor: pointer;
display: flex;
justify-content: flex-start;
align-items: center;
transition: filter 500ms ease;
filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));

&:hover {
  filter: drop-shadow(0 0 18px rgba(0, 0, 0, 0.5));
}

@media screen and (min-width: 1024px) {
  width: 560px;
  height: 350px;
  margin: 300px auto;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  width: 330px;
  height: 208px;
  margin: 170px auto;
}

@media screen and (max-width: 767px) {
  width: 150px;
  height: 125px;
  margin: 100px auto;
}
`

const Title = css`
z-index: 2;
display: block;

@media screen and (min-width: 1024px) {
  font-size: 38px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  font-size: 22px;
}

@media screen and (max-width: 767px) {
  font-size: 13px;
}
`

export const LeftTitle = styled.h2`
${Title}
position: relative;

@media screen and (min-width: 1024px) {
  transform: translateY(100px);
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  transform: translateY(70px);
}

@media screen and (max-width: 767px) {
  transform: translateY(40px);
}
`

export const RightTitle = styled.h2`
${Title}
position: absolute;

@media screen and (min-width: 1024px) {
  transform: translate(200px, 100px);
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  transform: translate(160px, 70px);
}

@media screen and (max-width: 767px) {
  transform: translate(50px, 40px);
}
`

const ArtWorkWrap = css`
z-index: 1;

@media screen and (min-width: 1024px) {
  width: 350px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  width: 208px;
}

@media screen and (max-width: 767px) {
  width: 125px;
}
`

export const RightArtWorkWrap = styled.figure`
${ArtWorkWrap}
position: absolute;

@media screen and (min-width: 1024px) {
  transform: translateX(200px);
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  transform: translateX(100px);
}

@media screen and (max-width: 767px) {
  transform: translateX(50px);
}
`

export const LeftArtWorkWrap = styled.figure`
${ArtWorkWrap}
position: relative;
`

export const ArtWork = styled.img`
width: 100%;
`
