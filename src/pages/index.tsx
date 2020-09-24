import React from "react"
import "./index.scss"
import FirebaseContext from "../components/Firebase/FirebaseContext"
import CardList from "../components/CardList/CardList"
import NavBar from "../components/NavBar/NavBar"

export default function Home() {
  return (
    <FirebaseContext.Consumer>
      {(firebase: any) => {
        return (
          <>
            <NavBar firebase={firebase}></NavBar>
            <CardList firebase={firebase}></CardList>
          </>
        )
      }}
    </FirebaseContext.Consumer>
  )
}
