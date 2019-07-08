import * as React from 'react'
import Logo from '../components/logo'
import * as Styled from '../styles/layouts/opening'

const Opening: React.FC = () => {
  return (
    <Styled.Entire>
      <Styled.LogoWrap>
        <Logo />
      </Styled.LogoWrap>
    </Styled.Entire>
  )
}

export default Opening
