
// Custom Error Class for clean error throwing
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    Error.captureStackTrace(this, this.constructor);
  }
}

// Centralized Error Response Function
const handleError = (res, error, defaultMessage = 'Something went wrong') => {
  const statusCode = error.statusCode || 500;
  const message = error.message || defaultMessage;

  return res.status(statusCode).send({
    result: 'fail',
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  });
};

module.exports = { AppError, handleError };
