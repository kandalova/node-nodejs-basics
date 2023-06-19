const parseArgs = () => {
    const argLine = process.argv.slice(2).join(' ');
    const propValueRegexp = /(--[\w|-]+) (\w+)/gm
    const pairs = argLine.match(propValueRegexp)    
    .map((pair)=>{
        console.log(pair);
        return pair.replace('--', '').replace(' ', ' is ');
    });
    console.log(pairs.join(', '));
};

parseArgs();