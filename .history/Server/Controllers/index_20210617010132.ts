import express, { Request, Response, NextFunction } from 'express';

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'Home',page: 'home' });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'About', page: 'about' });
}

export function DisplayProjects(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'Projects',page: 'projects' });
}

export function DisplayServices(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'Projects',page: 'projects' });
}