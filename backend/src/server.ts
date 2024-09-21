import app from './app';
import { config } from './config';

const startServer = () => {
  try {
    app.listen(config.port, () => {
      console.log(`Starting server at http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();
