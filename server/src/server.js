import app from './app.js';
import { env } from './config/env.js';
import { pool } from './config/database.js';
import logger from './utils/logger.js';

const server = app.listen(env.PORT, () => {
  logger.info(`=======================================================`);
  logger.info(`  EduInsight AI Backend API Server Running Successfully `);
  logger.info(`  Environment : ${env.NODE_ENV}`);
  logger.info(`  Port        : ${env.PORT}`);
  logger.info(`  Health Check: http://localhost:${env.PORT}/api/health`);
  logger.info(`=======================================================`);
});

// Graceful Shutdown Handling
const handleShutdown = async (signal) => {
  logger.info(`Received ${signal}. Gracefully shutting down HTTP server and PostgreSQL pool...`);
  server.close(async () => {
    logger.info('HTTP server closed.');
    try {
      await pool.end();
      logger.info('PostgreSQL connection pool drained.');
      process.exit(0);
    } catch (err) {
      logger.error('Error closing database pool:', err.message);
      process.exit(1);
    }
  });

  // Force shutdown after timeout if pending connections hang
  setTimeout(() => {
    logger.error('Forcefully terminating process due to shutdown timeout.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));

export default server;
