import React, { useState } from 'react'

export default function Index({image}) {

    return (
        <div>
            <img src={image.url}/>
            <h1>{image.title}</h1>
            <h2>{image.date}</h2>
            <h2>{image.explanation}</h2>
        </div>
    )
}

