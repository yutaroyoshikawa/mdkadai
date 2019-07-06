import * as React from 'react'
import AboutBack from '../images/AboutBack.jpg'
import * as Styled from '../styles/layouts/about'

const About: React.FC = () => {
  return (
    <Styled.Entire itemProp={AboutBack}>
      <Styled.ContentWrap>
        <Styled.Name>
          Seiho
        </Styled.Name>
      </Styled.ContentWrap>
    </Styled.Entire>
  )
}

export default About
