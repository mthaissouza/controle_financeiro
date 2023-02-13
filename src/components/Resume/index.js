import React from 'react'
import {
    Container,
} from "./styles"
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";
import ResumeItem from '../ResumeItem'

const Resume = ({ income, expense, total }) => {
    return (
        <Container>
            <ResumeItem
                title="Entradas"
                Icon={FaRegArrowAltCircleUp}
                value={"1000"}
            />
            <ResumeItem
                title="Saídas"
                Icon={FaRegArrowAltCircleDown}
                value={"1000"}
            />
            <ResumeItem title="Total" Icon={FaDollarSign} value={"1000ss"} />
        </Container>
    )
}

export default Resume