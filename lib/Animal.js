import Eukaryota from './Eukaryota.js';
export default class Animal extends Eukaryota {
  constructor(name, symmetry) {
    // name, uniCellular, asexual, mobile, heterotroph
    super(name, false, false, true, true);
    this._symmetry = symmetry;
  }

    get symmetry() {
      return this._symmetry;
    }

    set symmetry(symmetry) {
      this._symmetry = symmetry;
    }
}