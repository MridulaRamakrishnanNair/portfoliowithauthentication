import express, { Request, Response, NextFunction } from 'express';

import * as DBConfig from '../Config/db';


export function UserDisplayName(req: Request): String
{
    if (req.user)
    {
        let user = req.user as UserDocument;
        return user.displayName.toString();
    }
    return '';
}

export function AuthGuard(req:Req)