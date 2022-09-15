import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser, User } from '../interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const [rows] = await this.connection.execute('SELECT * FROM users');
    return rows as User[];
  }

  public async getUserById(id: number): Promise<User> {
    const query = 'SELECT * FROM users WHERE id = ?';
    const [rows] = await this.connection.execute(query, [id]);
    const [user] = rows as User[];

    return user || null;
  }

  public async create(user: IUser): Promise<User> {
    const { name, email, password } = user;
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const [result] = await this.connection.execute<ResultSetHeader>(query, [name, email, password]);
    const { insertId } = result;
    const newUser = await this.getUserById(insertId);

    return newUser;
  }

  public async update(id: number, user: IUser): Promise<User> {
    const { name, email, password } = user;
    const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
    await this.connection.execute(query, [name, email, password, id]);
    const updatedUser = await this.getUserById(id);

    return updatedUser;
  }

  public async delete(id: number): Promise<User | null > {
    const userToDelete = await this.getUserById(id);
    if (!userToDelete) return null;

    const query = 'DELETE FROM users WHERE id = ?';
    await this.connection.execute(query, [id]);

    return userToDelete;
  }
}