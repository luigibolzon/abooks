import OpcoesHeader from '../OpcoesHeader'
import Logo from '../Logo'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
background-color: #FFFFFF;
display: flex;
justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header