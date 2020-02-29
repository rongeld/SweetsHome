import React from 'react'
import { CustomButtonContainer } from './custom-btn.styles';

function CustomBtn({ children, ...props }) {
    return (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomBtn
