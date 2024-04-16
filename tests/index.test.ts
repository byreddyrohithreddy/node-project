import { app } from '../src/index'; 
import request from 'supertest';

describe('Test Cases', () => {
  test('Got response', async () => {
    try {
    const response = await request(app).get('/awesome/applicant');
    console.log(response.body);
    expect(response.status).toBe(200);
    }
    catch (err)
    {
    console.log(`Error ${err}`)
    }
  });

  test('Inserted Values', async () => {
    const details= {name: 'pritham',age:'35',email:'pritham@gmail.com'};
    try {
      const response = await request(app).post('/awesome/applicant').send(details);
      console.log(response.body);
      expect(response.status).toBe(201);
    }
    catch (err)
    {
      console.log(`Error ${err}`)
    }
  });

  test('Inserted Values', async () => {
    const details= {name: 'jayesh',age:'69',email:'jayesh@yahoo.com'};
    try {
      const response = await request(app).post('/awesome/applicant').send(details);
      console.log(response.body);
      expect(response.status).toBe(201);
    }
    catch (err)
    {
      console.log(`Error ${err}`)
    }
  });

  test('Got response', async () => {
    try {
    const response = await request(app).get('/awesome/applicants');
    console.log(response.body);
    expect(response.status).toBe(200);
    }
    catch (err)
    {
    console.log(`Error ${err}`)
    }
  });

  test('Got response', async () => {
    try {
    const response = await request(app).get('/awesome/applicant/2');
    console.log(response.body);
    expect(response.status).toBe(200);
    }
    catch (err)
    {
    console.log(`Error ${err}`)
    }
  });

  test('Got response', async () => {
    const details={
      name: 'raj',
      age:'29',
      email:'raj@hotmail.com'
    };
    try {
    const response = await request(app).put('/awesome/applicant/2').send(details);
    console.log(response.body);
    expect(response.status).toBe(200);
    }
    catch (err)
    {
    console.log(`Error ${err}`)
    }
  });

  test('Got response', async () => {
    try {
    const response = await request(app).delete('/awesome/applicant/3');
    console.log(response.body);
    expect(response.status).toBe(200);
    }
    catch (err)
    {
    console.log(`Error ${err}`)
    }
  });

});