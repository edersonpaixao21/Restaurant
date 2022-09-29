import styled from "styled-components";

export const StyledSelector = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  margin-top: -50px;

  .selector {
    justify-content: center;
    width: 200px;
    flex-wrap: nowrap;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #40170c;
    background-color: #080b10;
    transition: 0.5s;
    text-decoration: none;
  }

  .selector-cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  .selector:focus {
    background-color: #40170c;
  }

  .selector:focus i {
    color: white;
  }

  .selector-item {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 17px;
    cursor: pointer;
    width: 100%;
    padding: 20px 0;
  }

  .selector-item:hover {
    background-color: #40170c;
    color: #080b10;
  }

  .selector-item:hover i {
    color: white;
  }

  .selector-item:hover span {
    color: white;
  }

  i {
    font-size: 2rem;
    color: #40170c;
  }

  .reg {
    display: flex;
    flex-direction: wrap;
  }
`;
