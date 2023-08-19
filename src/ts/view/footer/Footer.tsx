import React, { ReactNode } from "react"

/**
 * {@link Footer} is the website footer.
 */
class Footer extends React.Component {

    render(): ReactNode {
        return <>
            <footer>
                © {new Date().getFullYear()}{" "} Anapad Team
            </footer>
        </>
    }
}

export default Footer
