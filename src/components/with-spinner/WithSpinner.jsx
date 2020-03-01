import React from 'react'

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.style';
import Spinner from '../../assets/spinner.gif'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer img={Spinner} />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner;