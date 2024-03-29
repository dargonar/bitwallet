var bs58      = require('bs58');
var ripemd160 = require('ripemd160');
var crypto    = require('crypto');

function is_valid_address(addy) {
  try {
    if(addy.indexOf('BTSX') != 0) return false;
    var data = bs58.decode(addy.substr(4))
    if(data.length != 24) return false;
    var c1 = data.slice(20);
    var c2 = ripemd160(data.slice(0,20)).slice(0,4);
    return (c1[0] == c2[0] && c1[1] == c2[1] && c1[2] == c2[2] && c1[3] == c2[3]); 
  } catch(err) {
    console.log(err);
  }
  return false;
}

function encode_pubkey(pub_key) {
  var rip = ripemd160(pub_key);
  var tmp = new Buffer( pub_key.length + 4 );
  pub_key.copy(tmp);
  rip.copy(tmp, pub_key.length, 0, 4);
  return 'BTSX'+bs58.encode(tmp);
}

function pub_to_address(pub_key) {
  var r = ripemd160(crypto.createHash('sha512').update(pub_key).digest());
  var c = ripemd160(r);
  var tmp = new Buffer(r.length+4);
  r.copy(tmp);
  c.copy(tmp, r.length, 0, 4);
  return 'BTSX'+bs58.encode(tmp);
}

module.exports = {
  is_valid_address: is_valid_address,
  encode_pubkey   : encode_pubkey,
  pub_to_address  : pub_to_address
}
