import styled from 'styled-components';
import { Box, Image } from '@chakra-ui/react'

export const MainPostCard = styled(Box)`
    width: 350px;
    margin-top: 25px;
    font-family: "Ubuntu", sans-serif;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 2px 0;
`;

export const PostImage = styled(Image)`
    height: 200px;
    max-width: 350px;

`;

export const PostTitle = styled.h2`
    font-size: 20px;
    align-items: left;
    justify-content: left;
    align-items: flex-start;
    text-align: left;
    padding-left: 10px;
    padding-right: 2px;
`;

export const PostDescription = styled.p`
    font-size: 15px;
    align-items: left;
    font-family: "Ubuntu", sans-serif;
    padding: 0 15px 0 12px;
    justify-content: left;
    text-align: left;
    margin-bottom: -1rem;
    margin-top: 1rem;
`;

export const PostDate = styled.p`
    font-size: 14px;
    align-items: flex-start;
    font-family: 'Sintony', sans-serif;    
    padding: 10px 10px 0 12px;
    text-align: left;
    padding-left: 10px;
    margin-bottom: 1rem;
    margin-top: -1.2rem;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    // background-color: #000;
`;



export const EntrancePageTitle = styled.h1`
    font-size: 30px;
    align-items: left;
    justify-content: left;
`;

export const EntranceTitle = styled.h1`
    font-size: 70px;
    margin-top: 30px;
    font-family: 'Neonderthaw', cursive;
    color: #fff;
`;

export const EntranceSubTitle = styled.h1`
    font-size: 25px;
    font-family: 'Poiret One', cursive;
    color: #fff;
    margin-top: 5px;
`;

export const EntranceLoading = styled.h1`
    font-size: 60px;
    font-family: 'Holtwood One SC', serif;    
    color: #fff;
    text-align: center;
    margin-top: 20rem;
`;
