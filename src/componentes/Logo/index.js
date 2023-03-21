import logo from '../../imagens/logoSite.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;

    @media (max-width: 1300px) {
        font-size: 25px;
    }
`

const LogoImage = styled.img`
    margin-right: 10px;
    width: 70px;
    height: 70px;
`

function Logo(){
    return(
        <LogoContainer>
            <LogoImage src={logo} alt='logo' ></LogoImage>
            <p><strong>Game</strong> Explorer</p>
        </LogoContainer>
    )

}

export default Logo;