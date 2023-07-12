import PropTypes from 'prop-types';
import { StyledHeadTitle } from './HeadTilte.styled';

export const HeadTilte = ({ title }) => {
    return <StyledHeadTitle>{title}</StyledHeadTitle>;
};

HeadTilte.propTypes = {
    title: PropTypes.string.isRequired,
};
