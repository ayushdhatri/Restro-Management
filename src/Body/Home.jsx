import React from 'react';
import './Home.css';
import Banner from './Banner.jsx'
import cardData from './Carddata.json';
import Card from './Card.jsx' 

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    src={card.src}
                    title={card.title}
                    cusine={card.cusine}
                    price={card.price}
                    location={card.location}
                    time={card.time}
                />
            ))}
        </div>
        </div>
    )
}

export default Home
