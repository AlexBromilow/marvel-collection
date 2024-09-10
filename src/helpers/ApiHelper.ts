import md5 from 'md5';

class ApiHelper {

    async GetComicByIsbn(isbn: string, timeStamp: string, authHash: string) {

        const comicData = await fetch(`https://gateway.marvel.com/v1/public/comics?isbn=${isbn}&ts=${timeStamp}&apikey=${process.env.REACT_APP_API_PUBLIC_KEY}&hash=${authHash}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
        }).then(data => data.json()).then(result => result as ComicResult);

        return comicData.data
    }

}

export default ApiHelper