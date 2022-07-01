import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeView from "./home/HomeView"

// Import StyleSheets
import "../../scss/all.scss"

/**
 * {@link MainView} is the main view for the entire website.
 */
class MainView extends React.Component {

    render() {
        return <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeView/>}/>
                </Routes>
            </BrowserRouter>
        </>
    }
}

export default MainView
