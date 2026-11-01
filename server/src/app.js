import express from 'express';
import cors from 'cors';
import { corsOptions } from './config/cors.js';
import { configureSecurityHeaders, apiLimiter } from './config/security.js';
import { requestLogger } from './middleware/request-logger.middleware.js';
import { notFoundHandler } from './middleware/not-found.middleware.js';
import { errorHandler } from './middleware/error.middleware.js';
import apiRoutes from './routes/index.routes.js';

const app = express();

// 1. Security Headers & Rate Limiting
app.use(configureSecurityHeaders());
app.use('/api', apiLimiter);

// 2. CORS & Body Parsing
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 3. Request Logging
app.use(requestLogger);

// 4. API Routes Mounting
app.use('/api', apiRoutes);

// 5. 404 Handler for undefined routes
app.use(notFoundHandler);

// 6. Centralized Error Handler
app.use(errorHandler);

export default app;
