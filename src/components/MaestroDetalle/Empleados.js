import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class  extends Component {
    urlEmpleados=Global.urlEmpleados;
    state={
        empleados:[],
        texto:""
    }
    loadEmpleados=()=>{
        let idDepartamento=this.props.idDepartamento;
        var request="api/Empleados/EmpleadosDepartamento/"+idDepartamento;
        axios.get(this.urlEmpleados+request).then(response=>{
            console.log("Dentro de empleados");
            console.log(response.data);
            this.setState({
                empleados:response.data
            })
        })
    }

    componentDidMount=()=>{
        this.loadEmpleados();
    }

    componentDidUpdate=(oldProps)=>{
        //DIBUJAMOS LAS NUEVAS Y LAS ANTIGUAS
        console.log("Current: " + this.props.idDepartamento);
        console.log("Old: " + oldProps.idDepartamento);
        //SOLAMENTE ACTUALIZAMOS STATE SI PROPS HA CABIADO
        if(oldProps.idDepartamento != this.props.idDepartamento){
            this.loadEmpleados();
        }
    }

  render() {
    return (
      <div>
        <h1>Empleados {this.props.idDepartamento}</h1>
        <h1>{this.state.texto}</h1>
        <ul>
            {
                this.state.empleados.map((empleado,index)=>{
                    return(<li key={index}>
                        {empleado.apellido} - {empleado.oficio}
                        </li>)
                })
            }
        </ul>
      </div>
    )
  }
}
