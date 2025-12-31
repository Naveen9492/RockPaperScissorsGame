import {
  HeaderContainer,
  TitleContainer,
  TitleText,
  ScoreContainer,
  ScoreText,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <TitleContainer>
        <TitleText>Rock Paper Scissors</TitleText>
      </TitleContainer>
      <ScoreContainer>
        <TitleText as="p" score>
          Score
        </TitleText>
        <ScoreText>{score}</ScoreText>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
