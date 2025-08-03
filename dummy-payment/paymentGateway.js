exports.processPayment = async (amount) => {
  return {
    success: true,
    transactionId: Math.random().toString(36).substring(2),
    amount,
    message: "Payment successful",
  };
};
