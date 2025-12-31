import styled from 'styled-components'
import {RiCloseLine} from 'react-icons/ri'

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #223a5f;
  padding: 20px 50px;
  @media screen and (max-width: 576px) {
    padding: 20px;
  }
`
export const PlayingViewContainer = styled.ul`
  height: 80vh;
  width: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    width: 440px;
  }
`
export const ListItemCard = styled.li`
  width: 135px;
  height: 135px;
  margin: 0px 15px;
  @media screen and (min-width: 768px) {
    margin: 0px 40px;
  }
`
export const ChooseButton = styled.button`
  width: 135px;
  height: 135px;
  border-radius: 67.5px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardImage = styled.img`
  width: 137%;
  height: 137%;
`

export const RulesButton = styled.button`
  width: 140px;
  height: 40px;
  border-radius: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Bree Serif';
  font-size: 15px;
  font-weight: bold;
  color: #223a5f;
  align-self: flex-end;
`
export const PlayAgainButton = styled(RulesButton)`
  width: 150px;
  height: 40px;
  align-self: center;
  font-weight: 500;
`

export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`
export const PopupContainer = styled.div`
  height: 60vh;
  width: 45vw;
  background-color: #ffffff;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 300px;
    width: 300px;
  }
`
export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: absolute;
  top: 5px;
  right: 5px;
`
export const CloseIcon = styled(RiCloseLine)`
  width: 100%;
  height: 100%;
  color: #000000;
  background-color: transparent;
`
export const ResultViewContainer = styled.div`
  height: 80vh;
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 440px;
  }
`
export const YouAndOpponentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const PlayerCard = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
export const TextComponent = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`
export const PlayerImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
    border-radius: 90px;
  }
`
export const ResultText = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
`
