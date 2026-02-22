"use client";

import styled from "styled-components";

const MyStyleButton = styled.button`
    background-color: #4ac;
    color: #fff;
    padding: 5px 10px;
    border-radius: 10px;
`;

const CustomButton = ({children}) => {
    return (
        <MyStyleButton>{children}</MyStyleButton>
    )
};

export default CustomButton;
