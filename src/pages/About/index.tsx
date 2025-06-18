import React from 'react';
import MultiplePizzas from '../../assets/images/multiplePizzas.jpeg';
import * as S from './styles';

const About: React.FC = () => {
    return (
        <S.AboutContainer>
            <S.AboutTop style={{ backgroundImage: `url(${MultiplePizzas})` }} />
            <S.AboutBottom>
                <h1>SOBRE NOS</h1>
                <p>
                    Na Pizza Nostra, pizza é mais do que comida... é uma experiência, uma tradição e, acima de tudo, uma paixão.
                    Nossa história começou com a ideia de trazer para a cidade o verdadeiro sabor das pizzarias artesanais, aquelas que conquistam pelo aroma, pelo sabor e pela generosidade em cada pedaço.
                
                    Aqui, tudo é feito com dedicação: da escolha dos ingredientes frescos ao preparo da massa, que segue uma receita especial passada de geração em geração. Nosso molho é 100% caseiro, feito com tomates selecionados, ervas frescas e aquele toque secreto que só quem faz com amor conhece.

                    Inspirados nas cantinas italianas e nas reuniões de família ao redor da mesa, criamos um cardápio cheio de opções que agradam todos os gostos: das tradicionais Margheritas e Calabresas às combinações exclusivas da casa, que você só encontra aqui.
                
                    Mais do que servir uma pizza deliciosa, queremos fazer parte dos seus melhores momentos. Seja em um encontro de amigos, num jantar romântico ou naquele delivery de fim de semana... queremos que cada fatia da nossa pizza traga um pouco de alegria e muito sabor.

                    Porque aqui na Pizza Nostra, a regra é clara: boa comida, bom atendimento e aquele clima de casa que faz toda a diferença.
                
                    Venha conhecer...
                    Pizza Nostra – Onde a massa é lei!
                </p>
            </S.AboutBottom>
        </S.AboutContainer>
    );
};

export default About;
