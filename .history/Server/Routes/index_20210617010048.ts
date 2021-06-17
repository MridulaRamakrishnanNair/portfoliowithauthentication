import express from 'express';
const router = express.Router();
export default router;

//creating an index controller index

import {DisplayHomePage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);


/* GET home page. */

router.get('/home', DisplayHomePage);



/* GET about page. */
router.get('/about', function (req, res, next)
{
  res.render('index', { title: 'About', page: 'about' });
});

/* GET projects page. */
router.get('/projects', function (req, res, next)
{
  
});


/* GET services page. */
router.get('/services', function (req, res, next)
{
  res.render('index', { title: 'Services', page: 'services' });
});


/* GET contact page. */
router.get('/contact', function (req, res, next)
{
  res.render('index', { title: 'Contact', page: 'contact' });
});




//module.exports = router;