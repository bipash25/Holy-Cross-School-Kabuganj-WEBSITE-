import React from "react";
import MainNavigation from "./MainNavigation";
import HeroSection from "./HeroSection";
import QuickAccessGrid from "./QuickAccessGrid";
import NewsGrid from "./NewsGrid";
import { Calendar, Users, BookOpen, Phone } from "lucide-react";
import Footer from "./Footer";

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

      <Footer />
    </div>
  );
};

export default HomePage;
