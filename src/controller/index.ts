const contacts = require('../../db/db.json');

export function getContactList() {
  return contacts
}

export function getContact(contactID: string) {
  const contact = contacts.filter((contact: any) => contact.id === contactID );

  if(!contact.length) {
    throw new Error('Contact not found');
  }

  return contact[0];
}

export function blockContact(contactID: string) {
  const contact = getContact(contactID);
  contact.isblocked = true;
  return contact
}

export function deleteContact(contactID: string) {
  const contact = getContact(contactID);
  contacts.splice(contact, 1);
  return contacts;
}

export function addContact(name: string, phone: string, email: string, _isblocked: boolean, id: string) {
  const contact = {
    name,
    phone,
    email,
    isblocked: false,
    id
  };
  contacts.push(contact);
  return contacts;
}

export function editContact(contactID: string) {
  
}
