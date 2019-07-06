import * as React from 'react'
import useReactRouter from 'use-react-router'
import * as Styled from '../styles/layouts/works'
import works from '../works'

interface IParams {
  name: string
}

const WorksDetails: React.FC = props => {
  const { match } = useReactRouter<IParams>()
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    setIndex(
      works.findIndex(
        work => work.title === decodeURI(match.params.name)
      )
    )
  }, [])

  return (
    <Styled.entire>
      <Styled.Wrap>
        <Styled.VisualWrap>
          <Styled.ArtWorkWrap>
            <Styled.ArtWork
              src={works[index].artWork}
              alt={works[index].title}
            />
          </Styled.ArtWorkWrap>
          <Styled.TitleWrap>
            <Styled.Title>{works[index].title}</Styled.Title>
            <Styled.Release>{works[index].release}</Styled.Release>
          </Styled.TitleWrap>
        </Styled.VisualWrap>
        <Styled.OverView>
          {works[index].overview}
        </Styled.OverView>
      </Styled.Wrap>
    </Styled.entire>
  )
}

export default WorksDetails
