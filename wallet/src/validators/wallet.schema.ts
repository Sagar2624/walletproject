import {z} from "zod";


export const walletGenerateSchema =
z.object({

count:

z.number()
.min(1)
.max(20)

});