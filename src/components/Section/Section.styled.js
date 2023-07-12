import styled from 'styled-components';

export const StyledSection = styled.section`
    padding-bottom: 30px;

    &:first-child {
        padding-top: 20px;
    }

    @media screen and (min-width: 768px) {
        padding-bottom: 40px;

        &:first-child {
            padding-top: 32px;
        }
    }
`;
