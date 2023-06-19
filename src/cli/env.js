const parseEnv = () => {
    const env = process.env || {};
    const rssVars = Object.entries(env)
        .filter(([key,]) => key.startsWith('RSS_'))
        .map(([key, value]) => {
            if (key.startsWith('RSS_')) {
                return `${key}=${value}`
            }
        })
        .join('; ');
    console.log(rssVars);
};

parseEnv();