import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TablaMultiplicar from './TablaMultiplicar'
import NotFound from './NotFound'
import { useParams } from 'react-router-dom'
import Collatz from './Collatz'
import MenuRutas from './MenuRutas'

export default class  extends Component {
  render() {
    function TablaMultiplicarElement(){
        //ESTA FUNCION NOS SERVIRÁ PARA CAPTURAR LOS PARÁMETRO 
        //RECIBIDOS EN UNA RUTA Y ENVIARLOS CON PROPS A NUESTRO COMPONENT
        //VOY A ENVIAR UN PARÁMETRO LLAMADO MI NUMERO
        let {minumero}=useParams();
        //DEVOLVEMOS EL COMPONENTE TABLA MULTIPLICAR CON SUS PROPS
        return <TablaMultiplicar numero={minumero}/>
    }

    function CollatzElement (){
        let{numero}=useParams();
        return <Collatz num={numero}></Collatz>
    }

    return (
      <BrowserRouter>
      <MenuRutas></MenuRutas>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/tabla/:minumero" element={<TablaMultiplicarElement></TablaMultiplicarElement>}></Route>
            <Route path="/collatz/:numero" element={<CollatzElement/>}></Route>
            <Route path="/*" element={<NotFound></NotFound>}></Route>
           
        </Routes>
      </BrowserRouter>
    )
  }
}
