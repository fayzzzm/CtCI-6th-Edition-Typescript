import * as readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cin = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
}

const main = async () => {
    const n = await cin ('Enter N: ') as number;
    const k = await cin ('Enter K: ') as number;

    const diamonds: number[] = [];

    for (let i=0; i<n; i++) {
        const d = await cin('') as number;

        diamonds.push(d);
    }


    let max = 0;

    diamonds.sort((a, b) => a - b);

    for (let i=0; i<n; i++) {
        let curMax = 0;

        for (let j=i; j<n; j++) {
            if (diamonds[j] - diamonds[i] <= k) curMax ++;
        }

        max = Math.max(max, curMax);
    }

    console.log(max);

    rl.close();
}

main();