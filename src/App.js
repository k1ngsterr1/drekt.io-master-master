// Styles
import styles from "./styles/app.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Screens
import AboutScreen from "./screens/AboutScreen";
import MainScreen from "./screens/MainScreen";
import HouseScreen from "./screens/HouseScreen";
import GuestsScreen from "./screens/GuestsScreen";
import FamilyScreen from "./screens/FamilyScreen";

function App() {
  return (
    <div className="app">
      <MainScreen></MainScreen>
      <AboutScreen></AboutScreen>
      <HouseScreen></HouseScreen>
      <GuestsScreen></GuestsScreen>
      <FamilyScreen></FamilyScreen>
    </div>
  );
}

export default App;
