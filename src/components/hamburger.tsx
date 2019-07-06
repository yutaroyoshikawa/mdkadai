import * as React from 'react'
import * as Styled from '../styles/components/hamburger'

interface IProps {
  isActive: boolean
  handleClick: () => void
}

const Hamburger: React.FC<IProps> = props => {
  return (
    <Styled.Entire onClick={props.handleClick}>
      <Styled.FirstBar itemScope={props.isActive} />
      <Styled.SecondBar itemScope={props.isActive} />
    </Styled.Entire>
  )
}

export default Hamburger
