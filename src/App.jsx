import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './style.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form action="">


        <div className="elements">
          <h1>Faça o seu login</h1>
          <div className="linha"></div>

          <div className="emailDiv">

            <p>Seu email <div id="aste">&nbsp;*</div></p>
            <input type="text" placeholder='E-mail' />

          </div>

          <div className="senhaDiv">

            <p>Sua senha <div id="aste">&nbsp;*</div>
            </p>
            <input type="password" placeholder='Senha'/>

          </div>

          <div className="lembreDeMim">
          <p>Lembrar-me</p>
            <input type="checkbox" name="" id="check"  />
             
           

          </div>

          <button className='button slide_down'>Entrar</button>

          <p className=''>Esqueceu sua senha ?<a href=""> &nbsp; Clique aqui</a></p>

        </div>



      </form>

    </>
  )
}

export default App
