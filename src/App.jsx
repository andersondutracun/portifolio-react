import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './styles/components/app.sass';

function App() {
  return (
    <div id="portifolio">
      <h1>Anderson Dutra</h1>
      <div id="nav">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
