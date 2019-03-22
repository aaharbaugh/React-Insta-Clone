import React from 'react';
import { Instagram, Compass, Heart, User } from 'react-feather';

import styled from "styled-components";

const SearchBarDiv = styled.div`
    display: flex;
    padding-left: 50px;
    padding-right: 50px;
    border-bottom: 1px solid lightgray;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    justify-content: space-between;
    align-items: center;
    background-color: white;

    position: fixed;
    top: 0;
    z-index: 1;
`;

const SearchImage = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;
    width: 145px;
    font-size: 24px;
`;

const InstagramLogo = styled.div`
    border-right: 1px solid lightgray;
    padding-right: 10px;
    margin-right: 10px;
`;

export default function SearchBar(props) {

    return (
        <SearchBarDiv>
            <SearchImage>
                <InstagramLogo>
                    <Instagram strokeWidth={3} size={48} />
                </InstagramLogo>
                <span>Instagram</span>
            </SearchImage>
            <div className="search-box">
                <input type="text" placeholder="search" onChange={props.searchFilter}/>
            </div>
            <div className="search-icons">
                <Compass strokeWidth={1} size={48} />
                <Heart strokeWidth={1} size={48} />
                <User strokeWidth={1} size={48} onClick={props.logoutFunction}/>
            </div>
        </SearchBarDiv>
    )
}