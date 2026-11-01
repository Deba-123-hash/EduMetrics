/**
 * Seed Module: Demo Users with secure bcrypt password hashes
 * Password for demo accounts: Admin@123, Faculty@123, Student@123
 */

export async function seed(client, bcrypt) {
  const adminHash = await bcrypt.hash('Admin@123', 10);
  const facultyHash = await bcrypt.hash('Faculty@123', 10);
  const studentHash = await bcrypt.hash('Student@123', 10);

  const users = [
    {
      id: '10000000-0000-0000-0000-000000000001',
      role_id: 'a0000000-0000-0000-0000-000000000001', // Admin
      full_name: 'Dr. Ramesh Kumar',
      email: 'admin@eduinsight.ai',
      password_hash: adminHash,
      phone: '+919876543210'
    },
    {
      id: '10000000-0000-0000-0000-000000000002',
      role_id: 'a0000000-0000-0000-0000-000000000002', // Faculty
      full_name: 'Prof. Ananya Gupta',
      email: 'faculty@eduinsight.ai',
      password_hash: facultyHash,
      phone: '+919876543211'
    },
    {
      id: '10000000-0000-0000-0000-000000000003',
      role_id: 'a0000000-0000-0000-0000-000000000003', // Student
      full_name: 'Rahul Verma',
      email: 'student@eduinsight.ai',
      password_hash: studentHash,
      phone: '+919876543212'
    }
  ];

  for (const u of users) {
    await client.query(
      `INSERT INTO users (id, role_id, full_name, email, password_hash, phone, is_active)
       VALUES ($1, $2, $3, $4, $5, $6, true)
       ON CONFLICT (email) DO NOTHING;`,
      [u.id, u.role_id, u.full_name, u.email, u.password_hash, u.phone]
    );
  }

  // Seed corresponding Faculty record
  await client.query(`
    INSERT INTO faculty (id, user_id, department_id, employee_id, designation)
    VALUES (
      '20000000-0000-0000-0000-000000000001',
      '10000000-0000-0000-0000-000000000002',
      'c0000000-0000-0000-0000-000000000001',
      'EMP-MCA-001',
      'Associate Professor'
    ) ON CONFLICT (employee_id) DO NOTHING;
  `);
}

export default { seed };
