import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border: 2px solid #ffffff;
  border-radius: 20px;
  font-family: 'Bree Serif';
`
export const TitleText = styled.h1`
  font-family: 'Bree Serif';
  font-size: 1.5rem;
  color: ${props => (props.score ? '#223a5f' : '#ffffff')};
  padding: 0px;
  margin: 0px;
  width: 50px;
`
export const ScoreContainer = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  border-radius: 20px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
`

export const ScoreText = styled.p`
  font-family: 'Roboto';
  font-size: 35px;
  color: #223a5f;
  font-weight: bold;
`
