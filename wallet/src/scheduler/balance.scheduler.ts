import cron from "node-cron";

import {generateWallets}
from "../services/wallet.service";

import {updateBalances}
from "../services/balance.service";

import {ENV}
from "../config/env";



cron.schedule(
"*/5 * * * *",

async()=>{


const wallets =
generateWallets(

ENV.WALLET_COUNT,

ENV.MNEMONIC

);



await updateBalances(wallets);



console.log(
"Balance tracking completed"
);


}

);