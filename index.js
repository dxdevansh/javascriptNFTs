// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _power,_age) {
    const NFT =
    {
        "name":_name,
        "power":_power,
        "age":_age
    }
    NFTs.push(NFT);
    console.log("Minted:" + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i = 0; i < NFTs.length; i++) {
    console.log("NFT: \t\t" + (i+1));
    console.log("name: \t\t" + NFTs[i].name);
    console.log("power: \t\t" + NFTs[i].power);
    console.log("age: \t\t" + NFTs[i].age);
    console.log("------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" +NFTs.length);
}

// call your functions below this line
mintNFT("Steve","super soldier","150");
mintNFT("Thor","Lightening","1000");
mintNFT("Tony","super soldier","45");
listNFTs();
getTotalSupply()