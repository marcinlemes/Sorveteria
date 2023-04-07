import Topo from "../../Partes/Topo"
import Rodape from "../../Partes/Rodape"
import './style.css'

export default function PaginaInicial(){
    return(
     <body>
     <Topo />
     <main>
         <section className="banner">
             
             <div className="titulo">
                 <h1>SORVETE ARTESANAL</h1>
             </div>

         </section>
        
         <section className="sabores-container">
             
             <img src="assets/banner-sabores.jpg" alt=""/>
             <div className="descricao">
                 <h2>NOSSOS SABORES</h2>
                 <p className="texto-negrito">Novos e deliciosos</p>
                 <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
             </div>

             </section>

             <section className="container-eventos">
                 
                 <div className="descricao">
                     <h2>NOSSOS EVENTOS</h2>
                     <p className="texto-negrito">Delícias com sorvete!</p>
                     <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
         
                 </div>

                     <img src="assets/eventos-image.jpg" alt="" />
             </section>

             <section className="container-sobre">
        
                    <img src="assets/sobre-image.jpg" alt=""/>

                    <div className="descricao">
                        <h2>SOBRE NÓS</h2>
                        <p className="texto-negrito">Alegria em cada casquinha!</p>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                    </div>

            </section>
     </main>

     <Rodape />
     </body>
    )
}