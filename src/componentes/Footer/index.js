import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #b4c4de;
    text-align: center;
    font-weight: bold;
    height: 100px;
`
const FooterTexto = styled.p`
    color: #050a0e;
`

const OutrosAutores = styled.a`
    color: #050a0e;
    text-decoration:none;
`
function Footer(){
    return(
        <FooterContainer>
            <FooterTexto>David © 2023 Copyright</FooterTexto>
            <OutrosAutores href="https://www.flaticon.com/br/icones-gratis/controle-do-jogo">Ícone criado por smashingstocks - Flaticon</OutrosAutores>
        </FooterContainer>
        
    )
}

export default Footer;