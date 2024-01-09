import './estilo.css'
const textoOpcoes = ['Categorias', 'Minha estante', 'Favoritos']

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {textoOpcoes.map((texto) => (<li className='opcao'><p>{texto}</p></li>))}
        </ul>

    )
}

export default OpcoesHeader