import { useEffect } from 'react';
import GeneralOptions from './GeneralOptions'
import IncludeOptions from './IncludeOptions'
import { useAnimate, stagger } from 'framer-motion'
import styles from '../styles/styles';

const Options = () => {
    return (
        <div className='flex justify-around align-middle flex-wrap w-full'>
            <GeneralOptions />
            <IncludeOptions />
        </div>
    )
}

export default Options;