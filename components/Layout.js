import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <div className="w-4/5 h-auto mx-auto mt-12" id="top">
        <Nav />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
