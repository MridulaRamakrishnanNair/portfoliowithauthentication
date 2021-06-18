import express, { Request, Response, NextFunction } from 'express';
import Contact from "../Models/contact";

//(R)ead in CRUD
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    Contact.find(function (err, contactCollection) {
        if (err)
        {
            return console.error(err);
        }
        //render contact-list page content partial page
        res.render('index', {title: 'Contact List', page: 'contact-list', contact: contactCollection})
    });
}
// Display (E)dit page
export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;
    //console.log(id);
        
    //pass the id to the database

    //db.contact.find({"_id": id})

    Contact.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        
        //if no error show edit view
        res.render('index', { title: 'Edit', page: 'update', item: contactItemToEdit});
    });
}

//Display (C)reate Page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('index', { title: 'Add', page: 'update', contact: "" });
}

//Process Functions

//process EDIT page

export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;

    // instantiate a new Contact Item
    let updatedContactItem = new Contact
        ({
            _id: id,
          firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            contactnumber: req.body.contactnumber
        });
    // find the contact item via db.contact.update({"_id":id}) and then update
    Contact.updateOne({_id: id}, updatedContactItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }

      res.render('index', { title: 'Add', page: 'update', contact: "" });
  
      // res.render('/contact-list');
    });      
}

// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new Contact
  let newContact = new Contact
  ({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    contactnumber: req.body.contactnumber
  });

  // db.contact.insert({contact data is here...})
  Contact.create(newContact, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
}
// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.contact.remove({"_id: id"})
  Contact.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
}