import styled from 'styled-components';

export const StyledContainer = styled.div`
    max-width: 375px;
    min-width: 320px;

    margin-right: auto;
    margin-left: auto;

    padding: 10px;

    border-radius: 10px;
    box-shadow: 0px 0px 12px 5px rgba(34, 60, 80, 0.2);
    background-color: #ffffff;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        max-width: 768px;
        width: 450px;
    }
`;
