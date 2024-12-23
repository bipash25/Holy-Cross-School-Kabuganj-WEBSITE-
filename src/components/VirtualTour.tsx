import React from "react";
import { Pannellum } from "pannellum-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface VirtualTourProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const tourSpots = [
  {
    id: 1,
    title: "Main Campus Entrance",
    image:
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=1200&q=80",
    description:
      "Welcome to our main entrance, featuring modern architecture and landscaping.",
  },
  {
    id: 2,
    title: "Library",
    image:
      "https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80",
    description:
      "Our state-of-the-art library features extensive resources and study spaces.",
  },
  {
    id: 3,
    title: "Science Lab",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80",
    description: "Modern science labs equipped with the latest technology.",
  },
];

const VirtualTour = ({ open = true, onOpenChange }: VirtualTourProps) => {
  const [currentSpot, setCurrentSpot] = React.useState(0);

  const handleNext = () => {
    setCurrentSpot((prev) => (prev + 1) % tourSpots.length);
  };

  const handlePrevious = () => {
    setCurrentSpot((prev) => (prev - 1 + tourSpots.length) % tourSpots.length);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full h-[80vh]">
        <DialogHeader>
          <DialogTitle>{tourSpots[currentSpot].title}</DialogTitle>
        </DialogHeader>

        <div className="relative h-full w-full">
          <Pannellum
            width="100%"
            height="500px"
            image={tourSpots[currentSpot].image}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            onLoad={() => {
              console.log("panorama loaded");
            }}
          />

          <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4">
            <Button
              variant="secondary"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <p className="text-sm text-white bg-black/50 px-4 py-2 rounded-full">
              {tourSpots[currentSpot].description}
            </p>

            <Button
              variant="secondary"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VirtualTour;
