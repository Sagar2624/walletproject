import { Request, Response } from "express";

import {
    withdrawal
} from "../services/withdrawal.service";



export async function createWithdrawal(

    req:Request,

    res:Response

){

    try{


        const result =
            await withdrawal(req.body);



        res.json(result);



    }catch(error:any){


        res.status(400).json({

            error:error.message

        });


    }

}