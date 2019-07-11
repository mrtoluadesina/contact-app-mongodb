import { Router } from 'express';
import { getContactList, getContact, blockContact, deleteContact, addContact, editContact } from '../controller/index';
const router = Router();

/* GET users listing. */
router.get('/', function(_req, res) {
  res.send('Contacts List');
});

router.get('/contacts', (_req, res) => {
  const contacts = getContactList();
  res.status(200).json({ data: contacts });
});

router.get('/contact/:contactID', (req, res) => {
  try {
    const data = getContact(req.params.contactID);

    data.isBlocked ? res.status(405).json({ message: 'Contact is blocked' }) : res.status(200).json({ data });
    
  } catch {
    res.status(404).json({ error: 'Contact not found'});
  }
});

router.post('/contact/:contactID', (req, res) => {
  try {
    blockContact(req.params.contactID);

    res.status(200).json({ message: 'contact blocked' })
  } catch {
    res.status(404).json({ error: 'no such contact'});
  }
});

router.delete('/contact/:contactID', (req, res) => {
  try {
    deleteContact(req.params.contactID);

    res.status(200).json({ message: 'Contact deleted' })
  } catch {
    res.status(404).json({ error: 'Contact not found' })
  }
});

router.post('/contacts', (req, res) => {
  const { name, phone, email, isBlocked, id } = req.body;
  addContact(name, phone, email, isBlocked, id);
  res.status(200).json({ message: 'Contact Created' })
});

router.put('/contact/:contactID', (req, res) => {
  const { name, phone, email, isBlocked, id } = req.body;
  editContact(name, phone, email, isBlocked, id);
  res.status(200).json({ message: 'Contact Edited' })
})

export default router;
