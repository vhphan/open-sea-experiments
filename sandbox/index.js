const Web3 = require('web3')
const opensea = require("opensea-js");
const OpenSeaPort = opensea.OpenSeaPort;
const Network = opensea.Network;

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main
})


async function getAsset() {
    return await seaport.api.getAsset({
        tokenAddress: "0x06012c8cf97bead5deae237070f9587f8e7a266d", // CryptoKitties
        tokenId: "1", // Token ID
    })
}

getAsset().then(a => {
    console.log(a);
}).catch(e => {
    console.log(e);
});