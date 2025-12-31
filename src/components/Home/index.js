import {Component} from 'react'
import Popup from 'reactjs-popup'

import Header from '../Header'
import {
  HomeContainer,
  PlayingViewContainer,
  ListItemCard,
  ChooseButton,
  CardImage,
  RulesButton,
  RulesImage,
  PopupContainer,
  CloseButton,
  CloseIcon,
  ResultViewContainer,
  YouAndOpponentContainer,
  PlayerCard,
  PlayAgainButton,
  TextComponent,
  PlayerImage,
  ResultText,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    score: 0,
    yourChoice: '',
    oppenentChoice: '',
    matchResult: '',
    resultView: false,
  }

  getResult = (yourId, opponentId) => {
    if (yourId === opponentId) {
      return 'IT IS DRAW'
    }
    if (
      (yourId === 'ROCK' && opponentId === 'SCISSORS') ||
      (yourId === 'SCISSORS' && opponentId === 'PAPER') ||
      (yourId === 'PAPER' && opponentId === 'ROCK')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  onSelectOption = id => {
    const {score} = this.state
    const selectedChoice = choicesList.find(eachChoice => eachChoice.id === id)
    const drawnChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    const matchResult = this.getResult(selectedChoice.id, drawnChoice.id)

    let updatedScore = score
    if (matchResult.endsWith('LOSE')) {
      updatedScore = score - 1
    } else if (matchResult.endsWith('WON')) {
      updatedScore = score + 1
    }

    this.setState({
      yourChoice: selectedChoice.imageUrl,
      oppenentChoice: drawnChoice.imageUrl,
      matchResult,
      resultView: true,
      score: updatedScore,
    })
  }

  onClickTryAgain = () => {
    this.setState({resultView: false})
  }

  renderPlayingView = () => (
    <PlayingViewContainer>
      {choicesList.map(eachImage => (
        <ListItemCard key={eachImage.id}>
          <ChooseButton
            type="button"
            onClick={() => this.onSelectOption(eachImage.id)}
            data-testid={`${eachImage.id.toLowerCase()}Button`}
          >
            <CardImage src={eachImage.imageUrl} alt={eachImage.id} />
          </ChooseButton>
        </ListItemCard>
      ))}
    </PlayingViewContainer>
  )

  renderResultView = () => {
    const {matchResult, yourChoice, oppenentChoice} = this.state

    return (
      <ResultViewContainer>
        <YouAndOpponentContainer>
          <PlayerCard>
            <TextComponent>YOU</TextComponent>
            <PlayerImage src={yourChoice} alt="your choice" />
          </PlayerCard>
          <PlayerCard>
            <TextComponent>OPPONENT</TextComponent>
            <PlayerImage src={oppenentChoice} alt="opponent choice" />
          </PlayerCard>
        </YouAndOpponentContainer>
        <ResultText>{matchResult}</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickTryAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultViewContainer>
    )
  }

  render() {
    const {score, resultView} = this.state

    return (
      <HomeContainer>
        <Header score={score} />
        {resultView ? this.renderResultView() : this.renderPlayingView()}
        <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
          {close => (
            <PopupContainer>
              <CloseButton type="button" onClick={close}>
                <CloseIcon />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </HomeContainer>
    )
  }
}
export default Home
