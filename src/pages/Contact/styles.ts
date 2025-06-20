import styled from 'styled-components'

export const ContactContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
`

export const LeftSide = styled.div`
  height: 100%;
  flex: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const RightSide = styled.div`
  height: 100%;
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    font-weight: 10;
    font-size: 50px;
    margin-left: 30px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 30px;

  label {
    margin-top: 15px;
    color: grey;
  }

  input {
    height: 40px;
    width: 80%;
    border: none;
    border-bottom: 1px solid #121619;
    color: black;

    &::placeholder {
      font-weight: bold;
      color: black;
      font-family: Arial, Helvetica, sans-serif;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    margin-top: 15px;
    height: 70px;
    width: 80%;
    border: none;
    border-bottom: 1px solid #121619;
    color: black;

    &::placeholder {
      font-weight: bold;
      color: black;
      font-family: Arial, Helvetica, sans-serif;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    margin-top: 40px;
    width: 140px;
    height: 40px;
    border: none;
    background-color: #121619;
    color: whitesmoke;
    font-size: 15px;
    cursor: pointer;
  }
`
