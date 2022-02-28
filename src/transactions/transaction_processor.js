function processTransactions(transActions) {
    if (!transActions) {
        throw new Error("Undefined collection of transactions")
    }

    const itemCountHash = {};
    transActions.forEach(item => itemCountHash[item] ? itemCountHash[item] += 1 : itemCountHash[item] = 1);
    // return Object.keys(itemCountHash).sort((a, b) => itemCountHash[b] - itemCountHash[a])
    //     .map(entry=>entry + " " + itemCountHash[entry]);
    return Object.entries(itemCountHash)    .sort((a, b) => a[0].localeCompare(b[0]))
                                            .sort((a, b) => b[1]-a[1])
                                            .map(entry=>entry.join(" "));
}

// group solution:
// function processTransactions(transActions) {
//     let itemCountHash = {};
//     transActions.sort().forEach(el => itemCountHash[el] ? itemCountHash[el] += 1 : itemCountHash[el] = 1);
//     return Object.entries(itemCountHash).sort((a,b) => b[1]-a[1]).map(el => el.join(' '));
// }

module.exports = processTransactions;