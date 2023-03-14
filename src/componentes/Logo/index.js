import logo from '../../imagens/logoSite.svg'
import './style.css'

function Logo(){
    return(
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-image'></img>
            <p><strong>Game</strong> Explorer</p>
        </div>
    )

}

export default Logo;