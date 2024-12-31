import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { ArrowRight, School } from "lucide-react";

interface HeroSectionProps {
  slides?: Array<{
    imageUrl: string;
    title: string;
    description: string;
  }>;
  onAdmissionsClick?: () => void;
}

const defaultSlides = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920",
    title: "Holy Cross School Kabuganj",
    description:
      "Empowering minds and shaping futures through excellence in education",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920",
    title: "State-of-the-Art Facilities",
    description:
      "Modern classrooms and advanced learning resources for student success",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1920",
    title: "Vibrant Campus Life",
    description:
      "Diverse activities and enriching experiences for holistic development",
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({
  slides = defaultSlides,
  onAdmissionsClick = () => (window.location.href = "/admission"),
}) => {
  return (
    <div className="w-full h-[600px] relative bg-background">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="w-full h-[600px] relative overflow-hidden">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-8">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-2xl">
                    {slide.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 hidden md:flex" />
      </Carousel>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center px-4">
        <Button
          size="lg"
          onClick={onAdmissionsClick}
          className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 w-full md:w-auto transform hover:scale-105 transition-all duration-300"
        >
          <School className="mr-2 h-5 w-5" />
          Start Your Application
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
