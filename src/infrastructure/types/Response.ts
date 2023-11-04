import { Request, Response } from "express";

type Resp = {
    req: Request,
    res: Response,
    status?: number,
    body: {
        message?: string,
        data?: object | unknown | void
    },
}

export {
    Resp
};