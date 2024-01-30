const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'root',
  server: 'CSGBTPLT647\\MSSQLSERVER01',  // replace with your SQL Server hostname or IP
  database: 'PLC_Automation',
  options: {
    encrypt: false, // set to true if you're on Windows Azure
  },
};

async function connectToDatabase() {
  try {
    // Connect to SQL Server
    await sql.connect(config);
    console.log('Connected to SQL Server');

    // Your database logic goes here...

  } catch (err) {
    console.error('Error connecting to SQL Server:', err);
  } finally {
    // Close the SQL Server connection
    await sql.close();
    console.log('Disconnected from SQL Server');
  }
}

connectToDatabase();
