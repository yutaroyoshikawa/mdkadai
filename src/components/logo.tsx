import * as React from 'react'
import useReactRouter from 'use-react-router'
import logo from '../seiho_logo.svg'
import * as Styled from '../styles/components/logo'

const Logo: React.FC = props => {
  const { history } = useReactRouter()

  const handleClick = () => {
    history.push('/')
  }

  return (
    <Styled.Entire onClick={handleClick}>
      <Styled.Img src={logo} alt="logo" />
    </Styled.Entire>
  )
}

export default Logo
