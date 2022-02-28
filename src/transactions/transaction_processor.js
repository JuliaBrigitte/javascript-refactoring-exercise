function processTransactions(transActions) {
    if (!transActions) {
        throw new Error("Undefined collection of transactions")
    }
    const itemCountHash = {};
    transActions.forEach(item => itemCountHash[item] ? itemCountHash[item] += 1 : itemCountHash[item] = 1);
    return Object.entries(itemCountHash)    .sort((a, b) => a[0].localeCompare(b[0]))
                                            .sort((a, b) => b[1]-a[1])
                                            .map(entry=>entry.join(" "));
}

module.exports = processTransactions;