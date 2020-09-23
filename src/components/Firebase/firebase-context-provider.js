import React, { useState } from "react"
import app from "firebase/app"
import getFirebase from "./firebase"
import FirebaseContext from "./firebase-context"

export default function FirebaseProvider(props) {
  const [firebase, setFirebase] = useState()

  Promise.all([app]).then(values => {
    setFirebase(getFirebase(values[0]))
  })

  return (
    <FirebaseContext.Provider value={firebase}>
      {props.children}
    </FirebaseContext.Provider>
  )
}
