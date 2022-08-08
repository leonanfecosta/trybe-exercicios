const db = require('./connection');

const userModel = {
  checkIfUserExists: async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const [user] = await db.query(sql, [id]);
    if(!user[0]) {
      throw new Error('User not found');
    }
  },

  create: async (user) => {
    const {firstName, lastName, email, password} = user;
    const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(sql, [firstName, lastName, email, password]);
    return { id: result.insertId, ...user };
  },

  findAll : async () => {
    const sql = 'SELECT * FROM users';
    const [users] = await db.query(sql);
    return users;
  },

  findById : async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const [user] = await db.query(sql, [id]);
    return user[0];
  },

  update : async (id, user) => {
    const {firstName, lastName, email, password} = user;
    const sql = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';
    await db.query(sql, [firstName, lastName, email, password, id]);
  },

  delete : async (id) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    await db.query(sql, [id]);
  },
};

module.exports = userModel;