import { Request, Response } from "express";

import { generateWallets } from "../services/wallet.service";
import { attachBalance } from "../services/wallet.balance.service";

import { ENV } from "../config/env";



/**
 * GET /api/wallets
 * Returns deterministic wallets with current balances
 */
export async function getWallets(
    req: Request,
    res: Response
) {

    try {

        const wallets =
            generateWallets(
                ENV.WALLET_COUNT,
                ENV.MNEMONIC
            );


        const walletsWithBalance =
            await attachBalance(wallets);


        res.json(walletsWithBalance);


    } catch(error:any) {

        res.status(500).json({

            error:error.message

        });

    }

}





/**
 * POST /api/wallets/generate
 * Generate N deterministic wallets
 */
export async function generateWalletsController(
    req: Request,
    res: Response
) {

    try {


        const {
            count
        } = req.body;



        const wallets =
            generateWallets(

                count,

                ENV.MNEMONIC

            );



        res.json({

            count,

            wallets

        });



    } catch(error:any) {


        res.status(500).json({

            error:error.message

        });


    }

}