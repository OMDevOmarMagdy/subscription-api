const response = (res, statusCode, message, data, error) => {
  if (statusCode >= 400 && error && error.message) {
    error = error.message;
  }
  return res.status(statusCode).json({
    message,
    data: data ?? undefined,
    error: error ?? undefined,
  });
};

module.exports = response;
