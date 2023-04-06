import {Link} from 'react-router-dom';
import './style.css'

export default function Topo(){
    return(
        <header>
            <section className='largura-limitada topo'>
                <img src='assets/logo.png'/>

                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/Sabores'>Sabores</Link>
                    <Link to='/Sobre'>Sobre</Link>
                </nav>
            </section>
        </header>
    )
}