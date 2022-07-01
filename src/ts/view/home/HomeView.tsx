import React, { ReactNode, RefObject } from "react"
import Clipboard from 'clipboard'

// Import assets
import imageAnapadIcon from "../../../assets/img/anapad_icon_black.png"
import imageGithub from "../../../assets/img/github.png"
import imageEmail from "../../../assets/img/email.png"
import Footer from "../footer/Footer"

interface HomeViewState {
    fadeIn?: boolean;
}

/**
 * {@link HomeView} is the home view.
 */
class HomeView extends React.Component<any, HomeViewState> {

    private readonly riseUpAnimationClass = "animation-up"
    private readonly emailLinkButtonClass = "email"
    private readonly emailButton: RefObject<HTMLButtonElement>
    private readonly emailButtonCopiedTextRef: RefObject<HTMLSpanElement>

    constructor(props: any) {
        super(props)
        this.state = {
            fadeIn: false
        };
        this.emailButton = React.createRef()
        this.emailButtonCopiedTextRef = React.createRef()
        new Clipboard("#" + this.emailLinkButtonClass)
    }

    componentDidMount(): void {
        setTimeout(() => {
            this.setState(() => ({
                fadeIn: true
            }))
        }, 250)
    }

    emailButtonClick(): void {
        let classList = this.emailButtonCopiedTextRef.current?.classList
        if (classList?.contains(this.riseUpAnimationClass)) {
            return
        }
        classList?.add(this.riseUpAnimationClass)
        setTimeout(() => {
            classList?.remove(this.riseUpAnimationClass)
        }, 2000)
    }

    render(): ReactNode {
        return <>
            <div id="content-centered" className={this.state.fadeIn ? "fade-in" : ""}>
                <img id="anapad-icon" src={imageAnapadIcon} alt="Anapad Icon"/>
                <h1>Model A anapad</h1>
                <p>
                    <span id="tab"></span>
                    The computer keyboard and mouse has been the predominant hardware interface for desktop computers
                    for over six decades. Technology has progressed dramatically over the years, but the way we
                    interface with computers has largely remained the same. We envision a new kind of hardware interface
                    that synthesizes the functionality of the keyboard and mouse into a single device. The device will
                    consist of a multicolor, multitouch display mounted in a metal housing that approximates the
                    footprint of a traditional keyboard. As we imagine how to innovate the desktop environment for
                    greater productivity, intuition, and satisfaction, the aim of our device is to provide a more
                    efficient, seamless, and enjoyable user experience.
                </p>
                <h3>Coming this December</h3>
                <div id="links">
                    <a id="github" target="_blank" rel="noreferrer" href="https://github.com/AnapadTeam">
                        <img src={imageGithub} alt="Github"/>
                    </a>
                    <button id={this.emailLinkButtonClass} data-clipboard-text="contact@anapad.tech"
                            onClick={() => this.emailButtonClick()}>
                        <div id="email-button-element-stack">
                            <img src={imageEmail} alt="Email"/>
                            <span ref={this.emailButtonCopiedTextRef} id="email-copied-text">Copied to clipboard!</span>
                        </div>
                    </button>
                </div>
            </div>
            <Footer/>
        </>
    }
}

export default HomeView
