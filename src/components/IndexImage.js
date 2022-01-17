import React, { useState } from 'react'
import { MainPostCard, PostImage, PostTitle, PostDate, PostDescription } from './NewStyles'

export default function IndexImage({image}) {

    return (
        <MainPostCard>
            <PostTitle>{image.title}</PostTitle>
            <PostDate>{image.date}</PostDate>
            <PostImage src={image.url}/>
            <PostDescription>{(image.explanation).slice(0,300)}...</PostDescription>
        </MainPostCard>
    )
}

