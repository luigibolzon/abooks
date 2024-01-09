import './estilo.css'
import OpcoesHeader from '../OpcoesHeader'
import Logo from '../Logo'
import IconesHeader from '../IconesHeader'


function Header() {
    return(
        <header className='App-header'>
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
        </header>
    )
    }

export default Header