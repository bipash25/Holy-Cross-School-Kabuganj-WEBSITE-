import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

interface NewsGridProps {
  news?: NewsItem[];
}

const defaultNews: NewsItem[] = [
  {
    id: "1",
    title: "Academic Excellence Awards 2024",
    description:
      "Celebrating our students outstanding achievements in academics and extracurricular activities.",
    date: "March 15, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80",
  },
  {
    id: "2",
    title: "New STEM Lab Opening",
    description:
      "State-of-the-art facility enhancing our science and technology programs.",
    date: "March 10, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&q=80",
  },
  {
    id: "3",
    title: "Sports Team Championship",
    description:
      "Our varsity basketball team secured the regional championship title.",
    date: "March 5, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&q=80",
  },
  {
    id: "4",
    title: "Arts Festival Success",
    description: "Student artwork showcase receives community acclaim.",
    date: "March 1, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=500&q=80",
  },
];

const NewsGrid = ({ news = defaultNews }: NewsGridProps) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Latest News & Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="p-0">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600 mb-2">
                  {item.description}
                </CardDescription>
                <p className="text-xs text-gray-400">{item.date}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsGrid;
