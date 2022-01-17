import React from 'react';
import StarfieldAnimation from 'react-starfield-animation';
import { EntrancePageTitle, EntrancePageCard, Wrapper, EntrancePageMainTitle } from '../components/NewStyles';

export default function LoadingPage() {
    return (     
        <Wrapper >
            <EntrancePageCard>
                {/* <EntrancePageTitle>Hi there! 👋🏽</EntrancePageTitle> */}
                <EntrancePageMainTitle>LOADING</EntrancePageMainTitle>
            </EntrancePageCard>
            
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

