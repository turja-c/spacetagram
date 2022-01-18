import React from 'react'
import StarfieldAnimation from 'react-starfield-animation';
import IndexImage from '../components/IndexImage';
import FetchData from '../components/FetchData';
import { EntranceTitle, EntranceSubTitle} from '../components/NewStyles';

export default function BlastOff() {
    return (
        <div>
            <EntranceTitle>Spacetagram</EntranceTitle>
            <EntranceSubTitle>Brought to you by NASA's awesome API</EntranceSubTitle>
            <FetchData />
        </div>
    )
}