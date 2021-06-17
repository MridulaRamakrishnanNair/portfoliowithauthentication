import express from 'express';
const router = express.Router();
export default router;

//create a contact controller instance
import { DisplayContactListPage, DisplayEditPage, ProcessAddPage } from '../Controllers/contact';


/* GET contact list page- with /contact-list */
/* GET - display /clothing-list/add page. */

router.get('/add', DisplayAddPage);
router.get('/', DisplayContactListPage);

/* display edit/:id page with /contact-list/edit:id */
router.get('/edit/:id', DisplayEditPage);

/* POST - process /clothing-list/add page */
router.post('/add', ProcessAddPage);

/* POST - process /clothing-list/edit/:id page */
router.post('/edit/:id', ProcessE);

/* GET - process /clothing-list/delete/:id */
router.get('/delete/:id', ProcessDeletePage);