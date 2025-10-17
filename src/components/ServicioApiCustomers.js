import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';

export default class ServicioApiCustomers extends Component {

    state={
        customers:[]
    }
    urlC=Global.urlNorthwind;
    //CREAMOS UN METODO PARA CARGAR LOS CLIENTES
    loadCustomers=()=>{
        console.log("Antes del servicio");
        var request="Customers";
        axios.get(this.url+request).then(response=>{
            console.log("Leyendo el servicio");
            //LA INFORMACION VIENE EN response.data
            console.log(response.data);
            this.setState({
                customers:response.data.value
            })
        })
        console.log("Despues del servicio");
    }

    componentDidMount=()=>{
        console.log("Creando component");
        this.loadCustomers();
    }
  render() {
    return (
      <div>
        <h1>ServicioApiCustomers</h1>
        <button>
            Load Customers
        </button>
        {
            this.state.customers.map((cliente,index)=>{
                return(<h3 style={{color:"green"}} key={index}>{cliente.ContactName}</h3>)
            })
        }
        </div>
    )
  }
}
