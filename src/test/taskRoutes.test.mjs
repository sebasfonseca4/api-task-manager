import supertest from "supertest";
import { expect } from "chai";

const requester = supertest("http://127.0.0.1:3000");

describe('Task API', () => {
    describe('GET /tasks', () => {
        it('Mostrar todas las tareas', async () => {
            const res = await requester.get('/tasks');
            expect(res.status).to.equal(200);
        });
    });
    describe('POST /tasks', () => {
        it('debería agregar una tarea', async () => {
          const title = 'Prueba 10'
          const description = 'Prueba de texto'; 
          const res = await requester.post('/tasks').send({ title, description });
          expect(res.status).to.equal(201);
        });
    
        it('debería devolver un mensaje de error si la tarea no se puede agregar', async () => {
          const title = 'Prueba 10'
          const description = ''; 
          const res = await requester.post('/tasks').send({ title, description });
          expect(res.status).to.equal(400);
        });
    });
});
