import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import Alumnos from './Alumnos'

export default class Cursos extends Component {
    urlCurso=Global.urlCursos;
    selectCurso=React.createRef();
    state={
        cursos:[],
        curso:0,
        alumnoSeleccionado:null
    }
    loadCursos=()=>{
        var request="api/alumnos/cursos"
        axios.get(this.urlCurso+request).then(response=>{
            console.log("Dentro de cursos");
            console.log(response.data);
            this.setState({
                cursos:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadCursos();
    }
    buscarAlumnos=(event)=>{
        event.preventDefault();
        var curso=this.selectCurso.current.value;
        this.setState({
            curso:curso
        })
    }

   seleccionarAlumno=(alumno)=>{
        console.log(alumno);
        this.setState({
            alumnoSeleccionado:alumno
        })
    }

  render() {
    return (
      <div>
        <h1>Cursos</h1>
        {
            this.state.alumnoSeleccionado &&
            (<div>
                <h2>
                    {this.state.alumnoSeleccionado.nombre}
                </h2>
            </div>)
        }
        <form>
            <select ref={this.selectCurso} onChange={this.buscarAlumnos}>
                {
                    this.state.cursos.map((curso,index)=>{
                        return(<option key={index} value={curso}>
                            {curso}
                        </option>)
                    })
                }
            </select>
        </form>
        {
            this.state.curso !=0 &&
            <Alumnos curso={this.state.curso}
            seleccionarAlumno={this.seleccionarAlumno}></Alumnos>
        }
      </div>
    )
  }
}
