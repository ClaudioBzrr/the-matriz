import React from 'react'
import Header from '../../components/Header'
import scene01 from '../../assets/scene01.jpg'
import scene02 from '../../assets/scene02.jpg'
import scene03 from '../../assets/scene03.jpg'
import scene04 from '../../assets/scene04.JPG'
import fim from '../../assets/fim.JPG'
import Awesomeslider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import './styles.css'




export default function Home(){
    return(
        
        <div className="main">
            <Header/>
            <div className="content">
                <Awesomeslider>
                    <div className="sliders" data-src={scene01}/>
                    <div className="sliders" data-src={scene02}/>
                    <div className="sliders" data-src={scene03}/>
                    <div className="sliders" data-src={scene04}/>
                    <div className="sliders" data-src={fim}/>
                </Awesomeslider>
            </div>
            
        </div>
    )
}