import './App.css';
import { useState } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Num_Contacto from './components/contacto/num_contacto';
import Iniciar_sesion from './components/LoginForm/LoginForm';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Producto from './components/producto/producto';
import Carrito from './components/producto/carrito';


function App() {
  const [value, setValue] = useState(0);
  
  function increment() {
    setValue(value+1)
  };
  
  function decrement() {
    setValue(value-1)
  };

  return (
    <div className="App">

      <BrowserRouter>
      
        <Routes>

          <Route 
            path="/home"
            element={<>
              <Header></Header>
              <Footer></Footer>
            </>}>
          </Route>

          <Route 
            path="/num_contacto"
            element={<>

              <Num_Contacto></Num_Contacto>

            </>}>
          </Route>

          <Route 
            path="/iniciar_sesion"
            element={<>

              <Iniciar_sesion />

            </>}>
          </Route>
          
          <Route 
            path="/productos"
            element={<>

              <Producto />

            </>}>
          </Route>

          <Route 
            path="/carrito"
            element={<>

              <Carrito />

            </>}>
          </Route>

        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
