import express, { Request, Response, NextFunction } from 'express';
import passport from "passport";
//creating an instance of User
import User from "../Models/user";

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'Home',page: 'home', });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'About', page: 'about' });
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'Projects',page: 'projects' });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'Services', page: 'services' });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'Contact', page: 'contact' });
}

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void{
    if (!req.user)
    {
        res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage') });
    }
    return res.redirect("/contact-list");
}


export function ProcessLoginPage()