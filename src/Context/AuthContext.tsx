import { createContext, FC, ReactNode, useState } from "react";
import AuthHelper from "../helpers/AuthHelper";

export type AuthContextType = {
    timeStamp: string;
    hash: string;
}

const getHash = (): AuthContextType => {

    const authHelper = new AuthHelper();

    authHelper.Authenticate();

    return {
        timeStamp: authHelper.timeStamp,
        hash: authHelper.authHash
    }
}


export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [auth, setAuth] = useState<AuthContextType>(getHash());

    return (
        <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;