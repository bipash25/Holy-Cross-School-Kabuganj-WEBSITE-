import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Bell, Calendar, MessageCircle } from "lucide-react";

const ParentInfo = () => {
  return (
    <Page
      title="Parent Information"
      description="Important guidelines and information for parents"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Academic Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Regular school days: Monday to Saturday</li>
                <li>• First term: April to September</li>
                <li>• Second term: October to March</li>
                <li>• Parent-teacher meetings: Quarterly</li>
                <li>• Examination schedules</li>
                <li>• Holiday calendar</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" /> Important Notices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Check school diary daily</li>
                <li>• Monitor homework completion</li>
                <li>• Regular attendance mandatory</li>
                <li>• Inform about absence in advance</li>
                <li>• Keep contact details updated</li>
                <li>• Follow proper uniform guidelines</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" /> Parent Involvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Regular Participation</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Attend parent-teacher meetings</li>
                  <li>• Support school activities</li>
                  <li>• Monitor academic progress</li>
                  <li>• Participate in school events</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Communication Channels</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• School diary notes</li>
                  <li>• Email notifications</li>
                  <li>• SMS alerts</li>
                  <li>• Parent portal access</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <strong>Academic Support:</strong>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>• Regular homework supervision</li>
                  <li>• Create conducive study environment</li>
                  <li>• Monitor screen time</li>
                </ul>
              </li>
              <li>
                <strong>Behavioral Guidance:</strong>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>• Encourage positive behavior</li>
                  <li>• Support school discipline</li>
                  <li>• Address concerns promptly</li>
                </ul>
              </li>
              <li>
                <strong>Health & Safety:</strong>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>• Ensure proper nutrition</li>
                  <li>• Adequate sleep schedule</li>
                  <li>• Regular health check-ups</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default ParentInfo;
