import React from "react";
import Page from "@/components/page";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Lightbulb } from "lucide-react";

const Vision = () => {
  return (
    <Page
      title="Our Vision"
      description="The guiding principles of Holy Cross School Kabuganj"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Eye className="w-8 h-8 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Vision Statement</h2>
                <p className="text-lg text-muted-foreground">
                  To be a leading educational institution that nurtures
                  excellence, fosters creativity, and builds character while
                  upholding moral values and preparing students for future
                  challenges.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Mission</h2>
                <p className="text-lg text-muted-foreground">
                  Our mission is to provide quality education that develops
                  intellectual, moral, and social capabilities of students,
                  enabling them to become responsible citizens and future
                  leaders.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li>• Fostering a culture of academic excellence</li>
                  <li>• Promoting holistic development</li>
                  <li>• Encouraging critical thinking and creativity</li>
                  <li>• Building strong moral character</li>
                  <li>• Creating future-ready global citizens</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default Vision;
