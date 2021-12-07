import './App.css';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import Profile from './PortfolioContainer/Home/Profile/Profile';
import Projects from './PortfolioContainer/Projects/Projects';

function App() {
  return (
    <div>
      <Profile></Profile>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
