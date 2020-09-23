import { FirebaseProvider } from "./src/components/Firebase"
import React from "react"
import "./src/styles/global.scss"

export const wrapRootElement = ({ element }) => {
  return <FirebaseProvider>{element}</FirebaseProvider>
}
