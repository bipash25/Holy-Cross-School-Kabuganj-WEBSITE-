import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, Bell, Info } from "lucide-react";

const Timing = () => {
  return (
    <Page
      title="School Timing"
      description="Daily schedule and important timings for HCSK students"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" /> Regular School Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    Summer Timing (April - September)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• School Start: 7:30 AM</li>
                    <li>• Assembly: 7:30 AM - 7:45 AM</li>
                    <li>• Classes: 7:45 AM - 1:30 PM</li>
                    <li>• Short Break: 10:00 AM - 10:15 AM</li>
                    <li>• Lunch Break: 11:30 AM - 12:00 PM</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Winter Timing (October - March)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• School Start: 8:30 AM</li>
                    <li>• Assembly: 8:30 AM - 8:45 AM</li>
                    <li>• Classes: 8:45 AM - 2:30 PM</li>
                    <li>• Short Break: 11:00 AM - 11:15 AM</li>
                    <li>• Lunch Break: 12:30 PM - 1:00 PM</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Office Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Monday to Friday: 8:00 AM - 4:00 PM</li>
                <li>• Saturday: 8:00 AM - 12:00 PM</li>
                <li>• Fee Counter: 8:30 AM - 1:30 PM</li>
                <li>• Principal Meeting Hours: 11:00 AM - 1:00 PM</li>
                <li>• Administrative Office: 8:00 AM - 3:00 PM</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" /> Special Activity Timings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Sports Activities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Morning Practice: 6:30 AM - 7:30 AM</li>
                  <li>• Evening Practice: 3:30 PM - 5:00 PM</li>
                  <li>• Saturday Sports: 8:00 AM - 11:00 AM</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Extra Classes</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Remedial Classes: 2:30 PM - 3:30 PM</li>
                  <li>• Special Coaching: By Appointment</li>
                  <li>• Library Hours: 8:00 AM - 4:00 PM</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" /> Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Students should arrive 10 minutes before assembly</li>
              <li>• Late arrival must be reported to the class teacher</li>
              <li>
                • Parents should pick up students within 30 minutes after school
                ends
              </li>
              <li>• School gates close 15 minutes after dismissal</li>
              <li>
                • Special arrangements must be made for after-school activities
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default Timing;
