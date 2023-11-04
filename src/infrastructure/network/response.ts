import { Handler, NextFunction, Request, Response } from "express";
import { Resp } from "../types/Response";

let req: any = {}; let res: any = {};

const response = (resp: Resp) => {
    const respD = resp;

    respD.status = Number(respD.status) || 200;
    respD.body = respD.body || {};

    respD.res.status(respD.status).json(respD.body);
    return respD.res.end();
};

export {
    response,
};
