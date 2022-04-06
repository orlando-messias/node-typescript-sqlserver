import sql from 'mssql';

const config = {
  user: 'usrKestraa',
  password: '78K&57$tr@Sv41mx',
  server: 'SRVDBSQL',
  database: 'DBKestraa',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  }
};

export async function getConnection() {
  try {
    const pool = await sql.connect(config);
    return pool;
  } catch (error) {
    console.log(error);
  }
}

export { sql };
