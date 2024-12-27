import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, BookOpen, Users, GraduationCap, Phone } from "lucide-react";

interface QuickAccessCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  onClick?: () => void;
}

const QuickAccessCard = ({
  title,
  icon,
  description,
  onClick,
}: QuickAccessCardProps) => {
  return (
    <Card
      className="cursor-pointer transition-all hover:scale-105"
      onClick={onClick}
    >
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2 text-lg">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

interface QuickAccessGridProps {
  cards?: Array<{
    title: string;
    icon: React.ReactNode;
    description: string;
    onClick?: () => void;
  }>;
}

const QuickAccessGrid = ({ cards }: QuickAccessGridProps) => {
  const defaultCards = [
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
      onClick: () => (window.location.href = "/apply"),
    },
    {
      title: "Contact Us",
      icon: <Phone className="h-6 w-6" />,
      description: "Get in touch with our admissions team",
      onClick: () => (window.location.href = "/contact"),
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayCards.map((card, index) => (
          <QuickAccessCard
            key={index}
            title={card.title}
            icon={card.icon}
            description={card.description}
            onClick={card.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickAccessGrid;
