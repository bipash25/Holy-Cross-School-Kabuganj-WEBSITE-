import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, Award, ClipboardCheck } from "lucide-react";

const Examinations = () => {
  return (
    <Page
      title="Examinations & Promotions"
      description="Comprehensive guide to our examination system and promotion policies"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Examination Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Unit Tests:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Conducted monthly</li>
                    <li>• Duration: 1 hour</li>
                    <li>• Marks: 25</li>
                  </ul>
                </li>
                <li>
                  <strong>Term Examinations:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Half-yearly (September-October)</li>
                    <li>• Final (March)</li>
                    <li>• Duration: 3 hours</li>
                    <li>• Marks: 100</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> Assessment Pattern
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Theory Examination:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Written tests</li>
                    <li>• Objective questions</li>
                    <li>• Descriptive answers</li>
                  </ul>
                </li>
                <li>
                  <strong>Practical Assessment:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Lab work</li>
                    <li>• Project evaluation</li>
                    <li>• Viva-voce</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" /> Promotion Criteria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Academic Requirements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Minimum 33% in each subject</li>
                  <li>• Overall aggregate of 40%</li>
                  <li>• Pass in all core subjects</li>
                  <li>• Practical clearance required</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Additional Criteria</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 75% attendance mandatory</li>
                  <li>• Completion of assignments</li>
                  <li>• Disciplinary clearance</li>
                  <li>• Fee clearance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5" /> Important Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• No retest for missed examinations without valid reason</li>
              <li>• Medical certificate required for exam absence</li>
              <li>• Parents will be notified of poor performance</li>
              <li>• Remedial classes for students scoring below 40%</li>
              <li>• Report cards issued after each term examination</li>
              <li>• Parent-teacher meeting after result declaration</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default Examinations;
