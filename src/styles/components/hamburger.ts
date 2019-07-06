import styled, { css } from 'styled-components'

export const Entire = styled.div`
width: 60px;
height: 20px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-between;
cursor: pointer;
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

${
  props => props.itemScope
    ? `transform: rotate(20deg) translateY(10px)`
    : `transform: rotate(0deg)`
}
`

export const SecondBar = styled.div`
${bar}

transition: transform 400ms ease;
transform-origin: center;

${
  props => props.itemScope
    ? `transform: rotate(-20deg) translateY(-10px)`
    : `transform: rotate(0deg)`
}
`
