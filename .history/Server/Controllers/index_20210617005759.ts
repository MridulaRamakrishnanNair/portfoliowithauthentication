import express, { Request, Response, NextFunction } from 'express';

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'Home',page: 'home' });
}

export function DisplayAbout(req: Request, res: Response, next: NextFunction): void
{
res.render('index', { title: 'Home',page: 'home' });
}