import mysql from 'mysql2/promise'

export default async function handler (req, res) {

  const connection = await mysql.createConnection({
    host: 'localhost',
    // port: '3306',
    user: 'root',
    password: 'password',
    database: 'test'
});

//   const connection = await mysql.createConnection({
//     host: 'sql7.freemysqlhosting.net',
//     // port: '3306',
//     user: 'sql7604663',
//     password: 'WRlXJErGp7',
//     database: 'sql7604663'
// });

// const connection = await mysql.createConnection({
//   host: 'sql.freedb.tech',
//   // port: '3306',
//   user: 'freedb_dimauser',
//   password: 'w$bE8fwE*#W5Wdg',
//   database: 'freedb_dima999'
// });

const x = 'is not null'


    const [data] = await connection.execute(`SELECT * FROM persons WHERE Names ${x}`)


    res.status(200).json({data})
  }
