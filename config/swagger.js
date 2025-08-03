const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Subscription & Membership API",
      version: "1.0.0",
      description:
        "API documentation for Subscription and Membership Management System",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "64f12345abc123456789abcd",
            },
            name: {
              type: "string",
              example: "Omar Magdy",
            },
            email: {
              type: "string",
              example: "omar@example.com",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2023-08-02T12:00:00.000Z",
            },
          },
        },
        Plan: {
          type: "object",
          required: ["name", "price", "duration"],
          properties: {
            _id: {
              type: "string",
              example: "64fae99d8c8f1f90fddc1102",
            },
            name: {
              type: "string",
              example: "Premium Plan",
            },
            price: {
              type: "number",
              example: 99,
            },
            duration: {
              type: "number",
              example: 30,
              description: "Duration in days",
            },
            description: {
              type: "string",
              example: "Full access for 1 month",
            },
            isActive: {
              type: "boolean",
              example: true,
            },
          },
        },
        Subscription: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "64fb088d7a9b900ddcdf1270",
            },
            userId: {
              type: "string",
              example: "64f12345abc123456789abcd",
            },
            planId: {
              type: "string",
              example: "64fae99d8c8f1f90fddc1102",
            },
            status: {
              type: "string",
              enum: ["active", "cancelled"],
              example: "active",
            },
            startDate: {
              type: "string",
              format: "date-time",
              example: "2023-08-01T00:00:00.000Z",
            },
            endDate: {
              type: "string",
              format: "date-time",
              example: "2023-08-31T00:00:00.000Z",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2023-08-01T10:00:00.000Z",
            },
          },
        },
      },
    },
  },
  apis: ["./swagger/*.js"], // 📂 path to your route doc files (you can customize this)
};

module.exports = swaggerOptions;
