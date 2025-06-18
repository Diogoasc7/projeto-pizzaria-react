import styled from 'styled-components';

type ImageProps = {
    image: string;
};

export const MenuItemContainer = styled.div`
    border-radius: 15px;
    width: 300px;
    height: 350px;
    margin: 20px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
    }
`;

export const ImageBackground = styled.div<ImageProps>`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
    height: 200px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ItemName = styled.h1`
    margin-left: 20px;
`;

export const ItemPrice = styled.p`
    margin-left: 20px;
`;
