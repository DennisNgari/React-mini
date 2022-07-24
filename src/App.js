import Footer from "./components/footer/Footer";
import NavBar from "./components/header/nav/NavBar";
import Login from "./pages/login/Login";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Register from "./pages/register/Register";
const App = () => {
  return (
    <>
      <NavBar />
      <Register />
      <Login />
      <PageNotFound />
      <Footer />
    </>
  );
};

export default App;
