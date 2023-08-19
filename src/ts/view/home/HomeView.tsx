import React, {ReactNode, RefObject} from "react"
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
    private readonly emailButtonCopiedTextRef: RefObject<HTMLSpanElement>

    constructor(props: any) {
        super(props)
        this.state = {
            fadeIn: false
        };
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
                <h1>Anapad</h1>
                <p>
                    <span id="tab"></span>
                    An anapad combines the keyboard and trackpad into a single device so that all the computer
                    peripherals a user needs are directly under their fingertips. Using haptic feedback and force
                    sensing technology, an anapad enables a user to physically perceive dynamic input interfaces.
                    Additionally, software applications can configure an anapad to display custom interfaces.
                </p>
                <p>
                    <span id="tab"></span>
                    Our first generation anapad is called Model A, which consists of a multi-touch, multi-color
                    widescreen LCD display housed in an aluminum enclosure. Internally, Model A contains 33 linear
                    resonant actuators (LRAs) to provide haptic feedback and 4 strain gauge force sensors to perceive
                    touch pressure.
                </p>
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
