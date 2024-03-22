import readline from 'readline';
import chalk from 'chalk';
import * as nearAPI from "near-api-js";
import 'dotenv/config';

const cyan = chalk.bold.cyan;

const { keyStores, KeyPair, connect, Contract } = nearAPI;
const myKeyStore = new keyStores.InMemoryKeyStore();
const PRIVATE_KEY = process.env.TESTNET_KEY;
// creates a public / private key pair using the provided private key
const keyPair = KeyPair.fromString(PRIVATE_KEY);
// adds the keyPair you created to keyStore
await myKeyStore.setKey("testnet", process.env.TESTNET_ACCOUNT, keyPair);


const connectionConfig = {
  networkId: process.env.TESTNET_NETWORK,
  keyStore: myKeyStore, // first create a key store
  nodeUrl: process.env.TESTNET_NODE,
  walletUrl: "https://testnet.mynearwallet.com",
  helperUrl: "https://helper.mainnet.near.org",
  explorerUrl: "https://testnet.nearblocks.io",
};
const nearConnection = await connect(connectionConfig);
const account = await nearConnection.account(process.env.TESTNET_ACCOUNT);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



console.log(cyan(``));
console.log(cyan(`ChatMe auto Sender Message`));
console.log(cyan(`by Zxvla`));
console.log(cyan(``));
console.log(cyan(``));





rl.question(chalk.bold.cyan('Receiver Address : '), (answer) => {

  async function receiver() {
    console.log(cyan(`Calling the Contract`));
    const contract = new Contract(account, "chatme.testnet", {
      changeMethods: ["send_private_message"],
    });
    await contract.send_private_message(
      {
        encrypt_key: "", // argument name and value - pass empty object if no args required
        image: "",
        inner_id: process.env.INNER_ID,
        text: process.env.TEXT,
        to_address: (answer),
      },
      "300000000000000", // attached GAS (optional)
      "0" // attached deposit in yoctoNEAR (optional)
    );
  }
setTimeout(() => {
  Interval
}, timeout);(receiver,1000 - 15000);
});