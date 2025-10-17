import React, { Component } from 'react'
import axios from 'axios'

export default class ServicioApiSuppliers extends Component {

    url="https://services.odata.org/V4/Northwind/Northwind.svc/";

    cajaTexto=React.createRef();

    state={
        suppliers:[],
        actual:null
    }

    loadSuppliers=()=>{
        var request="Suppliers";
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
    // findSupplierId=(event)=>{
    //     event.preventDefault();
    //     var request="Suppliers";
    //     let idSupplier=parseInt(this.cajaTexto.current.value);
    //     //REALIZAMOS LA PETICION DE NUEVO A TODOS LOS PROVEEDORES
    //     axios.get(this.url+request).then(response=>{
    //         for(var supplier of response.data.value){
    //             if(supplier.SupplierID==idSupplier){
    //                 this.setState({
    //                     actual:supplier
    //                 })
    //                 break;
    //             }
    //         }
    //     })
    // }

    mostrarDatos=(event)=>{
        event.preventDefault();
       var id=parseInt(this.cajaTexto.current.value);
        console.log("Mi id es "+id);
        var supplier=this.state.suppliers.find(sup=>sup.SupplierID===id);
        
       if(supplier){
        this.setState({
            actual:supplier
        })
       }else{
        this.setState({
            actual:null
        })
        
       }
            

            
        
    }

  render() {
    return (
      <div>
        <h1>Service Api Suppliers</h1>
        <form>
        <label>Escriba el ID</label>
        <input type="text" ref={this.cajaTexto}></input>
        <button onClick={this.mostrarDatos}>Mostrar</button>
        </form>
        {
            this.state.actual &&
                (
                    <div>
                    <h1>Company:{this.state.actual.ContactName}</h1>
                    </div>
                )
            
        }
        <ul>{
            this.state.suppliers.map((supplier,index)=>{
                return(<li key={index}>{index}  {supplier.ContactName}</li>)
            })
        }
        </ul>
        {/* {
            this.state.actual && (
                        <div style={{color:"blue", border:"solid 1px"}}>
                            <h2>Datos del Supplier {this.state.actual.SupplierID}</h2>
                            <h3>Company Name: {this.state.actual.CompanyName}</h3>
                            <h3>Contact Name: {this.state.actual.ContactName}</h3>
                            <h3>Contact Title: {this.state.actual.ContactTitle}</h3>
                            <h3>Address: {this.state.actual.Address}</h3>
                            <h3>City: {this.state.actual.City}</h3>
                            <h3>Country: {this.state.actual.Country}</h3>
                            <h3>Phone: {this.state.actual.Phone}</h3>
                        </div>
                        )
        } */}
        
      </div>
    )
  }
}
