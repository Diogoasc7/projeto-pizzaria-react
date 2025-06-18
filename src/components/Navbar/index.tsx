import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import Logo from '../../assets/images/pizzaLogo.png';
import * as S from './styles';

const Navbar: React.FC = () => {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <S.NavbarContainer>
            <S.LeftSide id={openLinks ? 'open' : 'close'}>
                <S.Logo src={Logo} alt="Logo" />
                <S.HiddenLinks>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">Sobre</Link>
                    <Link to="/contact">Contato</Link>
                </S.HiddenLinks>
            </S.LeftSide>

            <S.RightSide>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/contact">Contato</Link>
                <S.ToggleButton onClick={toggleNavbar}>
                <ReorderIcon />
                </S.ToggleButton>
            </S.RightSide>
        </S.NavbarContainer>
    );
};

export default Navbar;
