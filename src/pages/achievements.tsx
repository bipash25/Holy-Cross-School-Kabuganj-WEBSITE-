import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, GraduationCap, Medal, Star } from "lucide-react";

const achievements = [
  {
    year: "2023",
    academic: [
      "100% pass rate in Board Examinations",
      "5 students in State Merit List",
      "District topper in Science stream",
    ],
    sports: [
      "State Level Cricket Championship Winners",
      "Inter-school Athletics Meet - Overall Champions",
      "District Level Basketball Runners-up",
    ],
    cultural: [
      "First Prize in State Level Cultural Festival",
      "Winners of Inter-school Dance Competition",
      "Best School Award in Youth Festival",
    ],
  },
  {
    year: "2022",
    academic: [
      "98% students scored above 75% in finals",
      "National Science Olympiad - 3 Gold Medals",
      "Best Academic Performance Award",
    ],
    sports: [
      "Regional Football Championship Winners",
      "State Level Table Tennis - Gold Medal",
      "Inter-school Sports Meet Champions",
    ],
    cultural: [
      "National Level Art Competition - First Prize",
      "State Drama Festival - Best Performance",
      "Classical Dance Competition Winners",
    ],
  },
];

const Achievements = () => {
  return (
    <Page
      title="Our Achievements"
      description="Celebrating excellence in academics, sports, and cultural activities"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {achievements.map((year) => (
          <div key={year.year} className="space-y-6">
            <h2 className="text-2xl font-bold">Year {year.year}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" /> Academic Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {year.academic.map((achievement, index) => (
                      <li key={index}>• {achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" /> Sports Champions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {year.sports.map((achievement, index) => (
                      <li key={index}>• {achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" /> Cultural Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {year.cultural.map((achievement, index) => (
                      <li key={index}>• {achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Medal className="w-5 h-5" /> Special Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Best School Award by State Education Department</li>
              <li>• Excellence in Co-curricular Activities Recognition</li>
              <li>• Outstanding Infrastructure Award</li>
              <li>• Best Sports Facility Recognition</li>
              <li>• Environmental Consciousness Award</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default Achievements;
