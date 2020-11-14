window.addEventListener('load', () => loadIndex(), false);

const animationDuration = 1500;
const frameDuration = 1000 / 60;
const totalFrames = Math.round( animationDuration / frameDuration );
const easeOutQuad = t => t * ( 2 - t );

async function loadIndex() {
    if (typeof web3 !== 'undefined') {
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
        
        web3 = new Web3(window.ethereum)
        window.ethereum.enable().catch(error => {
            document.getElementById('connect').style.display = 'block';
            document.getElementById('stake').style.display = 'none'; 
            writeError("h1");
        })  

        var abi = [
	{
		"inputs": [],
		"name": "FACTORY",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "INF",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UNIROUTER",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "WETHAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "input",
				"type": "bool"
			}
		],
		"name": "capPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "creationTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "LPTime",
				"type": "uint256"
			}
		],
		"name": "earnCalc",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "ethEarnCalc",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "makeUnchangeable",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "orbAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "priceCapped",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "lp",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"name": "setLPrewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "input",
				"type": "address"
			}
		],
		"name": "setTokenAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "y",
				"type": "uint256"
			}
		],
		"name": "sqrt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "z",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stake",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "LPTime",
				"type": "uint256"
			}
		],
		"name": "stakerEarnCalc",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakerRewardValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "tetheredReward_LP",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "tetheredReward_Stake",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "timePooled_LP",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "timePooled_Stake",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unchangeable",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "input",
				"type": "uint256"
			}
		],
		"name": "updateRewardValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "who",
				"type": "address"
			}
		],
		"name": "viewLPTokenAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "who",
				"type": "address"
			}
		],
		"name": "viewPooledEthAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "who",
				"type": "address"
			}
		],
		"name": "viewPooledTokenAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "who",
				"type": "address"
			}
		],
		"name": "viewRewardTokenAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "who",
				"type": "address"
			}
		],
		"name": "viewStakerRewardTokenAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "who",
				"type": "address"
			}
		],
		"name": "viewStakerTokenAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawRewardTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawStakerRewardTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

		var RagnaroK = new web3.eth.Contract(abi, '0x42dC393a22eaaF2DC2e3120d55f0636D764CE2Ce');
		RagnaroK.methods.price().call().then(price => {
			RagnaroK.methods.ethEarnCalc(100000000, 31557600).call().then(apy => {
			    let kyeAmount = (price / 1000000000000000000) *apy;
	    		let APY = ((kyeAmount + 100000000)/100000000);
	    		APY = ((APY - 1) * 100);
                animateCountUp(document.getElementById('apy'), Number(APY));
                setTimeout(function(){  
                    document.getElementById("apy").innerHTML = numberWithCommas(APY);
                }, 1600);                
			})
		})

        const account = await web3.eth.getAccounts();
        const accountAddress = await account[0];

    } else {
        document.getElementById('connect').style.display = 'block';
        document.getElementById('stake').style.display = 'none';        
        writeError("h1");
    }
}




// FUNCTIONS

async function connectWallet(){
    if (typeof web3 !== 'undefined') {
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
        
        web3 = new Web3(window.ethereum)
        window.ethereum.enable().catch(error => {
            document.getElementById('connect').style.display = 'block';
            document.getElementById('stake').style.display = 'none';   
            writeError("h1");
        })  

        var abi = [{"inputs":[],"name":"FACTORY","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INF","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNIROUTER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WETHAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"input","type":"bool"}],"name":"capPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"creationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"LPTime","type":"uint256"}],"name":"earnCalc","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"}],"name":"ethEarnCalc","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"makeUnchangeable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"orbAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceCapped","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"input","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"y","type":"uint256"}],"name":"sqrt","outputs":[{"internalType":"uint256","name":"z","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"timePooled","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unchangeable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"input","type":"uint256"}],"name":"updateRewardValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"viewLPTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"viewPooledEthAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"viewPooledTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"viewRewardTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawRewardTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

        var RagnaroK = new web3.eth.Contract(abi, '0x1bE51267D071a33C84ba448055c7aB01D3611A57');
        RagnaroK.methods.price().call().then(price => {
            RagnaroK.methods.ethEarnCalc(100000000, 31557600).call().then(apy => {
                let kyeAmount = (price / 1000000000000000000) *apy;
                let APY = ((kyeAmount + 100000000)/100000000);
                APY = ((APY - 1) * 100);
                animateCountUp(document.getElementById('apy'), Number(APY));
                setTimeout(function(){  
                    document.getElementById("apy").innerHTML = numberWithCommas(APY);
                    document.getElementById('stake').style.display = 'block';
                    document.getElementById('connect').style.display = 'none';                      
                }, 1600);   
            })
        })

        const account = await web3.eth.getAccounts();
        const accountAddress = await account[0];



    } else {

        document.getElementById('connect').style.display = 'block';
        writeError("h1");
    }    
}




async function animateCountUp(el, countTo){
    let frame = 0;
    // Start the animation running 60 times per second
    const counter = setInterval( () => {
        frame++;
        // Calculate our progress as a value between 0 and 1
        // Pass that value to our easing function to get our
        // progress on a curve
        const progress = easeOutQuad( frame / totalFrames );
        // Use the progress value to calculate the current count
        const currentCount = Math.round( countTo * progress);

        // If the current count has changed, update the element
        if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
            el.innerHTML = currentCount;
        }

        // If weâ€™ve reached our last frame, stop the animation
        if ( frame === totalFrames ) {
            clearInterval( counter );
        }
    }, frameDuration );
};


function writeError(elementId){
    
    let data = "<span style ='color: red;'><a style ='color: red' href=\"" + "https://metamask.io/" + "\" target=\"_blank\">" + "Metamask" + "</a>" + " not detected.</span>";
    
    writeValue(elementId, data);
};


function writeValue(elementId, value){
    document.getElementById(elementId).innerHTML = value;
};

function numberWithCommas(x) {
    x = x.toFixed(0)
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}