import React from "react";
import Page from "@/components/page";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  {
    category: "Campus Life",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc",
    ],
  },
  {
    category: "Academic Activities",
    images: [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754",
      "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    ],
  },
  {
    category: "Sports Events",
    images: [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      "https://images.unsplash.com/photo-1526676037777-05a232554f77",
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7",
      "https://images.unsplash.com/photo-1526676338312-3a658c8d2d1a",
    ],
  },
  {
    category: "Cultural Programs",
    images: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212",
    ],
  },
];

const Gallery = () => {
  return (
    <Page title="Photo Gallery" description="Moments captured at HCSK">
      <div className="max-w-7xl mx-auto space-y-12">
        {galleryImages.map((category) => (
          <div key={category.category} className="space-y-4">
            <h2 className="text-2xl font-bold">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.images.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={image}
                      alt={`${category.category} ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default Gallery;
