import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/tabla/21">Tabla multiplicar 21</a>
            </li>
            <li>
                <a href="/tabla/12">Tabla multiplicar 12</a>
            </li>
            <li>
                <a href="/tabla/210">Tabla multiplicar 210</a>
            </li>
            <li>
                <a href="/collatz/30">Collatz 30</a>
            </li>
            <li>
                <a href="/collatz/40">Collatz 40</a>
            </li>
            <li>
                <a href="/collatz/10">Collatz 10</a>
            </li>
        </ul>
      </div>
    )
  }
}
