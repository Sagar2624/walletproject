import {provider} from "../config/provider";
import {formatEther} from "ethers";


export async function attachBalance(
wallets:any[]
){


return Promise.all(

wallets.map(async(wallet)=>{


const balance =
await provider.getBalance(
wallet.address
);



return {

...wallet,

balance:
formatEther(balance),

asset:"ETH",

network:"sepolia"


};


})

);


}