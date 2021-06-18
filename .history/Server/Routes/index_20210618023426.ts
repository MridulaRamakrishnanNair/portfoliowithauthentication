import express from 'express';
const router = express.Router();
export default router;

//creating an index controller index

import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage, } from '../Controllers/index';

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

/* POST - process Login page when user presses Login button */
router.post('/login', ProcessLoginPage);




//module.exports = router;
