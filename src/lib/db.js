// db.js

import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});
export default async function excuteQuery({ query, values }) {
  try {
    console.log(process.env.MYSQL_HOST + " " + process.env.MYSQL_USER + " " + process.env.MYSQL_PASSWORD + " " +  process.env.MYSQL_DATABASE)
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}