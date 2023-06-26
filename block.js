
//1. In block.js Modify the validate() function 

const SHA256 = require('crypto-js/sha256');

class Block {
    //...

    validate() {
        let self = this;
        return new Promise((resolve, reject) => {
            let originalHash = self.hash;
            self.hash = null;
            let newHash = SHA256(JSON.stringify(self)).toString();
            self.hash = originalHash;
            if (originalHash === newHash) resolve(true);
            else resolve(false);
        });
    }

    //...
}

const hex2ascii = require('hex2ascii');

class Block {
    //...

    getBData() {
        let self = this;
        return new Promise((resolve, reject) => {
            if (self.height === 0) reject(new Error("Genesis block"));
            let decodedData = hex2ascii(self.body);
            resolve(JSON.parse(decodedData));
        });
    }

    //...
}


