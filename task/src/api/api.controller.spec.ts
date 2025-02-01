import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';

describe('ApiController', () => {
  let controller: ApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
    }).compile();

    controller = module.get<ApiController>(ApiController);
  });

  it('should GET the list of heros', () => {
    const res = controller.getItems(); // retrieve the list of heroes
    expect(res).toBeInstanceOf(Array); //  verify that the return value is an array
    expect(res.length).toBeGreaterThan(0); // check if the array is not empty
  });
  
  it('should POST a new hero', () => {
    const newHero = { name: 'Alex', superpower: 'Fast', score: 5 };
    const res = controller.createItem(newHero);  // create a new object 
  
    expect(res).toHaveProperty('name', 'Alex'); // check if the response (res) has a property 'name' with a given value 
    expect(res).toHaveProperty('superpower', 'Fast');
    expect(res).toHaveProperty('score', 5);
  
});
})