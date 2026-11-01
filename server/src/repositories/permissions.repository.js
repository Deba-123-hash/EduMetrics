import { query } from '../config/database.js';

export const permissionsRepository = {
  findAll: async () => {
    const res = await query('SELECT * FROM permissions ORDER BY name ASC;');
    return res.rows;
  }
};

export default permissionsRepository;
