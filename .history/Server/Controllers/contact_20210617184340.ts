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
        res.render('index', { title: 'Edit', page: 'update', contactitem: contactItemToEdit});
    });
}

//Display (C)reate Page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('index', { title: 'Add', page: 'update', contact: '' });
}

//Process Functions

//process EDIT page

export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;

    // instantiate a new Contact Item
    let updatedClothingItem = new Contact
        ({
            "_id": id,
            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "email": req.body.email,
            "contactnumber": req.body.contactnumber
        });
    // find the contact item via db.contact.update({"_id":id}) and then update
    Contact.updateOne({_id: id}, updatedClothingItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/contact-list');
    });      
}

// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new Contact
  let newContact = new Clothing
  ({
    "name": req.body.name,
    "brand": req.body.brand,
    "category": req.body.category,
    "colour": req.body.colour,
    "size": req.body.size,
    "price": req.body.price
  });

  // db.clothing.insert({clothing data is here...})
  Clothing.create(newContact, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/clothing-list');
  });
}
