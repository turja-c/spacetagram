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
                        // <index image={image} key={index} />
                    }
                })}
                
            {/* <StarfieldAnimation
                style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
                }}
            /> */}
        </Wrapper>
        </div>
        :
        <LoadingPage />

    )
}


