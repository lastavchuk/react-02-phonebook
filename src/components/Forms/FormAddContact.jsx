import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button } from 'components/Button/Button';
import { StyledFormAddContact } from './FormAddContact.styled';

const INITIAL_STATE = {
    name: '',
    number: '',
};

export class FormAddContact extends Component {
    state = { ...INITIAL_STATE };

    onInputsChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onAddContact({ ...this.state });
        this.setState({ ...INITIAL_STATE });
    };

    render() {
        return (
            <StyledFormAddContact onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={this.state.name}
                    onChange={this.onInputsChange}
                    required
                />

                <label htmlFor="number">Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={this.state.number}
                    onChange={this.onInputsChange}
                    required
                />

                <Button className="btnGreen" type="submit">
                    Add contact
                </Button>
            </StyledFormAddContact>
        );
    }
}

FormAddContact.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};
