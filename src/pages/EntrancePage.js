import React from 'react';
import StarfieldAnimation from 'react-starfield-animation';

export default function EntrancePage() {
    return (
        <div>
            <div style={{color: 'pink'}}>
            <h1 style={{color: 'pink'}}>Hi there! </h1>
            <button>Enter the rocketship: </button>
        </div>
        <StarfieldAnimation
                style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                backgroundColor: '#000'
                }}
            >
        
        </StarfieldAnimation>
        </div>
    )
}

