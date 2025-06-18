import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import * as S from './styles';

const Footer: React.FC = () => {
    return (
        <S.FooterContainer>
        <S.SocialMedia>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
        </S.SocialMedia>
        <S.FooterText>&copy; 2025 Todos os direitos reservados</S.FooterText>
        </S.FooterContainer>
    );
};

export default Footer;
