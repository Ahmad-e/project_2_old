import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitch, faTwitter, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from '../SVGs/logo'
const Footer=()=>{
    return(
        <div className="footer py-3">
        <div className="container">
            <Logo />
            <p>We are Social</p>
            <div class="social-icons">
                <FontAwesomeIcon className="icon" icon={faTiktok}/>
                <FontAwesomeIcon className="icon"  icon={faXTwitter}/>
                <FontAwesomeIcon className="icon" icon={faFacebook}/>
                <FontAwesomeIcon className="icon"  icon={faInstagram}/>
                <FontAwesomeIcon className="icon"  icon={faTwitch}/>
                <FontAwesomeIcon className="icon"  icon={faYoutube}/>
                <FontAwesomeIcon className="icon"  icon={faLinkedin}/>
            </div>
            <p className="copyright">&copy;2024 - <span>Wendy's</span> All Right Reserved</p>
        </div>
    </div>
    )
}
export default Footer