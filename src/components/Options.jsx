import { useEffect } from 'react';
import GeneralOptions from './GeneralOptions'
import IncludeOptions from './IncludeOptions'
import { useAnimate, stagger } from 'framer-motion'
import styles from '../styles/styles';

const Options = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate("section", {opacity: [0, 1]}, {delay: stagger(0.5)})
    }, [animate])

    return (
        <div ref={scope} className='flex justify-around align-middle flex-wrap mt-6'>
            <GeneralOptions />
            <IncludeOptions />
        </div>
    )
}

export default Options;