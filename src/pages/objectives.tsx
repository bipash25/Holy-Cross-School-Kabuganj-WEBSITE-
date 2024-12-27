import React from "react";
import Page from "@/components/page";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const objectives = [
  {
    title: "Academic Excellence",
    description:
      "To provide high-quality education that promotes academic excellence and critical thinking.",
  },
  {
    title: "Character Development",
    description:
      "To nurture moral values, ethics, and strong character in our students.",
  },
  {
    title: "Holistic Growth",
    description:
      "To ensure all-round development through a balance of academic, sports, and cultural activities.",
  },
  {
    title: "Technology Integration",
    description:
      "To integrate modern technology and innovative teaching methods in education.",
  },
  {
    title: "Life Skills",
    description:
      "To develop essential life skills and leadership qualities in students.",
  },
  {
    title: "Community Engagement",
    description:
      "To foster a sense of social responsibility and community service.",
  },
  {
    title: "Global Perspective",
    description:
      "To prepare students for global challenges while maintaining local values.",
  },
  {
    title: "Parent Partnership",
    description:
      "To maintain strong collaboration between parents and school for student development.",
  },
];

const Objectives = () => {
  return (
    <Page
      title="Our Objectives"
      description="Key objectives that drive Holy Cross School Kabuganj"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {objectives.map((objective, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {objective.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            These objectives guide our educational approach and help us maintain
            our commitment to excellence in education.
          </p>
        </div>
      </div>
    </Page>
  );
};

export default Objectives;
