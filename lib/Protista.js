import Eukaryota from './Eukaryota'
export default class Protista extends Eukaryota {
  constructor(name, uniCellular, mobile, heterotroph) {
  //name, uniCellular, asexual, mobile, heterotroph
  super(name, uniCellular, true, mobile, heterotroph)
  }
}