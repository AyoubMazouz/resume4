import React, { createContext, useContext, useState } from "react"

const GlobalContext = createContext()

export function useGlobalContext() {
  return useContext(GlobalContext)
}
export function GlobalContextProvider({ children }) {
  const [currProject, setCurrProject] = useState(null)

  return (
    <GlobalContext.Provider
      value={{
        currProject,
        setCurrProject,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
