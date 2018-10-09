# BinanceBalanceMac
A BitBar plugin that displays your Binance portfolio value in your Mac OS X Menu Bar
  
![Screenshot](Screenshot.png)
  
## Installation
  
1. Install [BitBar](https://getbitbar.com/)
  
2. Clone this repo
  
3. Install dependencies
```
cd binance_btc_balance
npm install
```
  
4. Change permissions of `binance_btc_balance.2m.sh` to make it executable
```
chmod +x binance_btc_balance.2m.sh
```
  
5. Generate your Api key & Api Secret from Binance.  
Use this [guide](https://support.binance.com/hc/en-us/articles/360002502072-How-to-create-API) if you don't know how.  
Note: Trading permissions are not required for this app. So when you generate API keys, make sure that your disable trading and withdrawal permissions.
  
6. Rename `binance_btc_balance/secrets.example.json` to `secrets.json` and enter your API key & secrets in that file.  
  
7. Start BitBar & set your plugin folder to the root of this project.
  
Done!
  
