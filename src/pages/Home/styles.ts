import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    @media only screen and (max-width: 650px) {
        justify-content: center;
        align-items: center;
    }
`;

export const HeaderContainer = styled.div`
    width: auto;
    margin-left: 50px;

    h1 {
        font-size: 90px;
        height: 60px;
        font-weight: 50;
        color: black;

        @media only screen and (max-width: 650px) {
        font-size: 40px;
        height: 30px;
        color: white;
        }
    }

    p {
        padding: 0;
        font-size: 40px;
        font-weight: lighter;
        color: black;

        @media only screen and (max-width: 650px) {
        font-size: 30px;
        color: white;
        }
    }

button {
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #121619;
    height: 50px;
    width: 180px;
    color: white;
    text-decoration: none;
    font-size: 20px;

    &:hover {
        background-color: #07090a;
        transition: 0.3s ease-in;
    }

    @media only screen and (max-width: 650px) {
        background-color: white;
        color: #121619;
        margin-bottom: 30px;

        &:hover {
            background-color: rgb(225, 225, 225);
            color: #121619;
        }
    }
}

@media only screen and (max-width: 650px) {
    margin-left: 0px;
    border-radius: 10px;
    padding: 10px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #121619;
    color: white;
}
`;
