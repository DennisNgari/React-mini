import Footer from "./components/footer/Footer";
import NavBar from "./components/header/nav/NavBar";
import Login from "./pages/login/Login";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
const App = () => {
  return (
    <div>
      <NavBar />
      <Login />
      {/* <PageNotFound /> */}
      <Footer />
    </div>
  );
};

export default App;
