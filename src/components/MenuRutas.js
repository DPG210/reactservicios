import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tabla/21">Tabla Multiplicar 21</NavLink>
            </li>
            <li>
              <NavLink to="/tabla/12">Tabla Multiplicar 12</NavLink>
            </li>
            <li>
              <NavLink to="/tabla/210">Tabla Multiplicar 210</NavLink>
            </li>
            <li>
              <NavLink to="/collatz/30">Collatz 30</NavLink>
            </li>
            <li>
              <NavLink to="/collatz/40">Collatz 40</NavLink>
            </li>
            <li>
                <NavLink to="/collatz/23">Collatz 23</NavLink>
            </li>
        </ul>
      </div>
    )
  }
}
