class Poin{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  // static is class method
  static distance(a, b){
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy)
  }
}


const p1 = new Poin(5, 5)
const p2 = new Poin(10, 10)

console.log(Poin.distance(p1, p2))