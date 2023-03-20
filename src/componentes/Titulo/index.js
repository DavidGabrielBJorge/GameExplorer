import styled from "styled-components";

export const TituloUltimosJogos = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.fonte || '18px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`

/*Ao fazer um export simples, deve importar usando as duas chaves, exemplo:
import { TituloUltimosJogos } from '../Titulo'
*/
