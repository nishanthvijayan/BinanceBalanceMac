const Binance = require('binance-api-node').default;
const { apiKey, apiSecret } = require('./secrets.json');

const DIVIDER = '---';

function calculateBTCBalance(balances, prices) {
  let totalBTCBalance = 0.0;

  balances.forEach((balance) => {
    let assetBtcValue;

    const assetTotalBalance = parseFloat(balance.free) + parseFloat(balance.locked);

    if (balance.asset === 'BTC') {
      assetBtcValue = assetTotalBalance;
    } else {
      const assetPriceInBTC = prices[`${balance.asset}BTC`] ? prices[`${balance.asset}BTC`] : '0.0';
      assetBtcValue = assetTotalBalance * parseFloat(assetPriceInBTC);
    }

    totalBTCBalance += assetBtcValue;
  });

  return totalBTCBalance;
}

async function getBTCBalance() {
  const client = Binance({ apiKey, apiSecret });
  let accountInfo; let
    prices;

  try {
    accountInfo = await client.accountInfo({ recvWindow: 1000 });
    prices = await client.prices({ recvWindow: 1000 });
  } catch (e) {
    console.log('...');
    console.log(DIVIDER);
    console.log('Error connecting to Binance');
    console.log(e.message);
    return;
  }

  const btcBalance = calculateBTCBalance(accountInfo.balances, prices);

  console.log(
    `BTC: ${btcBalance.toFixed(5)
    } ($${(btcBalance * prices.BTCUSDT).toFixed(2)})`,
  );
}

module.exports = getBTCBalance;
