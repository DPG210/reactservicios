import React, { Component } from 'react'
import axios  from 'axios'
import Global from '../../Global'
import Empleados from './Empleados'

export default class Departamento extends Component {
    urlDepartamentos=Global.urlDepartamentos;
    selectDepartamento=React.createRef();
    state={
        departamentos:[],
        idDepartamento:0
    }
    loadDepartamento=()=>{
        var request="webresources/departamentos";
        axios.get(this.urlDepartamentos+request).then(response=>{
            console.log("Dentro del get");
            console.log(response.data)
            this.setState({
                departamentos:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadDepartamento();
    }

    buscarEmpleados=(event)=>{
        event.preventDefault();
        var idDepartament= this.selectDepartamento.current.value;
        this.setState({
            idDepartamento:idDepartament
        })
    }

  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <form>
            <select ref={this.selectDepartamento}>
                {
                    this.state.departamentos.map((departamento,index)=>{
                        return(<option key={index} 
                            value={departamento.numero}>
                            {departamento.nombre}
                            </option>)
                    })
                }
            </select>
            <button onClick={this.buscarEmpleados}>
                Buscar empleados
            </button>
        </form>
        {
            this.state.idDepartamento !=0 &&
            <Empleados idDepartamento={this.state.idDepartamento}></Empleados>
        }
      </div>
    )
  }
}
