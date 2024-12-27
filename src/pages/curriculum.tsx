import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Brain, Award, Users } from "lucide-react";

const Curriculum = () => {
  return (
    <Page
      title="Curriculum"
      description="Academic curriculum and learning approach at HCSK"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="w-5 h-5" /> Core Subjects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• English Language and Literature</li>
                <li>• Mathematics</li>
                <li>• Science (Physics, Chemistry, Biology)</li>
                <li>• Social Studies</li>
                <li>• Hindi/Regional Language</li>
                <li>• Computer Science</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" /> Teaching Methodology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Interactive learning sessions</li>
                <li>• Project-based learning</li>
                <li>• Smart classroom technology</li>
                <li>• Practical demonstrations</li>
                <li>• Regular assessments</li>
                <li>• Remedial classes</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" /> Academic Programs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Primary Section (I-V)</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Foundation in basic subjects</li>
                  <li>• Activity-based learning</li>
                  <li>• Language development</li>
                  <li>• Basic mathematics</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Middle Section (VI-VIII)</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Advanced core subjects</li>
                  <li>• Introduction to sciences</li>
                  <li>• Computer education</li>
                  <li>• Project work</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Secondary Section (IX-X)</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Board exam preparation</li>
                  <li>• Specialized subjects</li>
                  <li>• Career guidance</li>
                  <li>• Practical training</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" /> Additional Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Co-Curricular Activities</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Sports and games</li>
                  <li>• Music and dance</li>
                  <li>• Art and craft</li>
                  <li>• Debates and elocution</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Life Skills Education</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Leadership training</li>
                  <li>• Environmental awareness</li>
                  <li>• Health and wellness</li>
                  <li>• Community service</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default Curriculum;
