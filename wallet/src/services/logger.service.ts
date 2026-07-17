import fs from "fs";
import path from "path";


const filePath = path.join(
    __dirname,
    "../../data/balance-logs.json"
);



interface BalanceLog {

    address: string;

    type: "INFLOW" | "OUTFLOW";

    amount: string;

    txHash?: string;

    timestamp: string;

}



function readLogs(): BalanceLog[] {


    if (!fs.existsSync(filePath)) {

        return [];

    }


    return JSON.parse(
        fs.readFileSync(
            filePath,
            "utf-8"
        )
    );

}



function saveLogs(logs: BalanceLog[]) {


    fs.writeFileSync(

        filePath,

        JSON.stringify(
            logs,
            null,
            2
        )

    );

}



/*
    Used by withdrawal service

    Example:
    Sender -> OUTFLOW
    Receiver -> INFLOW
*/

export function logBalanceChange(

    address: string,

    amount: string,

    type: "INFLOW" | "OUTFLOW",

    txHash: string

) {


    const logs =
        readLogs();



    logs.push({

        address,

        type,

        amount,

        txHash,

        timestamp:
            new Date().toISOString()

    });



    saveLogs(logs);

}



/*
    Used by balance tracking service

    Supports string balances
*/

export function createBalanceLog(data: {


    address: string;


    oldBalance: string;


    newBalance: string;


    type: "INFLOW" | "OUTFLOW";


}) {


    const logs =
        readLogs();



    const oldValue =
        Number(data.oldBalance);



    const newValue =
        Number(data.newBalance);



    logs.push({

        address:data.address,

        type:data.type,


        amount:
            Math.abs(
                newValue -
                oldValue
            ).toString(),


        timestamp:
            new Date().toISOString()

    });



    saveLogs(logs);

}