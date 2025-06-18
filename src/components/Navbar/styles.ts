import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 100px;
    background-color: #121619;
    display: flex;
    flex-direction: row;

    a {
        color: white;
        text-decoration: none;
        margin: 20px;
    }

    @media only screen and (max-width: 900px) {
        .rightSide a {
        width: 70px;
        }
        .leftSide {
        padding-left: 50px;
        }
    }

    @media only screen and (max-width: 600px) {
        .rightSide a {
        display: none;
        }
        .rightSide {
        justify-content: flex-end;
        padding-right: 50px;
        }
        .rightSide button {
        display: inherit;
        }
    }

    @media only screen and (min-width: 600px) {
        .rightSide button {
        display: none;
        }
        .hiddenLinks {
        display: none;
        }
    }
`;

export const LeftSide = styled.div`
    flex: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 150px;

    &.open {
        padding-left: 0px;

        img {
        display: none;
        }

        .hiddenLinks {
        display: inherit;
        margin-left: 30px;
        }

        a {
        width: 70px;
        margin: 5px;
        }
    }

    &.close {
        img {
        display: inherit;
        }

        .hiddenLinks {
        display: none;
        }
    }
`;

export const Logo = styled.img`
    width: 70px;
`;

export const HiddenLinks = styled.div`
    display: none;
`;

export const RightSide = styled.div`
    flex: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
    }

    svg {
        font-size: 40px;
    }
`;

export const ToggleButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
`;
