import "./App.css";
import AccomodationPage from "./pages/AccomodationPage";
import ContactPage from "./pages/ContactPage";
import FamilySuitePage from "./pages/FamilySuitePage";
import HomePage from "./pages/HomePage";
import PressPage from "./pages/PressPage";
import PromoPage from "./pages/PromoPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <>
      <HomePage />
      <WelcomePage />
      <AccomodationPage />
      <FamilySuitePage />
      <PromoPage />
      <PressPage />
      <ContactPage />
    </>
  );
}

export default App;
