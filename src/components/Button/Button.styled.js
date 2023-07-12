import styled from 'styled-components';

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 5px;

    width: 100%;
    padding: 10px;

    border-radius: 5px;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;

    transition-property: color, border-color, background-color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &.btnGreen {
        background-color: #198754;
        border: 1px solid #198754;
        &:hover {
            color: #198754;
            background-color: #ffffff;
            border-color: #198754;
        }
    }
    &.btnBlue {
        background-color: #0d6efd;
        border: 1px solid #0d6efd;
        &:hover {
            color: #0d6efd;
            background-color: #ffffff;
            border-color: #0d6efd;
        }
    }
    &.btnRed {
        background-color: #dc3545;
        border: 1px solid #dc3545;
        &:hover {
            color: #dc3545;
            background-color: #ffffff;
            border-color: #dc3545;
        }
    }

    &.fixed {
        width: 100px;
    }
`;
