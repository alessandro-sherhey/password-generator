import { useEffect } from 'react';
import GeneralOptions from './GeneralOptions'
import IncludeOptions from './IncludeOptions'
import { motion, useAnimate, stagger, animate } from 'framer-motion'

const Options = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate("div", {opacity: [0, 1]}, {delay: stagger(0.5)})
    })

    return (
        <div ref={scope} className='w-full flex align-middle justify-between flex-wrap'>
            <GeneralOptions />
            <IncludeOptions />
        </div>
    )
}

export default Options;