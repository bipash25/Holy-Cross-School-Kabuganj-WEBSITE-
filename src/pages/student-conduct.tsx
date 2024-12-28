import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, AlertTriangle, Award } from "lucide-react";

const StudentConduct = () => {
  return (
    <Page
      title="Student Code of Conduct"
      description="Guidelines for student behavior and discipline"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" /> General Conduct
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Maintain discipline in school premises</li>
                <li>• Show respect to teachers and staff</li>
                <li>• Be punctual and regular in attendance</li>
                <li>• Wear proper school uniform</li>
                <li>• Keep the campus clean</li>
                <li>• Follow classroom etiquette</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" /> Daily Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Complete homework on time</li>
                <li>• Maintain school diary</li>
                <li>• Bring required books and materials</li>
                <li>• Participate in morning assembly</li>
                <li>• Follow class schedules</li>
                <li>• Keep belongings organized</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Disciplinary Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Prohibited Behavior</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bullying or harassment</li>
                  <li>• Use of mobile phones</li>
                  <li>• Damaging school property</li>
                  <li>• Using unfair means in exams</li>
                  <li>• Fighting or violent behavior</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Consequences</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Verbal warning</li>
                  <li>• Written warning</li>
                  <li>• Parent notification</li>
                  <li>• Suspension</li>
                  <li>• Disciplinary committee action</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" /> Recognition & Rewards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <strong>Academic Excellence:</strong>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>• Scholar badges</li>
                  <li>• Merit certificates</li>
                  <li>• Special mentions in assembly</li>
                </ul>
              </li>
              <li>
                <strong>Good Conduct:</strong>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>• Best behavior awards</li>
                  <li>• Leadership opportunities</li>
                  <li>• Positive feedback to parents</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default StudentConduct;
