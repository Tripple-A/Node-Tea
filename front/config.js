const env = process.env;

export const logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

export default {
  port: env.PORT || 8080,
  nodeEnv: env.NODE_ENV || 'development'
};