import styled from "styled-components"
import logo from "../../imagens/logo.svg"


const LogoContainer = styled.div`
display: flex;
font-size: 30px;
`

const LogoImageContainer = styled.img`
margin-right: 30px;
`


function Logo() {
    return (
        <LogoContainer>
            <LogoImageContainer 
            src={logo} 
            alt='logo da alura books' 
            className="logo-image"
            ></LogoImageContainer>
            <p><strong>Alura</strong> Books</p>
        </LogoContainer>
    )
}

export default Logo