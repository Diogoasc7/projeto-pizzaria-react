import React from 'react'
import PizzaLeft from '../../assets/images/pizzaLeft.jpg'
import * as S from './styles'

const Contact: React.FC = () => {
  return (
    <S.ContactContainer>
      <S.LeftSide style={{ backgroundImage: `url(${PizzaLeft})` }} />
      <S.RightSide>
        <h1>Entre em Contato</h1>
        <S.Form id="contact-form" method="POST">
          <label htmlFor="name">Nome Completo</label>
          <input name="name" placeholder="Seu nome completo..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Seu email..." type="email" />
          <label htmlFor="message">Mensagem</label>
          <textarea
            rows={6}
            placeholder="Sua mensagem..."
            name="message"
            required
          ></textarea>
          <button type="submit">Enviar Mensagem</button>
        </S.Form>
      </S.RightSide>
    </S.ContactContainer>
  )
}

export default Contact
