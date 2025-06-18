import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
