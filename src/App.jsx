
import './App.css';
import paragrafoUm from './componentes/primeiro-paragrafo'
import Esfera from './componentes/imagem-esferica';
import Cards from './componentes/animations-cards';
import Card2 from './componentes/animation-card2';
import Card3 from './componentes/animation-card3';
import { useState } from 'react';
import Image from './componentes/ImagemAnimada.jpeg';



function App() {

  const[toggle,setToggle]=useState(false)

  const[toggle2,setToggle2]=useState(false)

  const[toggle3,setToggle3]=useState(false)

  /*const Texto1 = <p>Precisa de um Dev Junior? Contate-me, ofereço bons serviços e bons preços</p>

  const Texto2 = <p>Prometo bom desempenho e compromisso com o trabalho</p>

  const Texto3 = <p>Também trabalho pj</p>

  const[Texto,setTexto]=useState(Texto1)

  setInterval(setTexto(Texto2), 3000)

  setInterval(setTexto(Texto3), 6000)

  setInterval(setTexto(Texto1), 9000)*/
  

  const hellowWord = <h1 id='title1'>Olá. Eu me chamo Rangel Pedro</h1>

  return (
  
    <section className='Momy'>
      <section id='conteiner1'>
        <div id= 'box-one'>
        {hellowWord}
        {paragrafoUm()}
        </div>
        <div>
          {Esfera("Count on me!")}
        </div>
      </section>
        <hr></hr>
      <section id='conteiner2'>
        <div className='lista'>
          <ul>
            <li>
              <h1 onClick={()=>setToggle(!toggle)}> Hobbies</h1>
              {toggle?<Cards/>: console.log(false)}
            </li>
            <li>
              <h1 onClick={()=>setToggle2(!toggle2)}>Perfil</h1>
              {toggle2?<Card2/>: console.log(false)}
            </li>
            <li onClick={()=>setToggle3(!toggle3)}>
              <h1>Metas</h1>
              {toggle3?<Card3/>: console.log(false)}
            </li>
          </ul>
        </div>
        <div className='img-e-txt'>
        <img src= {Image} alt="imagem animada do desenvolvedor do app"  className='image-animate'/>
        </div>
      </section>
    </section>

  );
  
}

export default App;
