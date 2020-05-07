import React from 'react'
import './styles.css'
import Header from '../../components/Header'

export default function About(){
    return(
        <div className="sobreDiv">
            <Header/>
            <section className="grid">
                <div className="bio">
                    <h1 className="autores">Autores</h1>
                    <div className="autor">Antonio Walter Alves de Souza</div>
                    <div className="autor">Francisco Claudio Bezerra Dantas</div>
                    <div className="git"><a className="repo"target="_blank" rel="noopener noreferrer" href="https://github.com/ClaudioBzrr/the-matriz.git">Visite o Repositório</a></div>
                </div>
            </section>
            
        </div>
    )
}