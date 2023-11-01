import React, {useState} from 'react'
import Logo from './Logo';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
      
return (
    <div>
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"> <Logo/> </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/pizzas"}>Nuestras Pizzas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/hamburguesas"}>Nuestras Hamburguesas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/chivitos"}>Nuestros Chivitos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/cart"} ><CartWidget/></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    </div>
)
}

export default Navbar