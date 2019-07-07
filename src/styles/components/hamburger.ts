import styled, { css } from 'styled-components'

export const Entire = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-between;
cursor: pointer;
@media screen and (min-width: 1024px) {
  width: 60px;
  height: 20px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  width: 60px;
  height: 20px;
}

@media screen and (max-width: 767px) {
  width: 28px;
  height: 8px;
}
`

const bar = css`
width: 100%;
height: 1px;
background: #fff;
`

export const FirstBar = styled.div`
${bar}

transition: transform 400ms ease;
transform-origin: center;

@media screen and (min-width: 1024px) {
${
  props => props.itemScope
    ? `transform: rotate(20deg) translateY(10px)`
    : `transform: rotate(0deg)`
}
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
${
  props => props.itemScope
    ? `transform: rotate(20deg) translateY(10px)`
    : `transform: rotate(0deg)`
}
}

@media screen and (max-width: 767px) {
${
  props => props.itemScope
    ? `transform: rotate(20deg) translateY(4px)`
    : `transform: rotate(0deg)`
}
}
`

export const SecondBar = styled.div`
${bar}

transition: transform 400ms ease;
transform-origin: center;

@media screen and (min-width: 1024px) {
${
  props => props.itemScope
    ? `transform: rotate(-20deg) translateY(-10px)`
    : `transform: rotate(0deg)`
}
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
${
  props => props.itemScope
    ? `transform: rotate(-20deg) translateY(-10px)`
    : `transform: rotate(0deg)`
}
}

@media screen and (max-width: 767px) {
${
  props => props.itemScope
    ? `transform: rotate(-20deg) translateY(-4px)`
    : `transform: rotate(0deg)`
}
}
`
