import Avatar from '../img/eu.jfif';
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Anderson Dutra" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
}

export default Sidebar;
