const contacts = require('../../db/db.json');

export function getContactList() {
  return contacts
}

export function getContact(contactID: string) {
  const contact = contacts.filter((contact: any) => contact.id === contactID );

  if(!contact.length) {
    throw new Error('Contact not found');
  }

  if(contact.isBlocked) {
    return 'Contact is blocked'
  }

  return contact[0];
}

export function blockContact(contactID: string) {
  const contact = getContact(contactID);
  contact.isBlocked = true;
  return contact
}

export function deleteContact(contactID: string) {
  const contact = getContact(contactID);
  contacts.splice(contact, 1);
  return contacts;
}

export function addContact(name: string, phone: string, email: string, _isBlocked: boolean, id: string) {
  const contact = {
    name,
    phone,
    email,
    isBlocked: false,
    id
  };
  contacts.push(contact);
  return contacts;
}

export function editContact(name: string, phone: string, email: string, isBlocked: boolean, id: string) {
  const contact = getContact(id);
  contact.name = name;
  contact.phone = phone;
  contact.email = email;
  contact.isBlocked = isBlocked;
  contact.id = id;

  return contact;
}
