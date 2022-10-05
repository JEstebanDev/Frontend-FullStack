class Building {
  color;
  //private
  #size;

  constructor(color, size) {
    this.#size = size;
    this.color = color;
    this.defaultLocation = "South America";
  }
  getSize() {
    return this.#size;
  }
}
class House extends Building {
  backyardSize = "small";
  constructor(color, size, backyardSize) {
    super(color, size);
    this.backyardSize = backyardSize;
  }
}

const house1 = new House("red", "small", "big");
console.log(house1.color);
console.log(house1.getSize());
console.log(house1);
console.log(house1.defaultLocation);
