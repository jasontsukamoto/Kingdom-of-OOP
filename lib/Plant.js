import Eukaryota from './Eukaryota.js'
export default class Plant extends Eukaryota {
  constructor(name) {
    //name, uniCellular, asexual, mobile, heterotroph
    super(name, false, true, false, false)
  }
}