import { Router } from "express";
// import { getContactList, getContact, blockContact, deleteContact, addContact, editContact } from '../controller/index';

import Contact from "../schema/contact.model";

const router = Router();

/* GET users listing. */
router.get("/", function(_req, res) {
  res.send("Contacts List");
});

router.get("/contacts", (_req, res) => {
  Contact.find(function(err: any, contacts: any) {
    if (err) {
      res.status(404).json({ err });
    } else {
      res.status(200).json(contacts);
    }
  });
});

router.post("/contacts", (req, res) => {
  let contact = new Contact(req.body);
  contact
    .save()
    .then(() => {
      res.status(200).json({ contact: "contact added successfully" });
    })
    .catch(() => {
      res.status(400).send("adding a new contact failed");
    });
});

router.get("/contact/:id", (req, res) => {
  try {
    Contact.findById(req.params.id, function(_err, contact) {
      res.json(contact);
    });
  } catch {
    res.status(400).json({ error: "This Contact is not in database" });
  }
});

router.put("/contact/:id", (req, res) => {
  Contact.findById(req.params.id, function(_err: any, contact) {
    if (!contact) {
      res.status(404).json({ err: "contact not found" });
    } else {
      contact.name = req.body.name;
      contact.phone = req.body.phone;
      contact.email = req.body.email;
      contact.isBlocked = req.body.isBlocked;

      contact
        .save()
        .then(_contact => {
          res.json("Contact Updated");
        })
        .catch(_err => {
          res.status(400).json("Update not possible");
        });
    }
  });
});

router.delete('/contact/:id', (req, res) => {
  Contact.findByIdAndDelete(req.params.id, function(_err: any, contact) {
    if (!contact) {
      res.status(400).send('Contact not found');
    } else {
      res.status(200).json({ message: 'Contact Deleted Successfully' });
    }
  })
})

// router.post('/contact/:contactID', (req, res) => {
//   try {
//     blockContact(req.params.contactID);

//     res.status(200).json({ message: 'contact blocked' })
//   } catch {
//     res.status(404).json({ error: 'no such contact'});
//   }
// });

// router.delete('/contact/:contactID', (req, res) => {
//   try {
//     deleteContact(req.params.contactID);

//     res.status(200).json({ message: 'Contact deleted' })
//   } catch {
//     res.status(404).json({ error: 'Contact not found' })
//   }
// });

export default router;
