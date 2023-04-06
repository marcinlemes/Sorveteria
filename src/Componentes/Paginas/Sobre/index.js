import Topo from '../../Partes/Topo';
import Rodape from '../../Partes/Rodape';

import'./style.css';

export default function PaginaSobre(){
    return(
        <body>
            <Topo />
            <main>
                <section className="container-sobre-banner">
                    <div className="titulo"><h1>A GELATERIA</h1></div>
                </section>

                <section className='texto largura-limitada'>
                    <h2>Sobre Nós</h2>
                    <h4>Nós simplesmente amamos sorvete!</h4>

                    <p>Somos uma empresa apaixonada pelo que faz; Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientees e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para o varejo como para o atacado.</p>

                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aprovitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais.Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>

                </section>

                <section className='container-imagens-sobre'>
                    <img src='assets/sobre-image.jpg'/>
                    <img src='assets/sorveteria.jpg'/>
                </section>
            </main>
            <Rodape />
        </body>
    )
}