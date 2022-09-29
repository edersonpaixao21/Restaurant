import styled from "styled-components";

const Button = styled.div`
    color: white;
    background-color: #40170c;
    width: 150px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    justify-content: center;

    &:hover {
        background-color: #fff;
        border: 1px solid #40170c;
        color: #40170c;
        transition: 0.5s;
    }
`

export default Button