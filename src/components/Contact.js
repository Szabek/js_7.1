import React from "react";
import {useParams} from 'react-router-dom'
import Error from "./Error";

export default function Contact() {

    const {lang} = useParams();
    
    switch (lang) {
        case "pl" :
            return (
                <h1>Contact PL Page</h1>
            );
        case "us" :
            return (
                <h1>Contact US Page</h1>
            );
        case "de" :
            return (
                <h1>Contact DE Page</h1>
            );
        case undefined :
            return (
                <h1>Contact Page</h1>
            );
        default :
            return (
                <Error/>
            );
    }
}
