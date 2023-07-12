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
        this.setState({
            contacts: this.state.contacts.filter(
                contact => contact.id !== contactId
            ),
        });
    };

    onFilter = filterTerm => {
        this.setState({ filter: filterTerm });
    };

    render() {
        const filteredContacts = this.state.contacts.filter(contact => {
            const findName = contact.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase().trim());
            const findNumber = contact.number.includes(
                this.state.filter.trim()
            );

            if (findName || findNumber) {
                return true;
            }
            return false;
        });

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
                                contacts={filteredContacts}
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
