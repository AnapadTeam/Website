import React, { ReactNode } from "react"

/**
 * {@link Footer} is the website footer.
 */
class Footer extends React.Component {

    render(): ReactNode {
        return <>
            <footer>
                © {new Date().getFullYear()}{" "}
                <a href="https://anapad.tech" target="_blank" rel="noreferrer">Anapad Team</a>
            </footer>
        </>
    }
}

export default Footer
