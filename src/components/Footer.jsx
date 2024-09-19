import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 w-full flex sm:flex-row flex-col justify-between p-6 bg-slate-900 text-white items-center">
        <div className="footerleft">
            <img src="../src/assets/logo.png" alt="logo" className="w-[200px]"/>
        </div>
        <div className="footerCenter">
            <Link to="/">
                Home
            </Link>
        </div>
        <div className="footerRight">
            <p>All Rights Reserved &copy; 2024</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
