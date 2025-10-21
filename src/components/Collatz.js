import React, { Component } from 'react'

export default class Collatz extends Component {
    
    generarCollatz=()=>{
       
        var numero=parseInt(this.props.num);

        let aux=[numero];

        while(numero!=1){
            if(numero%2==0){
                numero=numero/2;
            }else{
                numero= numero*3+1;
            }
            aux.push(numero);
        }

        this.setState({
            numeros:aux
        })

    }

    state={
        numeros:[]
    }
    componentDidMount=()=>{
        this.generarCollatz();
    }
    componentDidUpdate=(oldProps)=>{
        if(oldProps.num != this.props.num){
            this.generarCollatz();
        }
    }
  render() {
    return (
      <div>
        <ul>
            {
                this.state.numeros.map((numero,index)=>{
                    return(<li key={index}>{numero}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
