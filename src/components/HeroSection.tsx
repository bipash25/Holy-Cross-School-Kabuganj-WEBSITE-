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
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    title: "Welcome to Our School",
    description:
      "Empowering minds and shaping futures through excellence in education",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    title: "State-of-the-Art Facilities",
    description:
      "Modern classrooms and advanced learning resources for student success",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45",
    title: "Vibrant Campus Life",
    description:
      "Diverse activities and enriching experiences for holistic development",
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({
  slides = defaultSlides,
  onAdmissionsClick = () => console.log("Admissions clicked"),
}) => {
  return (
    <div className="w-full h-[600px] relative bg-white">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="w-full h-[600px] relative">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
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
          className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto"
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
