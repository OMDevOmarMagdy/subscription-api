/**
 * @swagger
 * tags:
 *   name: Subscription
 *   description: API for user subscriptions and membership
 */

/**
 * @swagger
 * /api/v1/subscriptions/subscribe:
 *   post:
 *     summary: Subscribe to a plan using dummy payment gateway
 *     tags: [Subscription]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - planId
 *             properties:
 *               planId:
 *                 type: string
 *                 example: 64fae99d8c8f1f90fddc1102
 *     responses:
 *       201:
 *         description: Subscription created successfully
 *       404:
 *         description: Plan not found
 *       400:
 *         description: Already subscribed to this plan
 */

/**
 * @swagger
 * /api/v1/subscriptions/{id}/cancel:
 *   patch:
 *     summary: Cancel a user's subscription
 *     tags: [Subscription]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Subscription ID to cancel
 *         schema:
 *           type: string
 *           example: 64fb088d7a9b900ddcdf1270
 *     responses:
 *       200:
 *         description: Subscription cancelled successfully
 *       404:
 *         description: Subscription not found
 */

/**
 * @swagger
 * /api/v1/subscriptions:
 *   get:
 *     summary: Get all subscriptions (admin or user's own)
 *     tags: [Subscription]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of subscriptions
 */
