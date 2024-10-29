require("@nomicfoundation/hardhat-toolbox");

// const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc-amoy.polygon.technology/";
// const NEXT_PUBLIC_PRIVATE_KEY = "YOUR_PRIVATE_KEY";
// const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://eth-mainnet.g.alchemy.com/v2/xSpH08sb9HNW4fFtbFha3MOUGYDm5VNH";
// const NEXT_PUBLIC_PRIVATE_KEY = "343ef157c6d45e98a1e714262cabad04f9c14f2e5e2b6ca3952e76d89799b05a";
/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_RPC_URL =
  "https://eth-sepolia.g.alchemy.com/v2/xSpH08sb9HNW4fFtbFha3MOUGYDm5VNH"
const PRIVATE_KEY =
  ""
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    // polygon_amoy: {
    //   url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
    //   accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    // },
    // sepolia: {
    //   url: SEPOLIA_RPC_URL,
    //   accounts: [PRIVATE_KEY],
    //   chainId: 11155111,
    // },
  },
};
