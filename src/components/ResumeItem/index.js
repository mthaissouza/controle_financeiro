import React from 'react'
import {
    Container,
    Headers,
    HeaderTitle,
    Total
} from "./styles"

const ResumeItem = ({ title, Icon, value }) => {
    return (
        <Container>
            <Headers>
                <HeaderTitle>
                    {title}
                </HeaderTitle>
                <Icon />
            </Headers>
            <Total>{value}</Total>
        </Container>
    )
}

export default ResumeItem