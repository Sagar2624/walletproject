import { JsonRpcProvider } from "ethers";
import { ENV } from "./env";


export const provider =
    new JsonRpcProvider(
        ENV.RPC_URL
    );


provider.getNetwork()
.then(network=>{

    console.log(
        "Connected:",
        network.name,
        network.chainId.toString()
    );

});