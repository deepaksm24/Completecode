const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'root',
  server: 'CSGBTPLT647\\MSSQLSERVER01',
  database: 'PLC_Automation',
  options: {
    encrypt: false,
  },
};

async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Connected to SQL Server');
  } catch (err) {
    console.error('Error connecting to SQL Server:', err);
    throw err; // Rethrow the error to handle it in the calling code
  }
}

async function findUserByEmail(email) {
  try {
    await connectToDatabase();

    // Modify the SQL query based on your actual Users table schema
    const result = await sql.query`SELECT * FROM Users WHERE email = ${email}`;

    if (result.recordset.length > 0) {
      const user = result.recordset[0];
      console.log('User found:', user);
      return user;
    } else {
      console.log('User not found');
      return null;
    }
  } catch (err) {
    console.error('Error finding user by email:', err);
    throw err; // Rethrow the error to handle it in the calling code
  } finally {
    await sql.close();
    console.log('Disconnected from SQL Server');
  }
}

module.exports = {
  connectToDatabase,
  findUserByEmail,
};
