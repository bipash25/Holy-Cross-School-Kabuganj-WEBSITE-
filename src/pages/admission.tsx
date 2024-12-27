import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, ClipboardList, Info } from "lucide-react";

const Admission = () => {
  return (
    <Page
      title="Admission Procedures"
      description="Guide to admission process at Holy Cross School Kabuganj"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Admission Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Pre-Primary (Nursery to KG):</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Forms available: December</li>
                    <li>• Admission process: January-February</li>
                    <li>• Age criteria: 3+ to 5+ years</li>
                  </ul>
                </li>
                <li>
                  <strong>Primary & Secondary:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Forms available: February</li>
                    <li>• Admission test: March</li>
                    <li>• Results: Within 2 weeks</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" /> Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Completed application form</li>
                <li>• Birth certificate</li>
                <li>• Previous school records (if applicable)</li>
                <li>• Transfer certificate (for classes II onwards)</li>
                <li>• Passport size photographs</li>
                <li>• Address proof</li>
                <li>• Parent's ID proof</li>
                <li>• Medical fitness certificate</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5" /> Selection Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Pre-Primary</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Informal interaction with child</li>
                  <li>• Basic readiness assessment</li>
                  <li>• Parent interaction</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Primary & Secondary</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Written assessment</li>
                  <li>• Previous academic records</li>
                  <li>• Personal interview</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" /> Important Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Limited seats available</li>
              <li>• First-come-first-served basis for form distribution</li>
              <li>• Both parents should be present for the interview</li>
              <li>• Admission confirmation within specified timeframe</li>
              <li>• Fee payment deadline must be strictly followed</li>
              <li>• Original documents verification required</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default Admission;
