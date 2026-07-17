import { Router } from "express";

import {
    getWallets,
    generateWalletsController
} from "../controllers/wallet.controller";

import {
    validate
} from "../middleware/validate.middleware";

import {
    walletGenerateSchema
} from "../validators/wallet.schema";


const router = Router();



/**
 * @swagger
 * tags:
 *   name: Wallet
 *   description: Wallet management APIs
 */


/**
 * @swagger
 * /api/wallets:
 *   get:
 *     summary: Get all generated wallets with current balances
 *     tags:
 *       - Wallet
 *     responses:
 *       200:
 *         description: Wallet list with balances
 */
router.get(
    "/wallets",
    getWallets
);





/**
 * @swagger
 * /api/wallets/generate:
 *   post:
 *     summary: Generate deterministic HD wallets
 *     tags:
 *       - Wallet
 *
 *     requestBody:
 *       required: true
 *
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - count
 *
 *             properties:
 *               count:
 *                 type: integer
 *                 example: 5
 *                 description: Number of wallets to generate (1-20)
 *
 *
 *     responses:
 *       200:
 *         description: Successfully generated wallets
 *
 *       400:
 *         description: Validation error
 *
 */
router.post(

    "/wallets/generate",

    validate(walletGenerateSchema),

    generateWalletsController

);



export default router;