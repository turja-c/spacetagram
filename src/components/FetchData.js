import React, {useState, useEffect} from 'react'
import Index from './Index';
import ImageComponent from './ImageComponent';
// import {ImageWrapper, Image, InfoWrapper, TextWrapper, ImageTitle, ImageDate, Description} from "./styles";

const nasaBaseURL = 'https://api.nasa.gov/planetary/apod?api_key=fmaIp5xfWQkbEMtSCidAwJGirzfX2wHsu0fQSoV2&count=100'

export default function FetchData() {

    const [post, setPost] = useState(); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(nasaBaseURL)
        .then(res => res.json())
            .then(data => {
                setPost(data);
                setLoading(true);
            })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }, []);

    return (
        loading ?
        <div>
            {post.map((image, index) => {
                    if (image.media_type === 'image') {
                        return <ImageComponent image={image} key={index} />
                        return <Index image={image} key={index}/>
                        // <index image={image} key={index} />
                    }
                })}
        </div>
        :
        // <div>
        <h1> loading </h1>
        // </div>
    )
}


