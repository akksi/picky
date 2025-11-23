import pool from '../config/database';
import fs from 'fs';
import path from 'path';

export const setupDatabase = async (): Promise<void> => {
  try {
    console.log('📦 Setting up database...');

    const schemaPath = path.join(__dirname, '../config/schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf-8');

    await pool.query(schema);

    console.log('✅ Database setup complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  }
};

// Run if called directly
if (require.main === module) {
  setupDatabase();
}

