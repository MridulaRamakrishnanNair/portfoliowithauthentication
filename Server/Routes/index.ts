import express from 'express';
const router = express.Router();
export default router;

//creating an index controller index

import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayServicesPage, ProcessLoginPage, ProcessLogoutPage, } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);


/* GET home page. */

router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);


/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* GET login page. */
router.get('/login', DisplayLoginPage);

/* POST - process Login page when user clicks Login button */
router.post('/login', ProcessLoginPage);

/* GET - process the Logout page - /logout */
router.get('/logout', ProcessLogoutPage);






//module.exports = router;
