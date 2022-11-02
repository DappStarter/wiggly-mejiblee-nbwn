require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name repeat noble essay give glimpse flock gasp'; 
let testAccounts = [
"0x1bc4b900528193e5944c6ea6db845694f5fd50482f66a52d4c012020f9b339b7",
"0x686cd81e7b3e12ea779948d1d9c2faadec01673681af81c8cca6ca042e3a71fb",
"0xbe5e5f0eb99742125b46c39ef178a6f5d4a330655e9de84c6e62353bf54fc956",
"0xd3b10852500c49a5b9724ff448758fd5985ba8ec3b6aae0ff4443b5257b22c1f",
"0xe5d3ce5fd3bdeceebd8c06d7cf8450c29d34789465d9d64c51964776311ed7d9",
"0x1c60b58f0e6e9e40fe1b73e11531f1bf54b8bcadce37a989f852fb835a3b69aa",
"0x19e7cb74b37c0bc35c65e1d84abae56ba35b2af9e8fa8fc0516cfc79bb7e0a65",
"0x65428af3591e53e7695611d42097f369bdf9a1aea0c66a93d0833edc92096009",
"0x2ca77f676d71b780b4a73282da5c0d07a68521e79599b98d08c54b236f77f094",
"0xf5ef5ff48c7b4685e9c3f87cc6853afa481e1e68035b3ea2b8de9688690b3b55"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

