import React from 'react';
import './SearchBar.css';
import { Instagram, Compass, Heart, User } from 'react-feather';

export default function SearchBar(props) {

    return (
        <div className="search-bar">
            <div className="search-image">
                <div className="insta-logo">
                    <Instagram strokeWidth={3} size={48} />
                </div>
                <span>Instagram</span>
            </div>
            <div className="search-box">
                <input type="text" placeholder="search"/>
            </div>
            <div className="search-icons">
                <Compass strokeWidth={1} size={48} />
                <Heart strokeWidth={1} size={48} />
                <User strokeWidth={1} size={48} />
            </div>
        </div>
    )
}