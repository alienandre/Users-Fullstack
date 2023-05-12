import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import "./styles.css"
export default function Navigationbar(){
    return (
          <nav className="nav">
            <Link to="" className='site-title'>UserList</Link>
            <ul>
              <li>
                <Link to="">Users</Link>
              </li>
              <li>
                <Link to="register">Register</Link>
              </li>
            </ul>
          </nav>

    );
}