import express from 'express';
const router = express.Router();
export default router;

//create a contact 


/* GET contact list page- with /contact-list */
router.get('/', DisplayContactListPage);