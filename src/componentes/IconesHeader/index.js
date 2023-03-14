import './style.css'
import perfil from '../../imagens/account.svg'
import sacola from '../../imagens/settings.svg'

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
            { icones.map( (icone, index) => (
            <li key={index}className='icone'><img src={icone}></img></li>
            )) }
        </ul>
    )
}

export default IconesHeader