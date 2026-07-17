import { z } from "zod";


export const withdrawalSchema = z.object({

    from: z
        .string()
        .regex(
            /^0x[a-fA-F0-9]{40}$/,
            "Invalid sender Ethereum address"
        ),


    destination: z
        .string()
        .regex(
            /^0x[a-fA-F0-9]{40}$/,
            "Invalid destination Ethereum address"
        ),


    amount: z
        .string()
        .refine(
            (value)=> Number(value) > 0,
            {
                message:
                "Amount must be greater than zero"
            }
        )

});