import styled from "styled-components";

export const DocumentContainer = styled.div`
    width: 80%;
    height: 80vh;
    position: absolute;
    top: 18%;
    left: 18%;
    background-color: white;
    border-radius: 10px;
`;

export const HeaderText = styled.h1`
    color: #EEA40E;
    position: absolute;
    top: 2%;
    left: 40%;
    font-size: 4em;
`;

export const Button = styled.button`
    width: 10em;
    height: 8vh;
    background-color: #EEA40E;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.3em;
    font-weight: bold; 
    margin-left: 2em;
    margin-top: 2em;

    &:hover{
        cursor: pointer;
    }
`;