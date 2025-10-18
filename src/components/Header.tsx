import { Menu, X } from "lucide-react";
import logo from "../assets/mctt_logo.svg";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DemoRequestModal from "./DemoRequestModal";

export default function Header() {
  const navLinks = [
    { name: "About", href: "#plan-smarter" },
    { name: "Features", href: "#comprehensive" },
    { name: "Use Cases", href: "#trusted-by" },
  ];

  const [open, setOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === "#") return;
    
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      
      // Close mobile menu if open
      if (open) {
        setOpen(false);
      }
    }
  };

  useEffect(() => {
    if (open) {
      setShouldRender(true);
    }
  }, [open]);

  useEffect(() => {
    if (shouldRender && menuRef.current) {
      if (open) {
        // Animate menu in
        gsap.fromTo(
          menuRef.current,
          {
            opacity: 0,
            y: -20,
            height: 0,
          },
          {
            opacity: 1,
            y: 0,
            height: "auto",
            duration: 0.4,
            ease: "power2.out",
          }
        );

        // Animate links with stagger
        gsap.fromTo(
          menuRef.current.querySelectorAll("a"),
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.1,
            delay: 0.2,
            ease: "power2.out",
          }
        );
      } else {
        // Animate links out first
        gsap.to(menuRef.current.querySelectorAll("a"), {
          opacity: 0,
          x: -20,
          duration: 0.2,
          stagger: 0.05,
          ease: "power2.in",
        });

        // Then animate menu out
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          delay: 0.15,
          ease: "power2.in",
          onComplete: () => {
            setShouldRender(false);
          },
        });
      }
    }
  }, [open, shouldRender]);

  return (
    <>
      <div className="bg-primary relative">
        <div className="lg:w-[90%] mx-auto flex justify-between items-center h-20 lg:px-0 px-5">
          <div className="flex items-center">
            <img src={logo} alt="logo" />
          </div>
          <div className="lg:flex justify-between items-center gap-5 hidden">
            <div>
              <nav className="flex space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <DemoRequestModal>
                <Button className="rounded bg-blue-500 hover:bg-blue-500/90 transition-colors">
                  Request a Demo
                </Button>
              </DemoRequestModal>
            </div>
          </div>
          <div className="lg:hidden block text-white">
            <Menu
              size={24}
              className={`${open ? "hidden" : "block"}`}
              onClick={() => setOpen(!open)}
            />
            <X
              size={24}
              className={`${!open ? "hidden" : "block"} float-end`}
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>

      {shouldRender && (
        <div
          ref={menuRef}
          className="bg-primary min-h-40 top-20 z-50 rounded-b-lg text-white absolute w-[100%] shadow p-6  lg:hidden block opacity-0"
        >
          <div className="flex flex-col space-x-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="transition-colors opacity-0 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}