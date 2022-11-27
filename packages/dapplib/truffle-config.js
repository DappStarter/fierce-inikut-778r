require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan regret rifle coin install pave army gather'; 
let testAccounts = [
"0x336b2752d8a058744d363f8d1a0c32e4a99350346e2d8d0d57cb1d452a8a7d8b",
"0x216a8f450360c88484a8370aabddf5991f5053dc3e543dca52dfeedc6446a7d7",
"0x818c4299649f215b7c6b94dff947fc40392e274288ff7f80b5d0263fc4e23683",
"0x84458fd973563d6321fc797792f11e8c40fc9dcb0a995c9b51532bf72ac5429b",
"0x599d50571607f452f6e0baa0c1e4c72288bb36bf238ab8312282686ca215f77e",
"0xf2bbf26611f674d41b46e320ce01af2f14dd9cef9feff710a6f595f4bf555f7d",
"0xeaadcdd5e123c20aba0ce33b20577169e2e507b070c6b4645af2e3295a719999",
"0x9520f516c28874be31f2ef41cad5bfe53d0da277e09b0c60c4b712911a515c2e",
"0xc96995beea4ce989e7ef1612f43dc25a899d67f7a2c295db91a52587e8b28cce",
"0x5a70dc4c014ab43f2905dfd85c782414d46c2d5e5fe3ec6fc30c72df8304056b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

