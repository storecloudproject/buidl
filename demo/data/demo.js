/* Don't modify */
var abi = [{
    "constant": false,
    "inputs": [{
        "name": "x",
        "type": "uint256"
    }],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];
var bytecode = '608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a723058208cc6da6bb0565c3213219d167226eb4ff952e6d1bc2eef0fa542fbb9922666350029';
var contract = web3.ss.contract(abi);
var instance = contract.at('');
/* Don't modify */

reload();

function reload() {
    document.querySelector("#create").innerHTML = "Create a new storage contract";
    var tbodyInner = "";
    esss.shaAbi(JSON.stringify(abi)).then((shaResult) => {
        var sha = JSON.parse(shaResult).abiSha3;
        esss.searchUsingAbi(sha).then((searchResult) => {
            var items = JSON.parse(searchResult);
            items.sort(compareItem);
            items.forEach(function(item) {
                tbodyInner = tbodyInner +
                    "<tr id='" + item.contractAddress + "'><td>" + item.blockNumber +
                    "</td><td>" + item.functionData.get +
                    "</td><td><button class='btn btn-info' onclick='setData(this)'>Set</button></td></tr>";
            }); // end of JSON iterator
            document.querySelector("#tbody").innerHTML = tbodyInner;
        });
    }); // end of esss
}

function create(element) {
    element.innerHTML = "Wait ...";
    var data = '0x' + contract.new.getData({
        data: bytecode
    });
    contract.new({
        data: data
    }, function(err, myContract) {
        if (!err) {
            esss.setIndexStatusToFalse(myContract.transactionHash);
            if ((!myContract.address) && (myContract.transactionHash != null) && (esss.getIndexStatus(myContract.transactionHash) == false)) {
                esss.confirmDeployment(myContract.transactionHash).then((theResult) => {
                    element.innerHTML = "Deployed";
                    esss.submitAbi(JSON.stringify(abi), myContract.transactionHash).then((submitResults) => {
                        element.innerHTML = "Indexed";
                        esss.setIndexStatusToTrue(myContract.transactionHash);
                        esss.getBlockInterval().then((theBlockInterval) => {
                            theBlockInterval = parseInt(theBlockInterval.replace(/['"]+/g, ''));
                            setTimeout(function() {
                                element.innerHTML = "Reloading page data ..";
                                reload();
                            }, theBlockInterval * 1000);
                        })
                    });
                });
            }
            if ((myContract.address != null) && (myContract.transactionHash != null) && (esss.getIndexStatus(myContract.transactionHash) == false)) {
                esss.getBlockInterval().then((theBlockInterval) => {
                    theBlockInterval = parseInt(theBlockInterval.replace(/['"]+/g, ''));
                    setTimeout(function() {
                        if (esss.getIndexStatus(myContract.transactionHash) == false) {
                            esss.submitAbi(JSON.stringify(abi), myContract.transactionHash).then((submitResults) => {
                                element.innerHTML = "Indexed";
                                esss.setIndexStatusToTrue(myContract.transactionHash)
                                setTimeout(function() {
                                    element.innerHTML = "Reloading page data ..";
                                    reload();
                                }, theBlockInterval * 1000);
                            });
                        }
                    }, theBlockInterval * 1000);
                })
            }
        }
    });
}

function setData(element) {
    var tr = element.closest("tr");
    console.log("Set Data " + tr.id);
    instance = contract.at(tr.id);
    var n = window.prompt("Input a number:");
    n && instance.set(n);
    esss.getBlockInterval().then((theBlockInterval) => {
    theBlockInterval = parseInt(theBlockInterval.replace(/['"]+/g, ''));
    setTimeout(function() {
        esss.updateStateOfContractAddress(JSON.stringify(abi), instance.address).then((c2i) => {
            console.log("Updating index for contract " + instance.address)
            setTimeout(function() {
                esss.searchUsingAddress(instance.address).then((r) => {
                    var data = JSON.parse(r);
                    resultToDisplay = JSON.stringify(data.functionData.get);
                    element.closest("td").previousSibling.innerHTML = resultToDisplay.replace(/['"]+/g, '');
                    element.innerHTML = "Set";
                });
            }, theBlockInterval * 1000);
        });
    }, theBlockInterval * 1000);
    });
    element.innerHTML = "Wait ...";
}

function compareItem(a, b) {
    let comparison = 0;
    if (a.blockNumber < b.blockNumber) {
        comparison = 1;
    } else if (a.blockNumber > b.blockNumber) {
        comparison = -1;
    }
    return comparison;
}
