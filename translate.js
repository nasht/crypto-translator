let fromTerms = [
  "crypto",
  "ETH",
  "BTC",
  "NFT",
  "Bored Ape",
  "Token",
  "ICO",
  "Bitcoin",
  "Blockchain",
  "coin",
  "ICO",
  "DeFi",
  "DAO",
  "Decentralized",
  "Fungible",
]

let targetTerms = [
  "Snake Oil",
  "Bullshit",
  "Ponzi",
  "Scam",
  "Worthless",
  "Dodgy",
  "HandWavey",
  "Stupid",
  "Pointless",
  "Fake",
  "Garbage"
]


Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
}

function createMapping(fromTerms, toTerms) {
  let map = new Map();
  fromTerms.forEach((element) => {
    map.set(element, toTerms.sample());
  });
  return map;
}




function walkText(node) {
  if (node.nodeType == 3) {
    console.log("node: " + node.nodeName + "data: " + node.data);
    currentMapping.forEach((value, key) => {
      node.data = node.data.replace(RegExp(key, "ig"), value);
    });
  }
  if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
    for (var i = 0; i < node.childNodes.length; i++) {
      console.log("going deeper, node: " + node.nodeName + "type:" + node.nodeType);
      walkText(node.childNodes[i]);
    }
  }
}


currentMapping = createMapping(fromTerms, targetTerms);
walkText(document.body);

