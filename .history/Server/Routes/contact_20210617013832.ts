import express from 'express';
const router = express.Router();
export default router;

//create a contact controller instance
import {} from '../Controllers'


/* GET contact list page- with /contact-list */
router.get('/', DisplayContactListPage);