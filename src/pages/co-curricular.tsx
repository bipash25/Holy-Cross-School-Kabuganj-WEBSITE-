import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Palette, Trophy, Users } from "lucide-react";

const CoCurricular = () => {
  return (
    <Page
      title="Co-Curricular Activities"
      description="Enriching student life through diverse activities"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music className="w-5 h-5" /> Cultural Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Music:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Vocal training</li>
                    <li>• Instrumental classes</li>
                    <li>• School choir</li>
                  </ul>
                </li>
                <li>
                  <strong>Dance:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Classical dance</li>
                    <li>• Folk dance</li>
                    <li>• Contemporary styles</li>
                  </ul>
                </li>
                <li>
                  <strong>Drama:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Theater workshops</li>
                    <li>• Annual productions</li>
                    <li>• Street plays</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" /> Sports Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Indoor Sports:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Table Tennis</li>
                    <li>• Chess</li>
                    <li>• Carrom</li>
                  </ul>
                </li>
                <li>
                  <strong>Outdoor Sports:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Cricket</li>
                    <li>• Football</li>
                    <li>• Basketball</li>
                  </ul>
                </li>
                <li>
                  <strong>Athletics:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Track events</li>
                    <li>• Field events</li>
                    <li>• Annual sports meet</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" /> Creative Arts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Visual Arts</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Drawing classes</li>
                  <li>• Painting workshops</li>
                  <li>• Craft activities</li>
                  <li>• Art exhibitions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Literary Activities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Debate club</li>
                  <li>• Creative writing</li>
                  <li>• Poetry recitation</li>
                  <li>• School magazine</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Special Skills</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Public speaking</li>
                  <li>• Leadership training</li>
                  <li>• Environmental club</li>
                  <li>• Science club</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" /> Participation Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Students must participate in at least one activity</li>
              <li>• Regular attendance in chosen activities</li>
              <li>• Maintain balance with academics</li>
              <li>• Prior permission for competitions</li>
              <li>• Proper sports/activity uniform required</li>
              <li>• Achievement certificates awarded</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default CoCurricular;
