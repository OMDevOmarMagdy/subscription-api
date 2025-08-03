/**
 * @swagger
 * tags:
 *   name: Plan
 *   description: API for managing subscription plans
 */

/**
 * @swagger
 * /api/v1/plans:
 *   post:
 *     summary: Create a new subscription plan
 *     tags: [Plan]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Plan'
 *     responses:
 *       201:
 *         description: Plan created successfully
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/v1/plans:
 *   get:
 *     summary: Get all subscription plans
 *     tags: [Plan]
 *     responses:
 *       200:
 *         description: A list of all plans
 */

/**
 * @swagger
 * /api/v1/plans/{id}:
 *   patch:
 *     summary: Update an existing plan
 *     tags: [Plan]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the plan to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Plan Name
 *               price:
 *                 type: number
 *                 example: 150
 *               duration:
 *                 type: number
 *                 example: 60
 *               description:
 *                 type: string
 *                 example: Updated description
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Plan updated successfully
 *       404:
 *         description: Plan not found
 */

/**
 * @swagger
 * /api/v1/plans/{id}:
 *   delete:
 *     summary: Delete (cancel) a subscription plan
 *     tags: [Plan]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the plan to delete
 *     responses:
 *       200:
 *         description: Plan deleted successfully
 *       404:
 *         description: Plan not found
 */
