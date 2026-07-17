import { HDNodeWallet } from "ethers";



export function generateWallets(
    count: number,
    mnemonic: string
) {


    const wallets = [];



    for (let i = 0; i < count; i++) {


        const wallet =
            HDNodeWallet.fromPhrase(

                mnemonic,

                undefined,

                `m/44'/60'/0'/0/${i}`

            );



        wallets.push({

            index: i,

            address: wallet.address

        });


    }



    return wallets;

}