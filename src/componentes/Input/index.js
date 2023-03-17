import styled from "styled-components";

//Nesse módulo estará apenas a estilização do input

const Input = styled.input`

    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
            color: #FFF;
            font-size: 16px;
    }

    @media (max-width: 1300px) {
        padding: 20px 90px;
    }
    
`;

export default Input