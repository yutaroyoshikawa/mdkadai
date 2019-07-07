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
@media screen and (min-width: 1024px) {
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  flex-direction: column;
  flex-wrap: wrap;
  margin: 40px 0 0 90px;
}

@media screen and (max-width: 767px) {
  flex-direction: column;
  flex-wrap: wrap;
  margin: 40px 0 0 40px;
}
`

export const VisualWrap = styled.section`
display: flex;
justify-content: flex-start;
align-items: center;
transition: filter 500ms ease;
filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
@media screen and (min-width: 768px) and (max-width: 1024px) {
  margin-bottom: 50px;
}

@media screen and (max-width: 767px) {
  margin: 0 0 50px 20px;
}
`

export const ArtWorkWrap = styled.figure`
display: flex;
@media screen and (min-width: 1024px) {
  width: 350px;
  height: 350px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  width: 208px;
  height: 208px;
}

@media screen and (max-width: 767px) {
  width: 125px;
  height: 125px;
}
`

export const ArtWork = styled.img`
width: 100%;
`

export const TitleWrap = styled.div`
position: absolute;
display: block;
z-index: 2;
@media screen and (min-width: 1024px) {
  transform: translate(200px, 100px);
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  transform: translate(160px, 70px);
}

@media screen and (max-width: 767px) {
  transform: translate(100px, 40px);
}
`

export const Title = styled.h1`
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

export const Release = styled.h2`
@media screen and (min-width: 1024px) {
  font-size: 16px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  font-size: 16px;
}

@media screen and (max-width: 767px) {
  font-size: 11px;
}
`

export const OverView = styled.p`
display: block;
overflow-y: scroll;
text-align: justify;
@media screen and (min-width: 1024px) {
  width: 553px;
  height: 200px;
  margin-left: 70px;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 3px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  width: 406px;
  height: 256px;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 3px;
}

@media screen and (max-width: 767px) {
  width: 70vw;
  height: 200px;
  font-size: 13px;
  line-height: 30px;
  letter-spacing: 3px;
}
`
