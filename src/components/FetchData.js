import React, {useState, useEffect} from 'react'
import IndexPage from './IndexImage';
import { Wrapper } from './NewStyles';
import StarfieldAnimation from 'react-starfield-animation';
import LoadingPage from '../pages/LoadingPage';

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
        <Wrapper>
            
            {post.map((image, index) => {
                    if (image.media_type === 'image') {
                        return <IndexPage image={image} key={index}/>
                    }
                })}
                
            <StarfieldAnimation
                style={{
                    position: 'fixed',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 'auto',
                    backgroundColor: '#000'
                }}
            />
        </Wrapper>
        </div>
        :
        <LoadingPage />

    )
}


