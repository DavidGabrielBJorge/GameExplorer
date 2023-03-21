import IconesHeader from "../IconesHeader"
import Logo from "../Logo"
import OpcoesHeader from "../OpcoesHeader"
import styled from 'styled-components'

const HeaderContainer = styled.header`
        background-color: #b4c4de;
        display: flex;
        justify-content: center;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
        </HeaderContainer>
    )
}

/*Usando o "styled-components" ele funciona da mesma forma que o
exemplo abaixo, porém não há necessidade em usar CSS apenas JS
        <header className='App-header'>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
        </header>*/
export default Header