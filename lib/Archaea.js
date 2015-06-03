import LivingThing from './LivingThing.js'
export default class Archaea extends LivingThing {
  constructor(name) {
    //name, uniCellular, trueNucleus, anaerobic, asexual, mobile
    super(name, true, false, true, true, false);
  }
}