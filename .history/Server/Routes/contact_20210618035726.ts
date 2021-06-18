import express from 'express';
const router = express.Router();
export default router;

//create a contact controller instance
import { DisplayAddPage, DisplayContactListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/contact';

//import util functions

import { AuthGuard } from '../Util/index';

/* GET contact list page- with /contact-list */
/* GET - display /clothing-list/add page. */

router.get('/add', AuthGuard,DisplayAddPage);
// Get contact-list page - with /business-contacts-list
router.get('/', DisplayContactListPage);

/* display edit/:id page with /contact-list/edit:id */
router.get('/edit/:id', AuthGuard,DisplayEditPage);

/* POST - process /clothing-list/add page */
router.post('/add',AuthGuard, ProcessAddPage);

/* POST - process /clothing-list/edit/:id page */
router.post('/edit/:id',AuthGuard, ProcessEditPage);

/* GET - process /clothing-list/delete/:id */
router.get('/delete/:id',AuthGuard, ProcessDeletePage);