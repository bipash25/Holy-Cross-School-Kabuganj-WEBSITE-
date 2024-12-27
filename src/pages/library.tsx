import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Clock, Users, BookOpen } from "lucide-react";

const Library = () => {
  return (
    <Page
      title="School Library"
      description="A center for learning and literary exploration"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="w-5 h-5" /> Collection Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Over 10,000 books across various subjects</li>
                <li>• Reference books and encyclopedias</li>
                <li>• Educational magazines and journals</li>
                <li>• Digital resources and e-books</li>
                <li>• Academic study materials</li>
                <li>• Newspapers and periodicals</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" /> Library Hours & Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Timing</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Monday to Friday: 8:00 AM - 4:00 PM</li>
                    <li>• Saturday: 8:00 AM - 12:00 PM</li>
                    <li>• Reading Room: Open during school hours</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Rules</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Maintain silence</li>
                    <li>• Handle books with care</li>
                    <li>• Return books on time</li>
                    <li>• No food or drinks allowed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" /> Library Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">For Students</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Book borrowing facility</li>
                  <li>• Reading room access</li>
                  <li>• Research assistance</li>
                  <li>• Study space</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">For Teachers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Teaching resources</li>
                  <li>• Reference materials</li>
                  <li>• Curriculum support</li>
                  <li>• Research materials</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> Special Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Digital catalog system</li>
              <li>• Comfortable reading spaces</li>
              <li>• Regular book exhibitions</li>
              <li>• Literary events and competitions</li>
              <li>• New arrivals section</li>
              <li>• Subject-wise organization</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default Library;
