import React, { Component } from 'react'


export default class TablaMultiplicar extends Component {
    state={
        tabla:[]
    }
    generarTablamultiplicar=()=>{
        let aux=[];
        let numero= parseInt(this.props.numero);
        for (var i=1;i<=10;i++){
            var resultado= numero*i;
            aux.push(resultado);
        }
        this.setState({
            tabla:aux
        })
    }
    componentDidMount=()=>{
        this.generarTablamultiplicar();
    }
    componentDidUpdate=(oldProps)=>{
        if(oldProps.numero !=this.props.numero){
            this.generarTablamultiplicar();
        }
    }
  render() {
    return (
      <div>
        <h1>Tabla multiplicar Rutas</h1>
        <h3 style={{color:"fuchsia"}}>
            Numero {this.props.numero}
        </h3>
        <ul>
            {
                this.state.tabla.map((num,index)=>{
                    return(<li key={index}>{num}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
