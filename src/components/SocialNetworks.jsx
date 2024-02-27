import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";
import '../styles/components/SocialNetworks.sass';

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/andersondutrac/"},
    {name: "github", icon: <FaGithub />, link: "https://github.com/andersondutracun"},
    {name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/andersondutra90/"},
];

function SocialNetworks() {
  return (
    <section id="socialNetworks">
        {socialNetworks.map((network) => (
            <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks
