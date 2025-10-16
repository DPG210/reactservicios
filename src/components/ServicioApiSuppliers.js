import React, { Component } from 'react'
import axios from 'axios'

export default class ServicioApiSuppliers extends Component {

    url="https://services.odata.org/V4/Northwind/Northwind.svc/"

    cajaTexto=React.createRef();

    state={
        suppliers:[],
        actual:[]
    }

    loadSuppliers=()=>{
        var request="Suppliers"
        console.log("antes del servicio");

        axios.get(this.url+request).then(response=>{
            console.log("En el servicio");
            console.log(response.data);

            this.setState({
                suppliers:response.data.value
            })
        })

        console.log("Despues del servicio");
    }

    componentDidMount=()=>{
        console.log("cargando componente");
        this.loadSuppliers();
    }

    mostrarDatos=()=>{
       var id=parseInt(this.cajaTexto.current.value);
        console.log("Mi id es "+id);
        var request="Suppliers";
        var aux=[];
        axios.get(this.url+request).then(response=>{
            if(response.data.SupplierID == id){
                var supplier=response.data;
                console.log(supplier);
                aux.push(response.data.value);

                this.setState({
                    actual:aux
                })

                return(<h2>{this.state.actual}</h2>)
            }
        })
    }

  render() {
    return (
      <div>
        <h1>Service Api Suppliers</h1>
        <label>Escriba el nombre</label>
        <input type="text" ref={this.cajaTexto}></input>
        <button onClick={this.mostrarDatos}>Mostrar</button>
        {
            this.state.suppliers.map((supplier,index)=>{
                return(<h2 key={index}>{index}  {supplier.ContactName}</h2>)
            })
        }
        
      </div>
    )
  }
}
