import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo-nav.png";


export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Classes", to: "/classes" },
    { name: "Pricing", to: "/pricing" },
    { name: "Contact", to: "/contact" },
  ];

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 transition-colors cursor-pointer ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block w-full text-left px-3 py-2 transition-colors cursor-pointer ${
      isActive
        ? "text-blue-600 bg-blue-50"
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
        
      <Link to="/" className="cursor-pointer flex items-center gap-2">
        <img
          src={logo}      
          alt="English with Gladys"
          className="h-9 w-auto"
        />
        <span className="font-semibold text-blue-600 hidden sm:inline">
          English with Gladys
        </span>
      </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={desktopLinkClass}
                end={item.to === "/"} // makes Home active only on "/"
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={mobileLinkClass}
                end={item.to === "/"}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
