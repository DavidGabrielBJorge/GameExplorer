import './style.css'
const opcoes = ['Início', 'Sobre', 'Contato']

function OpcoesHeader(){
    return(
        <ul className='menu'>
            {opcoes.map( (texto, index) =>( 
                <li key={index}className='opcao'>
                    <p>{texto}</p>
                </li>
          ) )}
        </ul>
         /*
         Foi usado o map para repetir a criacao do mesmo
         elemento, fazendo uma varredura no "opcoes", portanto 
         esse trecho de cógido estaria fazendo a mesma função que o mesmo
         a baixo: 
          <li className='opcao'><p>Início</p></li>
          <li className='opcao'><p>Sobre</p></li>
          <li className='opcao'><p>Contato</p></li>

          OBS: cada elemento deve ter um indexc diferente como regra do react
         */

    )
}

export default OpcoesHeader