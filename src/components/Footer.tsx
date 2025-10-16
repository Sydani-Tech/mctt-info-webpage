import logo from "../assets/mctt_logo.svg";
import ig from "../assets/ig.svg"
import x from "../assets/x.svg"
import linkedin from "../assets/linkedin.svg"
import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-primary text-white text-sm">
        <div className="grid md:grid-cols-3 w-[85%] mx-auto py-10 gap-6">
          <div className="">
            <img src={logo} alt="" />
            <p className="py-6 ">Empowering countries worldwide with intelligent microplanning solutions.</p>
            <div className="flex gap-2">
              <img src={ig} alt="" />
              <img src={x} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
              <div>
                <p className="text-lg">Products</p>
                <div className="flex flex-col space-y-2 text-white/80 hover:text-white mt-5">
                  <p>Features</p>
                <p>Pricing</p>
                <p>API</p>
                <p>Integration</p>
                </div>
              </div>

               <div>
                <p className="text-lg">Resources</p>
                <div className="flex flex-col space-y-2 text-white/80 hover:text-white mt-5">
                  <p>Documentation</p>
                <p>Help Center</p>
                <p>Case Studies</p>
                <p>Blog</p>
                </div>
              </div>

               <div>
                <p className="text-lg">Company</p>
                <div className="flex flex-col space-y-2 text-white/80 hover:text-white mt-5">
                  <p>About</p>
                <p>Career</p>
                <p>Contact</p>
                <p>Uses Cases</p>
                </div>
              </div>

               <div>
                <p className="text-lg">Legal</p>
                <div className="flex flex-col space-y-2 text-white/80 hover:text-white mt-5">
                  <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookie Policy</p>
                <p>Terms and Conditions</p>
                </div>
              </div>
              
            </div>

          </div>

         
        </div>

         <div className="border-t border-white md:w-[85%] mx-auto flex items-center justify-center py-8 gap-2 text-white/80">
          <Copyright size={18}/>
            <p>2025 Micro Coverage Tracking Tool. All rights reserved</p>
          </div>
    </div>
  )
}
