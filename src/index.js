import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';
import { TEMP_UPLOAD_DIR } from './constants/index.js';
// import { TEMP_DIR } from './constants/index.js';
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';

async function Start() {
  await initMongoConnection();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  setupServer();
}

Start();
