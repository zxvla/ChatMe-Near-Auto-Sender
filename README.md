
# ChatMe.APP Auto Sender Message

let you send message with customize RPC





## 1. Installation

clone this repository first
using Node Js 18.9.1

```bash
  git clone https://github.com/zxvla/ChatMe-Near-Auto-Sender.git Botz
  cd Botz
  npm install
```


    
## 2. Usage

first rename .env-examples to just .env



in Botz directory type this command
```bash
node index.js
```

then fill the receiver address on the CLI
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
or rename the .env-examples to .env

`KEY_PRIVATE` = "your private key near wallet without ed25519:"

`ACCOUNT_ID` = "your public address example johndoe.near"

`INNER_ID` = "" this is optional, better use my INNER_ID value

`TEXT` = "your text message that you want to send"

`NETWORK_ID` = "mainnet" // you can use mainnet, tesnet, localnet

`NODE` = "your custom node RPC endpoints"
