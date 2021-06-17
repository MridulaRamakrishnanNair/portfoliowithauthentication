import express, { Request, Response, NextFunction } from 'express';
import Contact from "../Models/contact";
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    Contact.find(function (err, contact) {
        if (err)
        {
            return console.error(err);
        }
        //render contact-list page content partial page
        res.render()
    });
}