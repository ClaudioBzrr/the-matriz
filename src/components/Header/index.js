import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <div className="mainHeader">
            <div className="header">
                <div className="titulo"><Link to="/">The Matriz</Link></div>
                <div className="sobre"><Link to="/about">Sobre</Link></div>
            </div>
        </div>
    )
}