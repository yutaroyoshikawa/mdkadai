import * as React from 'react'
import useReactRouter from 'use-react-router'
import Humburder from '../components/hamburger'
import * as Styled from '../styles/layouts/menu'

type ILinks = 'about' | ''

const Menu: React.FC = () => {
  const { history } = useReactRouter()

  const [isActiveMenu, setIsActiveMenu] = React.useState(false)

  const handleClickMenu = () => (
    setIsActiveMenu(
      isActiveMenu ? false : true
    )
  )

  const handleClickLink = (to: ILinks) => {
    history.push(`/${to}`)
    setIsActiveMenu(false)
  }

  const renderMainContent = () => (
    <Styled.MainContent>
      <Styled.Contents
        onClick={handleClickLink.bind(null, 'about')}
      >
        about
      </Styled.Contents>
      <Styled.Contents
        onClick={handleClickLink.bind(null, '')}
      >
        works
      </Styled.Contents>
    </Styled.MainContent>
  )

  return (
    <Styled.Entire>
      <Styled.HumbergerWrap>
        <Humburder
          handleClick={handleClickMenu}
          isActive={isActiveMenu}
        />
      </Styled.HumbergerWrap>
        {
          isActiveMenu
            ? renderMainContent()
            : null
        }
    </Styled.Entire>
  )
}

export default Menu
