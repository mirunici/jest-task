import { Controller, Get, Post, Body, BadRequestException} from '@nestjs/common';

@Controller('superheros')
export class ApiController {

// simple database - array
private heros = [
    { name: "Miruna", superpower: "Smart", score: 10 },
    { name: "Anca", superpower: "Speed", score: 8}
  ]; 

@Get()
getItems() {
  return this.heros.sort((a, b) => b.score - a.score);; // sort of the array in descending order
}

@Post()
createItem(@Body() body: { name: string; superpower: string ; score: number}) {
  
  if (body.score < 1 || body.score > 10) { // ensure that the score is within range
    console.log('Score out of range');
    throw new BadRequestException('Score out of range'); // throw an error if the score is out of range
  }

  // create a new object (hero)
  const newHero = { 
    name: body.name,
    superpower: body.superpower,
    score: body.score
  };

  this.heros.push(newHero); // add the new object (hero) in the array

  console.log('New hero added:', newHero);

  return newHero;
}
}