import React from "react";
import MainNavigation from "./MainNavigation";
import HeroSection from "./HeroSection";
import QuickAccessGrid from "./QuickAccessGrid";
import NewsGrid from "./NewsGrid";
import VirtualTour from "./VirtualTour";

interface HomePageProps {
  onMobileMenuClick?: () => void;
  onAdmissionsClick?: () => void;
  onVirtualTourClick?: () => void;
}

const HomePage = ({
  onMobileMenuClick = () => console.log("Mobile menu clicked"),
  onAdmissionsClick = () => console.log("Admissions clicked"),
  onVirtualTourClick = () => console.log("Virtual tour clicked"),
}: HomePageProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [virtualTourOpen, setVirtualTourOpen] = React.useState(false);

  return (
    <div className="min-h-screen w-full bg-background">
      <MainNavigation
        onMobileMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <main className="pt-20">
        <HeroSection
          onAdmissionsClick={onAdmissionsClick}
          onVirtualTourClick={() => setVirtualTourOpen(true)}
        />

        <div className="space-y-16 py-16">
          <QuickAccessGrid
            cards={[
              {
                title: "Virtual Tour",
                icon: <Video className="h-6 w-6" />,
                description: "Take a virtual tour of our campus and facilities",
                onClick: () => setVirtualTourOpen(true),
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
                icon: <GraduationCap className="h-6 w-6" />,
                description: "Get in touch with our admissions team",
                onClick: () => (window.location.href = "/contact"),
              },
            ]}
          />
          <NewsGrid />
        </div>
      </main>

      <VirtualTour open={virtualTourOpen} onOpenChange={setVirtualTourOpen} />

      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p>123 School Street</p>
              <p>City, State 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@school.edu</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
            <p>
              &copy; {new Date().getFullYear()} School Name. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
