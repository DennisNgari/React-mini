import styled from "styled-components";
import { b } from "../../styles/Responsive";

export const PageNotFoundContainer = styled.div`
    background-color: #fff;
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${b.lg}{
        height:40vh;
    }
`
export const Image = styled.img`
        width: 60%;
        height: 60%;
        object-fit: contain;
`

export const Text = styled.h2`
        color: #4E32A8;
        font-weight: bold;
        @media ${b.lg}{
        font-size: 14px;
    }
`