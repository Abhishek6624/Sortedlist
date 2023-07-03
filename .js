const express = require('express');
const app = express();

class Fruit {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

// In-memory list of fruit objects
const fruits = [
  new Fruit(1, 'Apple', 'Red'),
  new Fruit(2, 'Banana', 'Yellow'),
  new Fruit(3, 'Orange', 'Orange'),
  new Fruit(4, 'Grapes', 'Purple'),
  new Fruit(5, 'Strawberry', 'Red')
];

// Sort fruits based on color
const sortedFruits = fruits.sort((a, b) => a.color.localeCompare(b.color));

// API endpoint to get sorted fruits by color
app.get('/fruits', (req, res) => {
  res.json(sortedFruits);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
