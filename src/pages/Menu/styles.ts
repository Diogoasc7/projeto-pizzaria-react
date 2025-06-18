import styled from 'styled-components';

export const MenuContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .menuTitle {
        font-family: cursive;
        font-size: 60px;
    }
`;

export const MenuList = styled.div`
    width: 70vw;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;

    @media only screen and (max-width: 1300px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;
