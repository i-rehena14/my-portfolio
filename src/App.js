import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import Profile from './PortfolioContainer/Home/Profile/Profile';
import Projects from './PortfolioContainer/Projects/Projects';
import Footer from './PortfolioContainer/Footer/Footer';

function App() {
  return (
    <div>
      <Profile></Profile>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
