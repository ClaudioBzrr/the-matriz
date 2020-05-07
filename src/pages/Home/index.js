import React from 'react'
import Header from '../../components/Header'
import scene01 from '../../assets/scene01.PNG'
import scene02 from '../../assets/scene02.PNG'
import scene03 from '../../assets/scene03.PNG'
import Awesomeslider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css';
import './styles.css'



export default function About(){
    return(
        <div className="main">
            <Header/>
            <div className="content">
                <Awesomeslider>
                    <div className="sliders" data-src={scene01}/>
                    <div className="sliders" data-src={scene02}/>
                    <div className="sliders" data-src={scene03}/>
                </Awesomeslider>
            </div>
            
        </div>
    )
}