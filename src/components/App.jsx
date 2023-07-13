import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { Container } from './Container/Container';
import { ContactList } from './Contacts/ContactList';
import { FormAddContact } from './Forms/FormAddContact';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { HeadTilte } from './HeadTilte/HeadTilte';

export class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    onAddContact = contactData => {
        const newContact = { id: nanoid(), ...contactData };

        const findUser = this.state.contacts.find(
            el => el.name === newContact.name.trim()
        );

        if (findUser) {
            Notify.warning(`<b>${findUser.name}</b> is already in contacts`, {
                plainText: false,
            });
            return;
        }

        this.setState(prevState => ({
            contacts: [newContact, ...prevState.contacts],
        }));
    };

    onRemoveContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId
            ),
        }));
    };

    onFilter = filterTerm => {
        this.setState({ filter: filterTerm });
    };

    filteredContacts = () => {
        if (!!this.state.filter) {
            return this.state.contacts.filter(contact => {
                return (
                    contact.name
                        .toLowerCase()
                        .includes(this.state.filter.toLowerCase().trim()) ||
                    contact.number.includes(this.state.filter.trim())
                );
            });
        }
        return this.state.contacts;
    };

    render() {
        return (
            <>
                <Section>
                    <Container>
                        <HeadTilte title="Phonebook" />
                        <FormAddContact onAddContact={this.onAddContact} />
                    </Container>
                </Section>
                {this.state.contacts.length ? (
                    <Section>
                        <Container>
                            <HeadTilte title="Contacts" />
                            <Filter
                                filter={this.state.filter}
                                onFilterChange={this.onFilter}
                            />
                            <ContactList
                                contacts={this.filteredContacts()}
                                onRemoveContact={this.onRemoveContact}
                            />
                        </Container>
                    </Section>
                ) : (
                    <Section>
                        <Container>
                            <HeadTilte title="No contacts" header="h2" />
                        </Container>
                    </Section>
                )}
            </>
        );
    }
}
