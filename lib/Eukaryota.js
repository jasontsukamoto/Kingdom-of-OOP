import LivingThing from './LivingThing';
export default class Eukaryota extends LivingThing {
  constructor(name, uniCellular, asexual, mobile, heterotroph) {
    //name, uniCellular, trueNucleus, anaerobic, asexual, mobile
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    if (this._heterotroph) {
      return true;
    } else {
      return false;
    }
  }

  set heterotroph(heterotroph) {
    this._heterotroph = heterotroph;
  }

  get autotroph() {
    if (this._heterotroph) {
      return false;
    } else {
      return true;
    }
  }

  set autotroph(autotroph) {
    if (autotroph) {
      this._heterotroph = false;
    } else {
      this._heterotroph = true;
    }
  }
}