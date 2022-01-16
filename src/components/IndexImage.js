import React, { useState } from 'react'
import { MainPost, PostImage } from './NewStyles'

export default function IndexImage({image}) {

    return (
        <MainPost>
            <h1>{image.title}</h1>
            <h2>{image.date}</h2>
            <PostImage src={image.url}/>
            <h2>{image.explanation}</h2>
        </MainPost>
    )
}

