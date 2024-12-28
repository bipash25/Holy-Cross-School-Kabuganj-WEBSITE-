import React from "react";
import MainNavigation from "./MainNavigation";
import HeroSection from "./HeroSection";
import QuickAccessGrid from "./QuickAccessGrid";
import NewsGrid from "./NewsGrid";
import { Calendar, Users, BookOpen, Phone } from "lucide-react";

interface HomePageProps {
  onMobileMenuClick?: () => void;
  onAdmissionsClick?: () => void;
}

const HomePage = ({
  onMobileMenuClick = () => console.log("Mobile menu clicked"),
  onAdmissionsClick = () => console.log("Admissions clicked"),
}: HomePageProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen w-full bg-background">
      <MainNavigation
        onMobileMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <main className="pt-20">
        <HeroSection onAdmissionsClick={onAdmissionsClick} />

        <div className="space-y-16 py-16">
          <QuickAccessGrid
            cards={[
              {
                title: "Academics",
                icon: <BookOpen className="h-6 w-6" />,
                description: "Explore our academic programs and curriculum",
                onClick: () => (window.location.href = "/academics"),
              },
              {
                title: "Visit Us",
                icon: <Calendar className="h-6 w-6" />,
                description: "Schedule a campus visit or attend an open house",
                onClick: () => (window.location.href = "/visit"),
              },
              {
                title: "Apply Now",
                icon: <Users className="h-6 w-6" />,
                description: "Start your application process today",
                onClick: onAdmissionsClick,
              },
              {
                title: "Contact Us",
                icon: <Phone className="h-6 w-6" />,
                description: "Get in touch with our admissions team",
                onClick: () => (window.location.href = "/contact"),
              },
            ]}
          />
          <NewsGrid />
        </div>
      </main>

      <footer className="bg-muted py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">
                Contact Us
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>123 School Street</p>
                <p>City, State 12345</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@school.edu</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">
                Connect With Us
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Holy Cross School Kabuganj. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
