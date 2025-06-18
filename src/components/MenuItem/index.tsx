import React from 'react'
import * as S from './styles'

type MenuItemProps = {
  image: string
  name: string
  price: number
}

const MenuItem: React.FC<MenuItemProps> = ({ image, name, price }) => {
  return (
    <S.MenuItemContainer>
      <S.ImageBackground image={image} />
      <S.ItemName>{name}</S.ItemName>
      <S.ItemPrice>R${price}</S.ItemPrice>
    </S.MenuItemContainer>
  )
}

export default MenuItem
