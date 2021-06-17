import express, { Request, Response, NextFunction } from 'express';
import Contact from "../Models/contact";
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    contact.find(function (err, contactCollection) {
        if (err)
        {
            return console.error(err);
        }
        //render contact-list page content partial page
        res.render('index', {title: 'Contact List', page: 'contact-list', contact: contactCollection})
    });
}