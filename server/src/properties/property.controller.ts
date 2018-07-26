import * as express from 'express';

import { PropertyService } from './property.service';

const propertyService = new PropertyService();

const controller = express.Router();


controller.get('/properties/:id', async (req, res) => {
  console.log(req.params.id);
  res.send(req.params.id);
});

controller.get('/properties', async (req, res) => {
  console.log('properties');
  res.send('properties');
});

controller.post('/', async (req, res) => {
  console.log("/");
  const query = req.body;
  const properties = await propertyService.listProperties(query, req.query.offset, req.query.limit);
  res.send(properties);
});


export { controller as PropertyController };
