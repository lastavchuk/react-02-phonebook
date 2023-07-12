import styled from 'styled-components';

export const StyledContact = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    padding-bottom: 10px;

    &:nth-of-type(odd) {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;
