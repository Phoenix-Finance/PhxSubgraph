const { createClient } = require('graphqurl');
const BN = require("bn.js");
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/75c431806c0d49ee9868d4fdcef025bd"));
//var web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/75c431806c0d49ee9868d4fdcef025bd"));
//var web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/34b6f08707964087bea0eb7571fdae41"));

var { abi } = require('./erc20token.json');
var tokenabi = abi;

//npm i --save lokka lokka-transport-http
const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;
const client = new Lokka({
    transport: new Transport('https://api.thegraph.com/subgraphs/name/jeffqg123/phxoptions')
});

const PRICE_DECIMAL = new BN("100000000");
const EIGHTEEN_DECIMAL = new BN("1000000000000000000");
const NETWORTH_DECIMAL = new BN("100000000");

function getDate(unixtime) {
    var a = new Date(unixtime * 1000);
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    date=date>=10?""+date:"0"+date;

    var hour = a.getHours();
    hour=hour>=10?""+hour:"0"+hour;

    var min = a.getMinutes()
    min=min>=10?""+min:"0"+min;

    var sec = a.getSeconds();
    sec=sec>=10?""+sec:"0"+sec;

    var time = date + '-' + month + '-' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
};

// type EntityPoolTLV @entity {
//     id: ID!
//     TimeStamp: BigInt
//     Token: Bytes
//     Amout: BigInt
//     UsdValue: BigInt
// }
/*
client.query(`
    {
      entityPoolTLVs(first: 1000) {
        id
        TimeStamp
        Token
        Amout
        UsdValue
      }      
    }
`).then(result => {
   // console.log(result);
});
*/

async function getTvls() {
    let querystr = `
    {
       entityPoolTLVs(first: 1000, orderBy: TimeStamp, orderDirection: asc) {
            id
            TimeStamp
            Token
            Amout
            UsdValue
      } 
    }`
    let result = await client.query(querystr)
    let tvls = result.entityPoolTLVs;
    //console.log(tvls)
    let alltvls = new Map();
    for(let i=0;i<tvls.length;i++) {
        let item = tvls[i];
        let tk = new web3.eth.Contract(tokenabi,item.Token);
        let name = await tk.methods.symbol().call();
        let decimal = await tk.methods.decimals().call();
        //console.log(name,decimal)
        let tvl = {
            Date:getDate(item.TimeStamp),
            Amount: new BN(item.Amount).div(new BN(decimal)),
            UsdValue: new BN(item.UsdValue).div(new BN(decimal).mul(PRICE_DECIMAL))
        }

        if(alltvls[name]==undefined) {
            alltvls[name] = [];
        }
        alltvls[name].push(tvl);
     }
    //console.log(alltvls);
    return alltvls
}

//getTvls();
//return;

// type EntityNetWorth @entity {
//     id: ID!
//         TimeStamp: BigInt!
//         Pool: Bytes!
//         NetWorth: BigInt!
// }
client.query(`
    {
      entityNetWorths(first: 1000) {
        id
        TimeStamp
        Pool
        NetWorth
      }      
    }
`).then(result => {
    //console.log(result);
});

async function getNetWorths() {
    let querystr = `
    {
      entityNetWorths(first: 10,orderby: TimeStamp) {
        id
        TimeStamp
        Pool
        NetWorth
      } 
    }`

    let result = await client.query(querystr)
    let networths = result.entityNetWorths;
    //console.log(tvls)
    let allNetWorths = new Map();
    for(let i=0;i<networths.length;i++) {
        let item = networths[i];
        //console.log(name,decimal)
        let wrth = {
            Date:getDate(item.TimeStamp),
            NetWorth: new BN(item.NetWorth).div(NETWORTH_DECIMAL),
        }

        if(allNetWorths[item.Pool]==undefined) {
            allNetWorths[item.Pool] = [];
        }
        allNetWorths[item.Pool].push(wrth);
    }

    console.log(allNetWorths);

    return allNetWorths
}

getNetWorths();

return;

// type EntityActiveOption @entity {
//     id: ID! #token + timeid as id
//     TimeStamp: BigInt!
//         Underlying: BigInt!
//         CallAmount: BigInt!
//         CallUsdValue: BigInt!
//         PutAmount: BigInt!
//         PutUsdValue: BigInt!
// }

client.query(`
    {
      entityActiveOptions(first: 1000) {
        Underlying
        CallAmount
        CallUsdValue
        PutAmount
        PutUsdValue
      }      
    }
`).then(result => {
   // console.log(result);
});

// type EntityPremium @entity {
//     id: ID!
//         TimeStamp: BigInt!
//         Token: Bytes
//     CallAmount: BigInt
//     CallUsdValue: BigInt
//     PutAmount: BigInt
//     PutUsdValue: BigInt
// }
client.query(`
    {
      entityPremiums(first: 1000) {
        id
        TimeStamp
        Token
        CallAmount
        CallUsdValue
        PutAmount
        PutUsdValue
      }      
    }
`).then(result => {
    //console.log(result);
});

// type EntityFee @entity {
//     id: ID!
//         TimeStamp: BigInt!
//         Token: Bytes
//     CallAmount: BigInt
//     CallUsdValue: BigInt
//     PutAmount: BigInt
//     PutUsdValue: BigInt
// }
client.query(`
    {
      entityFees(first: 1000) {
        id
        TimeStamp
        Token
        CallAmount
        CallUsdValue
        PutAmount
        PutUsdValue
      }      
    }
`).then(result => {
    //console.log(result);
});

// type EntityOptionItem @entity {
//     id: ID!
//         Date: BigInt!
//         Status: String!
//         UnderlyingAssets: BigInt!
//         Type: BigInt!
//         Amount: BigInt
//     UsdValue: BigInt
//     StrikePrice: BigInt
//     Premium: BigInt
//     PL: BigInt
// }

client.query(`
    {
      entityOptionItems(first: 1000) {
        id
        Date
        Status
        UnderlyingAssets
        Type
        Amount
        UsdValue
        StrikePrice
        Premium
        PL
      }      
    }
`).then(result => {
    console.log(result);
});

/*

async function getprices() {
    let res = await getBasicPriceData("rinkeby", 1620921600,1621222954, "0xb86ded607497fe38a36b26f7b5c3dfdca30ef955")
    //console.log(res)
    console.log("uptokenprice", res.upprices)
    console.log("-----------------------------------------")
    console.log("downtokenprice", res.downprices)
}
*/
//getprices()
// client.query(`
//     {
//       leveragedTokenPriceEntities(where: {network: "rinkeby"}) {
//         poolAddress
//         uptokenprice
//         downtokenprice
//         timestamp
//       }
//     }
// `).then(result => {
//     console.log(result);
// });


//exports.getBasicPriceData = getBasicPriceData

// client.query(querystr).then(result => {
//     let ltpes = result.leveragedTokenPriceEntities;
//     for(let i=0;i<ltpes.length;i++) {
//         let item = ltpes[i]
//         basicUpPrices[item.timestamp] = item.uptokenprice;
//         basicDownPrices[item.timestamp] = item.downtokenprice;
//     }
//
//     return {upprices:basicDownPrices,downprices:basicDownPrices}
// });
