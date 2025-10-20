import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Alumnos extends Component {
    urlCurso=Global.urlCursos;
    idAlumno=React.createRef();
    state={
        alumnos:[]
        // detalles:[]
    }
     
    loadAlumnos=()=>{
        var curso=this.props.curso;
        var request="api/alumnos/filtrarcurso/"+curso;
        console.log(request)
        axios.get(this.urlCurso+request).then(response=>{
            console.log("Dentro de alumnos del curso");
            console.log(response.data);
            this.setState({
                alumnos:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadAlumnos();
    }

    componentDidUpdate=(oldProps)=>{
        if(oldProps.curso != this.props.curso){
            console.log("Cambiando");
            this.loadAlumnos();
        }

    }
   

    // detallesAlumno=(idAlumno)=>{
        
    //     var request="api/alumnos/findalumno/"+idAlumno;
    //     console.log("Este es mi alumno: " +request)

    //     axios.get(this.urlCurso+request).then(response=>{
    //         console.log("Dentro de alumnos");
    //         console.log(response.data);
    //         this.setState({
    //             detalles:response.data
    //         })
    //     })
    // }

     

  render() {
    return (
    <div>
        <h1>Alumnos</h1>
            {
                this.state.detalles &&
                <div>
                    <h1>{this.state.detalles.nombre}</h1>
                </div>
            }
        <ul>
            {
                this.state.alumnos.map((alumnos,index)=>{
                    // return(<div>
                    //     <li key={index} value={alumnos.idAlumno}>{alumnos.nombre} {alumnos.apellidos}</li>
                    //     <button key={index} value={alumnos.idAlumno} onClick={()=>this.detallesAlumno(alumnos.idAlumno)}>Detalles</button>
                    // </div>)

                    return(<li key={index}> {alumnos.nombre} {alumnos.apellidos}
                    <button onClick={()=>{
                        this.props.seleccionarAlumno(alumnos)
                    }}>Detalles</button></li>)
                })
                
            }


            
        </ul>

    </div>
    )
  }
}
