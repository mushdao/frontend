import { StableBond, LPBond, NetworkID, CustomBond, BondType } from "src/lib/Bond";
import { addresses } from "src/constants";

import { ReactComponent as MUSHBUSDImg } from "src/assets/tokens/MUSH-BUSD.svg";
import { ReactComponent as wBNBImg } from "src/assets/tokens/BNB.svg";
import { ReactComponent as BusdImg } from "src/assets/tokens/BUSD.svg";
   
import { abi as BondContractRefABI } from "src/abi/bonds/BondRefContract.json";
import { abi as ReserveOhmDaiContract } from "src/abi/reserves/OhmDai.json"; 
 
import { abi as EthBondContract } from "src/abi/bonds/EthContract.json";

import { abi as ierc20Abi } from "src/abi/IERC20.json";
import { BigNumberish } from "ethers";

// TODO(zx): Further modularize by splitting up reserveAssets into vendor token definitions
//   and include that in the definition of a bond

export const busd = new StableBond({
  name: "busd",
  displayName: "BUSD",
  bondToken: "BUSD",
  isRef: true,
  isAvailable: { [NetworkID.Mainnet]: false, [NetworkID.Testnet]: false },
  bondIconSvg: (BusdImg),
  bondContractABI: BondContractRefABI,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x215f36320b1bA4387074A1151441079aa2180E2D",
      reserveAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x1d5276286b68a095a4DD8828f1C17aD4D51Be277",
      reserveAddress: "0x5e481733fc924E293Ef28F4F32aeA23d379eDe1B",
    },
  },
});


export const mush_busd = new LPBond({
  name: "mush_busd_lp",
  displayName: "MUSH-BUSD LP",
  bondToken: "BUSD",
  isRef: true,
  isAvailable: { [NetworkID.Mainnet]: false, [NetworkID.Testnet]: false },
  bondIconSvg: MUSHBUSDImg,
  bondContractABI: BondContractRefABI,
  reserveContract: ReserveOhmDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x6aaFc032B30137CD0b1120dc9D58b986C8bbB773",
      reserveAddress: "0xbdf06Fae530004361fF6802d1C4DA21B7abFF27E",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x465BC6313763cb8F10211F40457211F1aE0c48Eb",
      reserveAddress: "0x2a2a4ba261683db50918cca5b1f4e5f6cd0f0047",
    },
  },
  lpUrl:
    "https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0xcc238200cFfdA7A5E2810086c26d5334e64F1155",
});

// HOW TO ADD A NEW BOND:
// Is it a stableCoin bond? use `new StableBond`
// Is it an LP Bond? use `new LPBond`
// Add new bonds to this array!!
export const allBonds = [busd, mush_busd];
// TODO (appleseed-expiredBonds): there may be a smarter way to refactor this
export const allExpiredBonds = [];
export const allBondsMap = allBonds.reduce((prevVal, bond) => {
  return { ...prevVal, [bond.name]: bond };
}, {});

// Debug Log
// console.log(allBondsMap);
export default allBonds;
