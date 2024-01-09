import logo from "../../imagens/logo.svg"
import './estilo.css'

function Logo() {
    return (
        <div className='logo'>
            <img 
            src={logo} 
            alt='logo da alura books' 
            className="logo-image"
            ></img>
            <p><strong>Alura</strong> Books</p>
        </div>
    )
}

export default Logo