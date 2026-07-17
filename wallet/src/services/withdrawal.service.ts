import {
    Wallet,
    HDNodeWallet,
    parseEther,
    formatEther
} from "ethers";

import {
    provider
} from "../config/provider";

import {
    generateWallets
} from "./wallet.service";

import {
    ENV
} from "../config/env";

import {
    logBalanceChange
} from "./logger.service";



export async function withdrawal(data:any) {


    const {
        from,
        destination,
        amount
    } = data;



    /*
        Get managed wallet list
    */

    const wallets =
        generateWallets(
            ENV.WALLET_COUNT,
            ENV.MNEMONIC
        );



    let walletIndex:number = -1;



    /*
        Find sender index
    */

    for(const w of wallets){

        if(
            w.address.toLowerCase()
            ===
            from.toLowerCase()
        ){

            walletIndex =
                w.index;

            break;

        }

    }



    if(walletIndex === -1){

        throw new Error(
            "Sender address is not managed by custody service"
        );

    }



    /*
        Derive wallet using same HD path
    */

    const derivedWallet =
    HDNodeWallet.fromPhrase(
        ENV.MNEMONIC,
        undefined,
        `m/44'/60'/0'/0/${walletIndex}`
    );


    const signer =
        new Wallet(
            derivedWallet.privateKey,
            provider
        );



    /*
        Check balance
    */

    const balance =
        await provider.getBalance(from);



    const value =
        parseEther(amount);



    const feeData =
        await provider.getFeeData();



    const gasLimit =
        21000n;



    const gasPrice =
        feeData.gasPrice ?? 0n;



    const gasCost =
        gasLimit * gasPrice;



    const required =
        value + gasCost;



    if(balance < required){


        throw new Error(

            `Insufficient balance. Available ${formatEther(balance)} ETH, Required ${formatEther(required)} ETH`

        );

    }



    /*
        Broadcast transaction
    */

    const tx =
        await signer.sendTransaction({

            to:destination,

            value:value

        });



    await tx.wait();



    /*
        Sender outflow
    */

    logBalanceChange(

        from,

        amount,

        "OUTFLOW",

        tx.hash

    );



    /*
        Receiver inflow
    */

    logBalanceChange(

        destination,

        amount,

        "INFLOW",

        tx.hash

    );



    return {

        status:"BROADCASTED",

        broadcast:true,

        txHash:tx.hash,

        from,

        destination,

        amount

    };


}