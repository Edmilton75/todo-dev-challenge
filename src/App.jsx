import "./styles/reset.css"
import "./App.css"

import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import "./App.css"
import Input from "./components/Input"
import CheckBox from "./components/CheckBox"

const App = () => {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Input />
    </div>
  )
}

export default App