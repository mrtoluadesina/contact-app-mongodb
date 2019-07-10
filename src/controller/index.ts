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

  
}