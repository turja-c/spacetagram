import styled from 'styled-components';
import { Box, Image } from '@chakra-ui/react'
import StarfieldAnimation from 'react-starfield-animation';

export const MainPostCard = styled(Box)`
    width: 350px;
    margin-top: 25px;
    font-family: "Ubuntu", sans-serif;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 2px 0;
    // justify-content: center;
    // align-items: center;
`;

export const PostImage = styled(Image)`
    height: 200px;
    max-width: 350px;

`;

export const PostTitle = styled.h1`
    font-size: 20px;
    align-items: left;
    justify-content: left;
    align-items: flex-start;
`;

export const PostDescription = styled.h1`
    font-size: 15px;
    align-items: left;
    font-family: "Ubuntu", sans-serif;
    padding: 0 12px 0 12px;
    justify-content: left;
`;

export const PostDate = styled.h3`
    font-size: 15px;
    align-items: flex-start;
    font-family: "Ubuntu", sans-serif;
    padding: 0 12px 0 12px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;



export const EntrancePageTitle = styled.h1`
    font-size: 30px;
    align-items: left;
    justify-content: left;
`;

export const EntrancePageMainTitle = styled.h1`
    font-size: 70px;
    align-items: left;
    justify-content: left;
    margin-top: 30px;
`;

export const EntrancePageCard = styled(Box)`
    width: 500px;
    height: 150px;
    margin-top: 20rem;
    font-family: "Ubuntu", sans-serif;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 1rem;
`;