export default class LivingThing {

  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name() {
    return this._name;
  }

  set name( name ) {
    if ( typeof (name === 'string')) {
      this._name = name;
    } else {
      throw new TypeError('LivingThing.name must be a string')
    }
  }

  get uniCellular() {
    if (this._uniCellular) {
      return true;
    } else {
      return false;
    }
  }

  set uniCellular(Boolean) {
    this._uniCellular = Boolean;
  }

  get multiCellular() {
    if(this._uniCellular) {
      return false;
    } else {
      return true;
    }
  }

  set multiCellular(_uniCellular) {
    if(Boolean) {
      this._uniCellular = true;
    } else {
      this._uniCellular = false;
    }
  }

  get eukaryote() {
    if(this._trueNucleus) {
      return true;
    } else {
      return false;
    }
  }

  set eukaryote(Boolean) {
    this._trueNucleus = Boolean;
  }

  get prokaryote() {
    if(this._trueNucleus) {
      return false;
    } else {
      return true;
    }
  }

  set prokaryote(Boolean) {
    this._trueNucleus = !Boolean;
  }

  get anaerobic() {
    if(this._anaerobic) {
      return true;
    } else {
      return false;
    }
  }

  set anaerobic(Boolean) {
    this._anaerobic = Boolean;
  }

  get aerobic() {
    if(this._anaerobic) {
      return false;
    } else {
      return true;
    }
  }

  set aerobic(aerobic) {
    if(aerobic) {
      this._anaerobic = false;
    } else {
      this._anaerobic = true;
    }
  }

  get asexual() {
    if(this._asexual) {
      return true;
    } else {
      return false;
    }
  }

  set asexual(Boolean) {
    this._asexual = Boolean;
  }

  get sexual() {
    if(this._asexual) {
      return false;
    } else {
      return true;
    }
  }
  set sexual(sexual) {
    if(sexual) {
      this._asexual = false;
    } else {
      this.asexual = true;
    }
  }

  get mobile() {
    if(this._mobile) {
      return true;
    } else {
      return false;
    }
  }

  set mobile(mobile) {
    this._mobile = mobile;
  }

  get immobile() {
    if(this._mobile) {
      return false;
    } else {
      return true;
    }
  }

  set immobile(immobile) {
    if(immobile) {
      this._mobile = false;
    } else {
      this._mobile = true;
    }
  }
}



