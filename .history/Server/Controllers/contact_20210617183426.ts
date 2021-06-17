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
        res.render('index', { title: 'Edit', page: 'edit', contactitem: contactItemToEdit});
    });
}