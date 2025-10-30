import { Link } from "react-router-dom";
import { Battery, Leaf, Zap, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Battery className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-glow">EV RESQ</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your EV's Hero on Wheels ⚡ Fast, Smart & Sustainable Rescue.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/request-rescue" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Request Rescue
                </Link>
              </li>
              <li>
                <Link to="/driver-portal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Become a Driver
                </Link>
              </li>
              <li>
                <Link to="/ar-vr-demo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AR/VR Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Values */}
          <div>
            <h3 className="font-semibold mb-4">Our Values</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Sustainable</span>
              </div>
              <div className="flex items-center gap-2">
                <Battery className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Reliable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 EV RESQ | Powered by Innovation ⚡ Driven by Purpose 🌱
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
