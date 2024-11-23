const request = require('supertest');
const mongoose = require('mongoose');
const { app } = require('../server'); // Assuming `server.js` exports your app
const User = require('../models/userModel');

describe('User Controller Tests', () => {
  beforeAll(async () => {
    // Connect to the real MongoDB database for testing
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Disconnect from MongoDB
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    // Clear the user collection before each test
    await User.deleteMany();
  });

  describe('POST /api/user/register', () => {
    it('should register a user successfully', async () => {
      const newUser = {
        email: 'test@example.com',
        password: 'password123',
        location: 'Test City',
        preference: 'pref1',
        availability: 'availability1',
        skills: 'JavaScript',
      };

      const res = await request(app).post('/api/user/register').send(newUser);

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('email', newUser.email);
      expect(res.body).toHaveProperty('token');
    });

    it('should not register a user with missing fields', async () => {
      const incompleteUser = {
        email: 'test@example.com',
        password: '',
        location: 'Test City',
        preference: 'pref1',
        availability: 'availability1',
        skills: 'JavaScript',
      };

      const res = await request(app).post('/api/user/register').send(incompleteUser);

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error', 'All fields must be filled');
    });

    it('should not register a user with an existing email', async () => {
      const user = {
        email: 'test@example.com',
        password: 'password123',
        location: 'Test City',
        preference: 'pref1',
        availability: 'availability1',
        skills: 'JavaScript',
      };

      // Register the first user
      await request(app).post('/api/user/register').send(user);

      // Attempt to register again with the same email
      const res = await request(app).post('/api/user/register').send(user);

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error', 'Email already in use');
    });
  });

  describe('POST /api/user/login', () => {
    it('should log in a user successfully', async () => {
      const user = {
        email: 'test@example.com',
        password: 'password123',
        location: 'Test City',
        preference: 'pref1',
        availability: 'availability1',
        skills: 'JavaScript',
      };

      // Register the user
      await request(app).post('/api/user/register').send(user);

      // Log in with the same credentials
      const res = await request(app).post('/api/user/login').send({
        email: user.email,
        password: user.password,
      });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('email', user.email);
      expect(res.body).toHaveProperty('token');
    });

    it('should not log in with incorrect email', async () => {
      const res = await request(app).post('/api/user/login').send({
        email: 'nonexistent@example.com',
        password: 'password123',
      });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error', 'Incorrect email');
    });

    it('should not log in with incorrect password', async () => {
      const user = {
        email: 'test@example.com',
        password: 'password123',
        location: 'Test City',
        preference: 'pref1',
        availability: 'availability1',
        skills: 'JavaScript',
      };

      // Register the user
      await request(app).post('/api/user/register').send(user);

      // Log in with incorrect password
      const res = await request(app).post('/api/user/login').send({
        email: user.email,
        password: 'wrongpassword',
      });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error', 'Incorrect password');
    });
  });
});
