from Flask import Flask, jsonify

app = Flask(__name__)

class Fruit:
    def __init__(self, id, name, color):
        self.id = id
        self.name = name
        self.color = color

# In-memory list of fruit objects
fruits = [
    Fruit(1, 'Apple', 'Red'),
    Fruit(2, 'Banana', 'Yellow'),
    Fruit(3, 'Orange', 'Orange'),
    Fruit(4, 'Grapes', 'Purple'),
    Fruit(5, 'Strawberry', 'Red')
]

# Sort fruits based on color
sorted_fruits = sorted(fruits, key=lambda x: x.color)

# API endpoint to get sorted fruits by color
@app.route('/fruits', methods=['GET'])
def get_fruits():
    return jsonify(sorted_fruits)

# Start the server
if __name__ == '__main__':
    app.run()
