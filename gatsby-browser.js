import { FirebaseProvider } from "./src/components/Firebase"
import React from "react"

export const wrapRootElement = ({ element }) => {
  return <FirebaseProvider>{element}</FirebaseProvider>
}
