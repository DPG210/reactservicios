import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosOficios extends Component {

    urlEmpleados=Global.urlEmpleados;

    selectOficio=React.createRef();

    state={
        oficio:[],
        empleados:[]
    }

    generarOficios=()=>{
        var request="api/Empleados"
        axios.get(this.urlEmpleados+request).then(response=>{
            console.log("Dentro del get");
            var datos=response.data;
            var responseOficios=[...new Set(datos.map(oficio=>oficio.oficio))];

            console.log(responseOficios);
            this.setState({
                oficio:responseOficios
            })
        })
    }
    buscarEmpleados=(event)=>{
        event.preventDefault();
        var oficio=this.selectOficio.current.value;
        console.log("mi oficio es "+oficio)
        var request="api/Empleados/EmpleadosOficio/"+oficio;

        axios.get(this.urlEmpleados+request).then(response=>{
            console.log("Dentro de empleados");
            console.log(response.data)

            this.setState({
                empleados:response.data
            })
        })

    }
    componentDidMount=()=>{
        this.generarOficios();
    }
    
  render() {
    return (
      <div>
        <h1>Empleados Oficio</h1>
        <form>
            {/* <button onClick={this.buscarEmpleados}>Buscar empleados</button><br></br><br></br> */}
            <select ref={this.selectOficio} onChange={this.buscarEmpleados}>
                {
                    this.state.oficio.map((oficio,index)=>{
                        return(<option key={index} value={oficio}>{oficio}</option>)
                    })
                }
            </select>
        </form>
        <h1>{this.state.empleados.apellido}</h1>
        {
            
        }
         <table border="1">
                <thead>
                    <tr>
                        <th>Apellido</th>
                        <th>Oficio</th>
                        <th>Salario</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.empleados.map((empleado,index)=>{
                            return(<tr>
                                <td>{empleado.apellido}</td>
                                <td>{empleado.oficio}</td>
                                <td>{empleado.salario}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
      </div>
    )
  }
}
