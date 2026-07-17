import dotenv from "dotenv";

dotenv.config();

export const ENV = {
    PORT: Number(process.env.PORT || 3000),

    RPC_URL: process.env.RPC_URL!,

    MNEMONIC: process.env.MNEMONIC!,

    WALLET_COUNT:
        Number(process.env.WALLET_COUNT || 5)
};