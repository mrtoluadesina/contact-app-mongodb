import { Router } from 'express';
import { getContactList } from '../controller/index';
const router = Router();

/* GET users listing. */
router.get('/', function(_req, res) {
  res.send('Contacts List');
});

router.get('/all', (_req, res) => {
  const contacts = getContactList();
  res.status(200).json({ data: contacts });
});

export default router;
