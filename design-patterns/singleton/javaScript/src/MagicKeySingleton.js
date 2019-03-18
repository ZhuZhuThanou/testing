
class MagicKey {
  constructor() {
    let key = Math.round(Math.random() * 1000);
    console.log(key);
    this.getKey = function() { return key; }
  }
}

const MagicKeySingleton  = new MagicKey();
Object.freeze(MagicKeySingleton);
module.exports = { getInstance: () => { return MagicKeySingleton }};

// not singleton 
// module.exports = { getInstance: () => {
//     return new MagicKey();
//   }};