import PropTypes from 'prop-types';
import { StyledContact } from './Contact.styled';
import { Button } from 'components/Button/Button';

export const Contact = ({ contact, onRemoveContact }) => {
    return (
        <StyledContact>
            <span>
                <b>{contact.name}</b>: {contact.number}
            </span>
            <Button
                className="btnRed fixed"
                onClick={() => onRemoveContact(contact.id)}
            >
                Delete
            </Button>
        </StyledContact>
    );
};

Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onRemoveContact: PropTypes.func.isRequired,
};
