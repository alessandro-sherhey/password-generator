import GeneralOptions from './GeneralOptions'
import IncludeOptions from './IncludeOptions'

const OptionsWrapper = () => {
    return (
        <div className='flex justify-around align-middle flex-wrap w-full'>
            <GeneralOptions />
            <IncludeOptions />
        </div>
    )
}

export default OptionsWrapper;