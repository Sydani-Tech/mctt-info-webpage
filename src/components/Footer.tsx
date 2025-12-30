import logo from "../assets/mctt_logo.svg";
import ig from "../assets/ig.svg"
import x from "../assets/x.svg"
import linkedin from "../assets/linkedin.svg"
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href: string, isRoute: boolean = false) => {
    if (isRoute) {
      navigate(href);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const targetId = href.replace("#", "");
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      } else {
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }
  };

  return (
    <div className="bg-primary text-white text-sm">
        <div className="grid md:grid-cols-3 w-[85%] mx-auto py-10 gap-6">
          <div className="">
            <img src={logo} alt="" />
            <p className="py-6 ">Empowering countries worldwide with intelligent microplanning solutions.</p>
            <div className="flex gap-2">
              <img src={ig} alt="" className="opacity-50 cursor-default" />
              <img src={x} alt="" className="opacity-50 cursor-default" />
              <img src={linkedin} alt="" className="opacity-50 cursor-default" />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
              <div>
                <p className="text-lg">Products</p>
                <div className="flex flex-col space-y-2 text-white/80 mt-5">
                  <span className="opacity-50 cursor-default">Features</span>
                  <span className="opacity-50 cursor-default">Pricing</span>
                  <span className="opacity-50 cursor-default">API</span>
                  <span className="opacity-50 cursor-default">Integration</span>
                </div>
              </div>

              <div>
                <p className="text-lg">Resources</p>
                <div className="flex flex-col space-y-2 text-white/80 mt-5">
                  <button 
                    onClick={() => handleNavigation("#plan-smarter")}
                    className="text-left hover:text-white transition-colors"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => handleNavigation("#comprehensive")}
                    className="text-left hover:text-white transition-colors"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => handleNavigation("#trusted-by")}
                    className="text-left hover:text-white transition-colors"
                  >
                    Use Cases
                  </button>
                  <button 
                    onClick={() => handleNavigation("/contact-us", true)}
                    className="text-left hover:text-white transition-colors"
                  >
                    Contact Us
                  </button>
                </div>
              </div>

              <div>
                <p className="text-lg">Legal</p>
                <div className="flex flex-col space-y-2 text-white/80 mt-5">
                  <button 
                    onClick={() => handleNavigation("/privacy-policy", true)}
                    className="text-left hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                  <span className="opacity-50 cursor-default">Terms of Service</span>
                  <span className="opacity-50 cursor-default">Cookie Policy</span>
                  <span className="opacity-50 cursor-default">Terms and Conditions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div className="border-t border-white md:w-[85%] mx-auto flex items-center justify-center py-8 gap-2 text-white/80">
            <p>© 2025 CoverageTrackr | Powered by <a href="https://sydani.org/service/sydani-tech/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">Sydani Technologies</a></p>
          </div>
    </div>
  )
}
