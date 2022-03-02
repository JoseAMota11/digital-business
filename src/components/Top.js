import React from 'react';
import Imagen from '../sample-pic.jpg'

export default function Top(){
    return (
        <div className='top-container'>
            <img className='imagen' src={Imagen} alt="" />
            <h2 className='name-user'>Laura Smith</h2>
            <h3 className='ocupation-user'>Frontend Developer</h3>
            <h4 className='webside-user'>laurasmith.website</h4>
            <div className='buttons'>
                <button className='btn-1'><ion-icon name="mail-open-outline"></ion-icon>Email</button>
                <button className='btn-2'><ion-icon name="logo-linkedin"></ion-icon>LinkedIn</button>
            </div>
        </div>
    )
}