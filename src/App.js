import Footer from "./components/footer/Footer";
import NavBar from "./components/header/nav/NavBar";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

const App = () => {
  return (
    <div>
      <NavBar />
      <PageNotFound />
      <Footer />
    </div>
  );
};

export default App;
