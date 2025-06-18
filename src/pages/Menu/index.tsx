import React from 'react'
import { MenuList } from '../../helpers/MenuList'
import MenuItem from '../../components/MenuItem'
import * as S from './styles'

const Menu: React.FC = () => {
  return (
    <S.MenuContainer>
      <h1 className="menuTitle">Noso Menu</h1>
      <S.MenuList>
        {MenuList.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
          />
        ))}
      </S.MenuList>
    </S.MenuContainer>
  )
}

export default Menu
