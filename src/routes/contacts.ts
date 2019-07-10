import { Router } from 'express';
import { getContactList, getContact } from '../controller/index';
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

    res.status(200).json({ data });
  } catch {
    res.status(404).json({ error: 'Contact not found'});
  }
})

export default router;
