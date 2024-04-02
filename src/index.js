import React from "react"
import * as ReacDOMClient from "react-dom/client"; 
import App from './App'
import './css/main.scss'


const app = ReacDOMClient.createRoot(document.getElementById("app"));

app.render(<App />) 