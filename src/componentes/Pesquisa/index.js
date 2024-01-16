import Input from "../Input.js"
import styled from "styled-components"
import { useState } from "react"
import { Livros } from "./DadosPesquisa.js"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {

    const [LivrosPesquisados, setLivrosPesquisados] = useState([]) 

    return (
        <PesquisaContainer>
            <Titulo>já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Qual livro procura?"
                onBlur={evento => {
                    const TextoDigitado = evento.target.value
                    const ResultadoPesquisa = Livros.filter(Livros => Livros.nome.includes(TextoDigitado))
                    setLivrosPesquisados(ResultadoPesquisa)
                }}
            />
            { LivrosPesquisados.map( Livros => (
                <Resultado>
                    <p>{Livros.nome}</p>
                    <img src={Livros.src}/>
                </Resultado>
            ) ) }

        </PesquisaContainer>

    )

}

export default Pesquisa