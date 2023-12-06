async function getAPI(url, urlInfo)
{
    console.log(urlInfo + 'download begins');
    try {
        const response = await fetch(url);
        return await response.json()
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log(urlInfo + 'load complete');
    }
}