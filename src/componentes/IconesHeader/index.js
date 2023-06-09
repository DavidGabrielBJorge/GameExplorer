import perfil from '../../imagens/account.svg'
import sacola from '../../imagens/settings.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 30px;
    width: 25px;
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
`


const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone, index) => (
            <Icone key={index}><img src={icone}></img></Icone>
            )) }
        </Icones>
    )
}

/*Estilização anterior usando CSS:
        <ul className='icones'>
            { icones.map( (icone, index) => (
            <li key={index}className='icone'><img src={icone}></img></li>
            )) }
        </ul>
*/

export default IconesHeader