
import styled from 'styled-components'

const OpcoesContainer = styled.ul`
    display: flex;
`

const OpcaoContainer = styled.li`
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: none;
    height: 100%;
    padding: 5px;
    cursor: pointer;
`

const textoOpcoes = ['Categorias', 'Minha estante', 'Favoritos']

function OpcoesHeader() {
    return (
        <OpcoesContainer>
            {textoOpcoes.map((texto) => (<OpcaoContainer><p>{texto}</p></OpcaoContainer>))}
        </OpcoesContainer>

    )
}

export default OpcoesHeader