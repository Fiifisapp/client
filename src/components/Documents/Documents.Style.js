import styled from "styled-components";

export const DocumentContainer = styled.div`
  width: 80%;
  height: 100vh;
  position: absolute;
  top: 18%;
  left: 18%;
  background-color: white;
  border-radius: 10px;
`;

export const HeaderText = styled.h1`
  color: #eea40e;
  position: absolute;
  top: 2%;
  left: 40%;
  font-size: 4em;
`;
export const FileContent = styled.div`
    height: 17vh;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    justify-Content: center;
`;

export const FileLogo = styled.div`
    margin: 0 auto;
    place-items: center;
`;

export const Logo = styled.img`
    margin: 0 auto;
`;

export const FileName = styled.div`
    overflow: hidden;
    font-size: 0.7em;
    font-weight: bold;
    text-align: center;
    width: 100%;
    height: 2vh;
    color: black;
    place-items: center;
`;

export const FilesContainer = styled.div`
  width: 92.5%;
  height: 75%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: auto;
  gap: 1em 1em; 
  border: 1px solid #eea40e;
  border-radius: 10px;
  margin: 2em auto;
  overflow-y: scroll;
`;

export const Button = styled.button`
  width: 10em;
  height: 8vh;
  background-color: #eea40e;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.3em;
  font-weight: bold;
  margin-left: 2em;
  margin-top: 2em;

  &:hover {
    cursor: pointer;
  }
`;
