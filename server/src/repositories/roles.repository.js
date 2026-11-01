import { query } from '../config/database.js';

export const rolesRepository = {
  findAll: async () => {
    const res = await query('SELECT * FROM roles ORDER BY name ASC;');
    return res.rows;
  }
};

export default rolesRepository;
