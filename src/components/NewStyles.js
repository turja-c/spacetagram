import styled from 'styled-components';
import { Box, Image } from '@chakra-ui/react'

export const MainPost = styled(Box)`
    max-width: 350px;
    margin-top: 25px;
    font-family: "Ubuntu", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PostImage = styled(Image)`
    max-height: 500px;
    max-width: 600px;
    border-radius: 20px;
    margin-top: 30px;
`;
