import styled from "styled-components";

//Nesse módulo estará apenas a estilização do input

const Input = styled.input`

    order: 2px solid #FFF;
    background: transparent;
    border: 1px solid #050a0e;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #050a0e;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
            color: #050a0e;
            font-size: 16px;
    }

    @media (max-width: 1300px) {
        padding: 20px 90px;
    }
    
`;

export default Input