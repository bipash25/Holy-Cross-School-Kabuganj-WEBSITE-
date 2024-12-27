import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarDays,
  FileText,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const Leaves = () => {
  return (
    <Page
      title="Leave Policy"
      description="Guidelines for student attendance and leave applications"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5" /> Types of Leaves
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Sick Leave:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Maximum 15 days per academic year</li>
                    <li>• Medical certificate required for more than 2 days</li>
                    <li>• Parent notification mandatory</li>
                  </ul>
                </li>
                <li>
                  <strong>Casual Leave:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Maximum 10 days per academic year</li>
                    <li>• Prior application required</li>
                    <li>• Cannot be combined with holidays</li>
                  </ul>
                </li>
                <li>
                  <strong>Long Leave:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Special permission required</li>
                    <li>• Must be applied 15 days in advance</li>
                    <li>• Subject to principal's approval</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" /> Application Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Short Leave (1-2 days):</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Written application to class teacher</li>
                    <li>• Parent's signature required</li>
                    <li>• Submit one day in advance</li>
                  </ul>
                </li>
                <li>
                  <strong>Extended Leave (3+ days):</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Formal application to principal</li>
                    <li>• Supporting documents needed</li>
                    <li>• Personal meeting may be required</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" /> Important Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Minimum 75% attendance required for promotion</li>
              <li>• Leaves during exams are strongly discouraged</li>
              <li>• Regular attendance impacts academic performance</li>
              <li>• Unauthorized absence may lead to disciplinary action</li>
              <li>• Parents must inform school about emergency leaves</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Leave Application Format
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                Your leave application should include:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li>• Student's full name and class</li>
                <li>• Duration of leave with dates</li>
                <li>• Reason for leave</li>
                <li>• Parent's contact information</li>
                <li>• Supporting documents (if applicable)</li>
                <li>• Parent's signature</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default Leaves;
