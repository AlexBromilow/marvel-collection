import md5
    from "md5";
class AuthHelper {

    authHash: string;
    timeStamp: string;

    constructor() {
        this.authHash = ''

        const currentTime = new Date();

        this.timeStamp = `${currentTime.getUTCFullYear()}-${currentTime.getUTCMonth()}-${currentTime.getUTCDay()} ${currentTime.getUTCHours()}:${currentTime.getUTCMinutes()}:${currentTime.getUTCSeconds()}`;
    }

    Authenticate() {
        const hash = md5(`${this.timeStamp}${process.env.REACT_APP_API_PRIVATE_KEY}${process.env.REACT_APP_API_PUBLIC_KEY}`);

        this.authHash = hash;
    }
}

export default AuthHelper;