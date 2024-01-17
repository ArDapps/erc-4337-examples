import fs from "fs/promises";
import path from "path";
import prettier from "prettier";
import { ethers } from "ethers";

//SEPOLIA
// const INIT_CONFIG = {
//   bundlerUrl: "https://public.stackup.sh/api/v1/node/ethereum-sepolia",
//   rpcUrl: "https://sepolia.infura.io/v3/2DiCkycqv7iRSBycgAS5S2KoW86",
//   signingKey: new ethers.Wallet(ethers.utils.randomBytes(32)).privateKey,
//   entryPoint: "0x0576a174D229E3cFA37253523E645A78A0C91B57",
//   simpleAccountFactory: "0x71D63edCdA95C61D6235552b5Bc74E32d8e2527B",
//   paymasterUrl: "",
// };

//GEORLI
const INIT_CONFIG = {
  bundlerUrl: "https://public.stackup.sh/api/v1/node/ethereum-goerli",
  rpcUrl: "https://goerli.infura.io/v3/2DiCkycqv7iRSBycgAS5S2KoW86",
  signingKey: new ethers.Wallet(ethers.utils.randomBytes(32)).privateKey,
  entryPoint: "0x0576a174D229E3cFA37253523E645A78A0C91B57",
  simpleAccountFactory: "0x71D63edCdA95C61D6235552b5Bc74E32d8e2527B",
  paymasterUrl: "",
};
const CONFIG_PATH = path.resolve(__dirname, "../config.json");

async function main() {
  return fs.writeFile(
    CONFIG_PATH,
    prettier.format(JSON.stringify(INIT_CONFIG, null, 2), { parser: "json" })
  );
}

main()
  .then(() => console.log(`Config written to ${CONFIG_PATH}`))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
