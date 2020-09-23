import React from "react"
import "./src/styles/global.scss"
import FirebaseProvider from "./src/components/Firebase/firebase-context-provider"


export const wrapRootElement = ({ element }) => {
  return <FirebaseProvider>{element}</FirebaseProvider>
}
