import { createContext } from "react"

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {

    const allInfo={}
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProviders