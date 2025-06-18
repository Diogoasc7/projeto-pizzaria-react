import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../../assets/images/pizza.jpeg'
import * as S from './styles'

const Home: React.FC = () => {
  return (
    <S.HomeContainer style={{ backgroundImage: `url(${BannerImage})` }}>
      <S.HeaderContainer>
        <h1>Pizza Nostra</h1>
        <p>Autêntica. Saborosa. Nostra</p>
        <Link to="/menu">
          <button>PEÇA AGORA</button>
        </Link>
      </S.HeaderContainer>
    </S.HomeContainer>
  )
}

export default Home
