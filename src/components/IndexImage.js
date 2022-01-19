import React, { useState } from 'react'
import { MainPostCard, PostImage, PostTitle, PostDate, PostDescription } from './NewStyles'
import Heart from "react-animated-heart";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function IndexImage({image}) {
    const [liked, setLiked] = useState(false);
    return (
        <div>
            
        <MainPostCard>
            <PostTitle>{image.title}</PostTitle>
            <PostDate>{image.date}</PostDate>
            <PostImage src={image.url}/>
            <PostDescription>
                <ReactReadMoreReadLess
                    charLimit={300}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                    readMoreClassName="read-more-less--more"
                    readLessClassName="read-more-less--less"
                >
                    {image.explanation}
                </ReactReadMoreReadLess>
                </PostDescription>
            <Heart isClick={liked} onClick={() => setLiked(!liked)} />
        </MainPostCard>
        
    </div>
    )
}

