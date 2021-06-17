import express from 'express';
const router = express.Router();
export default router;

//create a contact controller instance
import { DisplayContactListPage, DisplayEditPage } from '../Controllers/contact';


/* GET contact list page- with /contact-list */
/* GET - display /clothing-list/add page. */
router.get('/add', DisplayAddPage);
router.get('/', DisplayContactListPage);

/* display edit/:id page with /contact-list/edit:id */
router.get('/edit/:id',DisplayEditPage);