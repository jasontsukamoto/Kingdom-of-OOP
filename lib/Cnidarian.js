import Animal from './Animal.js'
export default class Cnidarian extends Animal {
  constructor(name) {
    //name, symmetry
    super(name, 'radial')
  }
}