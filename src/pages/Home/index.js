import React from 'react'
import './styles.css'
import Header from '../../components/Header'
import scene01 from '../../assets/scene01.PNG'
import scene02 from '../../assets/scene02.PNG'
import scene03 from '../../assets/scene03.PNG'

export default function About(){
    return(
        <div>
            <Header/>
            <div className="content">
                <ul class="slider">
                    <li>
                        <img src={scene01} />
                    </li>
                    <li>
                        <img src={scene02} />
                    </li>
                    <li>
                        <img src={scene03} />
                    </li>
                </ul>
            </div>
            
        </div>
    )
}