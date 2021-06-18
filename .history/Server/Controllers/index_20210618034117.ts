import express, { Request, Response, NextFunction } from 'express';
import passport from "passport";
//creating an instance of User
import User from "../Models/user";

//import util functions

import { UserDisplayName } from '../Util';

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'Home',page: 'home', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'About', page: 'about', displayName: UserDisplayName(req) });
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'Projects',page: 'projects', displayName: UserDisplayName(req) });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'Services', page: 'services', displayName: UserDisplayName(req) });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'Contact', page: 'contact', });
}

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
    if (!req.user)
    {
        res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage') });
    }
    return res.redirect("/contact-list");
}


export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
{
    passport.authenticate("local", (err, user, info) => {
    // to check if there are server errors?
        if (err)
        {
      console.error(err);
      return next(err);
        }

    // are there login errors?
        if (!user)
        {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/login");
        }

    req.login(user, (err) =>
      // are there db errors?
      {
        if (err)
            {
          console.error(err);
          return next(err);
            }

        return res.redirect("/contact-list");
      }
    );
  })(req, res, next);
}

    
export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction): void
{
  req.logout();

  res.redirect("/login");
}
