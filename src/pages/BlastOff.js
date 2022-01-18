import React from 'react'
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