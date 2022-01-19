import React from 'react';
import StarfieldAnimation from 'react-starfield-animation';
import {  EntranceLoading, Wrapper } from '../components/NewStyles';
import { Wave } from 'react-animated-text';

export default function LoadingPage() {
    return (     
        <Wrapper >
            <EntranceLoading>
                <Wave text="BLASTING OFF" effect="stretch" effectChange={2.0} />
            </EntranceLoading>
            
            <StarfieldAnimation
                    style={{
                        position: 'absolute',
                        zIndex: -1,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#000'
                    }}
                />  
        </Wrapper>
    )
}

