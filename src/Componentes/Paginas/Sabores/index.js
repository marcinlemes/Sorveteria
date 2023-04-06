import Topo from '../../Partes/Topo';
import Rodape from '../../Partes/Rodape'
import './style.css'

export default function PaginaSabores(){
    return(
        <body>
            <Topo />

            <main>

                <section className="banner-sabores">
                    <div className="titulo"><h1>NOSSOS SABORES</h1></div>
                </section>

                <h2 className='titulo-sabores'>SABORES DE SORVETE</h2>

                <section className="box-sabores-container largura-limitada">

                  <article>

                      <img src="assets/sabor-oreo.png" alt="" />
                      <p className="texto-negrito">Sorvete de Oreo</p>
                      <p>Delicioso sorvete sabor Óreo. Uma explosão de sabor!</p>

                  </article>

                  <article>

                    <img src="assets/sabor-pistache.png" alt="" />
                    <p className="texto-negrito">Sorvete Pistache</p>
                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>

                  </article>

                  <article>

                    <img src="assets/sabor-cookies-avela.png" alt="" />
                    <p className="texto-negrito">Sorvete Cookies & Avelã</p>
                    <p>O nosso melhor sorvete! Você vai adorar o sabor.</p>

                  </article>

                  <article>

                    <img src="assets/sorbet-kiwi.png" alt="" />
                    <p className="texto-negrito">Sorvete de Kiwi</p>
                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>

                  </article>

                  <article>  

                    <img src="assets/sorbet-morango.png" alt="" />
                    <p className="texto-negrito">Sorvete de Morango</p>
                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>

                  </article>  

                  <article>

                    <img src="assets/sorbet-limao.png" alt="" />
                    <p className="texto-negrito">Sorvete de Limão Siciliano</p>
                    <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>

                  </article>

                </section>

            </main>

            <Rodape />
        </body>

    )
}