import path from "path";

import {formatEther} from "ethers";

import {provider} from "../config/provider";

import {
readJSON,
writeJSON
}
from "../utils/file.utils";


import {
createBalanceLog
}
from "./logger.service";



const balanceFile =
path.join(
process.cwd(),
"data/balances.json"
);



export async function updateBalances(
wallets:any[]
){


let stored:any =
readJSON(balanceFile);



for(const wallet of wallets){


    const balanceWei =
    await provider.getBalance(
        wallet.address
    );


    const currentBalance =
    formatEther(balanceWei);



    const previous =
    stored[wallet.address];



    if(
        previous &&
        previous.balance !== currentBalance
    ){


        const old =
        Number(previous.balance);


        const current =
        Number(currentBalance);



        if(current > old){

            createBalanceLog({

                address:
                wallet.address,

                type:"INFLOW",

                oldBalance:
                previous.balance,

                newBalance:
                currentBalance

            });

        }


    }



    stored[wallet.address]={

        balance:
        currentBalance,

        updatedAt:
        new Date().toISOString()

    };


}



writeJSON(
balanceFile,
stored
);


}