import React from 'react'
import Card from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import './cards.css'

const cards = [
    {
        id: 1,
        title: "Linkedin",
        image: image1,
        url: "https://www.linkedin.com/in/maira-julian-768a001b0/",
        text: ""
    },
    {
        id: 2,
        title: "Facebook",
        image: image2,
        url: "https://www.facebook.com/maira.julian",
        text: "Aquí puedes navegar por mi página de Facebook"
    },
    {
        id: 3,
        title: "Instagram",
        image: image3,
        url: "https://www.instagram.com/mairajulian/?hl=es",
        text: "Te invito a que visites Instagram"
    }
]

function Cards() {
    console.log(cards);
  return (
    <div>
        <div className='container d-flex justify-content-center animate__animated animate__rotateIn' id='titulo'>
            <h1>Visita mis redes sociales</h1>
        </div>
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className='row'>
                {
                    cards.map(card => (
                        <div className='col-md-4' key={card.id}>
                            <Card title={card.title} imagen={card.image} url={card.url} text={card.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Cards