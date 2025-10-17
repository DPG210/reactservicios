import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosDepartamento extends Component {

    url=Global.urlEmpleados;
    urlDept=Global.urlDepartamentos;
    selectDepartamento=React.createRef();

    state={
        empleados:[],
        departamentos:[]
    }

    buscarEmpleados=(event)=>{
        event.preventDefault();
        var idDepartamento=this.selectDepartamento.current.value;
        var request="api/empleados/empleadosdepartamento/"+idDepartamento;
        axios.get(this.url+request).then(response=>{
            console.log("Leyendo empleados");
            this.setState({
                empleados:response.data
            })
        })

        

    }
    loadDepartamentos=()=>{
        var request="webresources/departamentos";
        axios.get(this.urlDept+request).then(response=>{
            console.log("Cargando departamentos");
            this.setState({
                departamentos:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadDepartamentos();
    }
   

  render() {
    return (
      <div>
        <h1 style={{color:"grey"}}>Empleados Departamento</h1>
        <form>
            <label>Introduzca el ID del departamento</label>
            <select ref={this.selectDepartamento}>
            {
                this.state.departamentos.map((departamento,index)=>{
                    return(<option key={index} value={departamento.numero}>
                        {departamento.nombre}
                        </option>)
                })
            }
        </select>
            <button onClick={this.buscarEmpleados}>
                Buscar empleados
            </button>
        </form>
        
        <ul>
            {
                this.state.empleados.map((empleado,index)=>{
                    return(<li key={index}>{empleado.apellido}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
