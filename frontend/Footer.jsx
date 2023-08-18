import './styles/Footer.css'
import linkedinIcon from './img/linkedin.svg'
import githubIcon from './img/github.svg'
import rightsIcon from './img/rights.svg'

const Footer = () => {
    return (
        <footer>
            <a
                href='https://www.linkedin.com/in/joaquin-trujillo-851547254/'
                target='_blank'
                rel='noreferrer'
            >
                <img src={linkedinIcon} />
                LinkedIn
            </a>
            <a
                href='https://github.com/forjoa'
                target='_blank'
                rel='noreferrer'
            >
                <img src={githubIcon} />
                Git-Hub
            </a>
            <a
                href='https://www.instagram.com/loveujoa'
                rel='noreferrer'
                target='_blank'
            >

                <img src={rightsIcon} alt="Rights Icon" />
                @loveujoa
            </a>

        </footer>
    )
}

export default Footer