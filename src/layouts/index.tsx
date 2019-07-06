import * as React from 'react'
import useReactRouter from 'use-react-router'
import * as Styled from '../styles/layouts/index'
import works from '../works'

const Index: React.FC = () => {
  const { history } = useReactRouter()

  const handleClickWorks = (title: string) => {
    history.push(`/works/${title}`)
  }

  const fizWorks = (work: any) => (
    <Styled.Works onClick={handleClickWorks.bind(null, work.title)}>
      <Styled.LeftTitle>{work.title}</Styled.LeftTitle>
      <Styled.RightArtWorkWrap>
        <Styled.ArtWork src={work.artWork} alt={work.title} />
      </Styled.RightArtWorkWrap>
    </Styled.Works>
  )

  const buzzWorks = (work: any) => (
    <Styled.Works onClick={handleClickWorks.bind(null, work.title)}>
      <Styled.LeftArtWorkWrap>
        <Styled.ArtWork src={work.artWork} alt={work.title} />
      </Styled.LeftArtWorkWrap>
      <Styled.RightTitle>{work.title}</Styled.RightTitle>
    </Styled.Works>
  )

  return (
    <main>
      <Styled.WorksWrap>
      {
        works.map((work, i) => (
          i % 2 === 0
            ? fizWorks(work)
            : buzzWorks(work)
        ))
      }
      </Styled.WorksWrap>
    </main>
  )
} 

export default Index
