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
    throw err;
  }
}

async function findUserByEmail(email) {
  try {
    await connectToDatabase();

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
    throw err;
  } finally {
    await sql.close();
    console.log('Disconnected from SQL Server');
  }
}
async function findUserByuserId(userId) {
  try {
    await connectToDatabase();

    const result = await sql.query`SELECT * FROM Users WHERE userId = ${userId}`;

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
    throw err;
  } finally {
    await sql.close();
    console.log('Disconnected from SQL Server');
  }
}
async function addUser(newUser) {
  try {
    await connectToDatabase();

    // Insert a new user into the Users table
    const result = await sql.query`
      INSERT INTO Users (email, password, name)
      VALUES (${newUser.email}, ${newUser.password}, ${newUser.name})
    `;

    if (result.rowsAffected > 0) {
      console.log('User added successfully');
      return true;
    } else {
      console.log('Failed to add user');
      return false;
    }
  } catch (err) {
    console.error('Error adding user:', err);
    throw err;
  } finally {
    await sql.close();
    console.log('Disconnected from SQL Server');
  }
}

module.exports = {
  connectToDatabase,
  findUserByEmail,
  addUser,
  findUserByuserId
};
