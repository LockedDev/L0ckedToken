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
var RagnaroK;
var accountAddress;


const animationDuration = 1500;
const frameDuration = 1000 / 60;
const totalFrames = Math.round( animationDuration / frameDuration );
const easeOutQuad = t => t * ( 2 - t );

window.addEventListener('load', () => loadIndex(), false);

async function loadIndex() {
    if (typeof web3 !== 'undefined') {
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
        
        web3 = new Web3(window.ethereum)
        window.ethereum.enable().catch(error => {
            document.getElementById('connect').style.display = 'block';
            document.getElementById('stake').style.display = 'none'; 
            writeError("h1");
        })  

        RagnaroK = new web3.eth.Contract(abi, '0x42dC393a22eaaF2DC2e3120d55f0636D764CE2Ce');
        const account = await web3.eth.getAccounts();
        accountAddress = await account[0];
    

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
        await updateReward();
        await updateBurnRate(); 
        await updateStaked(); 



    } else {
        document.getElementById('connect').style.display = 'block';
        document.getElementById('stake').style.display = 'none';        
        writeError("h1");
    }
}


// FUNCTIONS

async function updateReward(){
        RagnaroK.methods.viewRewardTokenAmount(accountAddress).call().then(rewards => {
            updateTetheredReward(rewards);            
            var etherValue = web3.utils.fromWei(rewards, 'ether');
            animateCountUp(document.getElementById('reward'), Number(etherValue).toFixed(10));            
        })    
}

async function updateStaked(){
        RagnaroK.methods.viewPooledTokenAmount(accountAddress).call().then(staked => {
            const etherValue = web3.utils.fromWei(staked, 'ether');
            animateCountUp(document.getElementById('staked'),Number(etherValue).toFixed(3));
        })       
}


async function claimReward(){
        RagnaroK.methods.viewRewardTokenAmount(accountAddress).call().then(rewards => {
            RagnaroK.methods.withdrawRewardTokens(rewards).send({
                from: accountAddress,
            }).then(function(receipt){
                animateCountUp(document.getElementById('reward'), 0);
            })       
        })       
}

async function stakeEther(){

        var etherValue = document.getElementById('amount').value;
        var weiValue = web3.utils.toWei(etherValue, 'ether');     
        RagnaroK.methods.stake().send({
                value: weiValue,
                from: accountAddress,
            });        
}


async function updateBurnRate(){
        RagnaroK.methods.tetheredReward_LP(1e6).call().then(reward => {
            console.log(reward);
            current_reward_rate = (reward / 1e6) * 100;
            current_burn_rate = 100 - current_reward_rate;
            document.getElementById('burn_rate').innerHTML = current_burn_rate;            
        })    
}


async function updateTetheredReward(amount){
        RagnaroK.methods.tetheredReward_LP(amount).call().then(tethered_reward => {
            var etherValue = web3.utils.fromWei(tethered_reward, 'ether');            
            document.getElementById('tethered_reward').innerHTML = etherValue;            
        })    
}



async function claimStakerReward(){
        RagnaroK.methods.viewStakerRewardTokenAmount(accountAddress).call().then(rewards => {
            RagnaroK.methods.withdrawStakerRewardTokens(rewards).send({
                from: accountAddress,
            }).then(function(receipt){
                animateCountUp(document.getElementById('reward'), 0);
            })       
        })       
}



function animateCountUp(el, countTo){
    let frame = parseInt( el.innerHTML );
    // Start the animation running 60 times per second
    const counter = setInterval( () => {
        frame++;
        // Calculate our progress as a value between 0 and 1
        // Pass that value to our easing function to get our
        // progress on a curve
        const progress = easeOutQuad( frame / totalFrames );
        // Use the progress value to calculate the current count
        const currentCount = Math.round( countTo * progress * 1000) / 1000;

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