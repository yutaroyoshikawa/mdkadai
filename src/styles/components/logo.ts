import styled from 'styled-components'

export const Entire = styled.div`
cursor: pointer;
@media screen and (min-width: 1024px) {
  width: 80px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  width: 80px;
}

@media screen and (max-width: 767px) {
  width: 35px;
}
`

export const Img = styled.img`
width: 100%;
`