import './style.css'

export default function Rodape(){
    return(
        <footer>
            <section className='informacoes largura-limitada'>
                <img src='assets/logo.png'/>

                <div className="infos">
                    <h4>ENDEREÇO</h4>
                    <p>Av.Bernadino de Campos, 98</p>
                    <p>São paulo, SP 12345-678</p>
                 </div>
    
                <div className="infos">
                    <h4>CONTATO</h4>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3455-7890</p>
                </div>
    
                <div className="infos">
                    <h4>HORÁRIOS</h4>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>

            </section>

            <div className='dev'>
                Desenvolvido por Márcio Lemes.
            </div>
        </footer>
    )
}