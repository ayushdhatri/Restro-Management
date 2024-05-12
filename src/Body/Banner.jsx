import React from 'react';
import './Banner.css';
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { Button } from "antd";

function Banner() {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    return (
        <div className='banner'>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button onClick={() => navigate('/search')} variant='contained' color='primary'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner;
