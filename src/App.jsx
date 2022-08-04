import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import Icons from './pages/Icons';
import Error from './pages/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import Stories from './pages/Stories';
import GoToTop from './components/GoToTop';


const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      light: "#575656",
      xLight: "#918f8f",
      xsLight: "rgba(0, 0, 0, 0.05)",
      white: "#fff",
      black: " #212529",
      ts: "#fc9020",
      wrapper: "linear-gradient(172deg, #EAEAEC 49.5%, #BFBCC2 100%)",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footerBg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <GoToTop />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;