import { Router } from "express";

import {
    createWithdrawal
} from "../controllers/withdrawal.controller";


import {
    validate
} from "../middleware/validate.middleware";


import {
    withdrawalSchema
} from "../validators/withdrawal.schema";


const router = Router();



/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Withdrawal transaction APIs
 */


/**
 * @swagger
 * /api/withdraw:
 *   post:
 *     summary: Broadcast ETH withdrawal
 *     tags:
 *       - Transactions
 *
 *     requestBody:
 *       required: true
 *
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *
 *             required:
 *               - from
 *               - destination
 *               - amount
 *
 *             properties:
 *
 *               from:
 *                 type: string
 *                 example: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
 *
 *               destination:
 *                 type: string
 *                 example: "0x0000000000000000000000000000000000000001"
 *
 *               amount:
 *                 type: string
 *                 example: "0.001"
 *
 *
 *     responses:
 *
 *       200:
 *         description: Transaction broadcast successfully
 *
 */


router.post(

    "/withdraw",

    validate(withdrawalSchema),

    createWithdrawal

);



export default router;