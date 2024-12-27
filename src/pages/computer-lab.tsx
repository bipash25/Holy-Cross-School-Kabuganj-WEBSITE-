import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Cpu, Code, Shield } from "lucide-react";

const ComputerLab = () => {
  return (
    <Page
      title="Computer Laboratory"
      description="State-of-the-art computer facilities for digital learning"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5" /> Infrastructure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 40 modern computer workstations</li>
                <li>• High-speed internet connectivity</li>
                <li>• Interactive smartboard</li>
                <li>• Multimedia projector</li>
                <li>• Printing and scanning facilities</li>
                <li>• Air-conditioned environment</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="w-5 h-5" /> Technical Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Latest Intel processors</li>
                <li>• Windows 11 operating system</li>
                <li>• MS Office suite</li>
                <li>• Programming software</li>
                <li>• Educational software</li>
                <li>• Graphics design tools</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" /> Curriculum Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Primary Level</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Basic computer operations</li>
                  <li>• MS Paint and drawing</li>
                  <li>• Typing skills</li>
                  <li>• Internet basics</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Secondary Level</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Advanced MS Office</li>
                  <li>• Basic programming</li>
                  <li>• Web design basics</li>
                  <li>• Digital literacy</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" /> Lab Rules & Safety
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• No food or drinks allowed</li>
              <li>• Handle equipment with care</li>
              <li>• Follow internet usage policy</li>
              <li>• Save work in designated folders</li>
              <li>• Report technical issues immediately</li>
              <li>• Maintain cleanliness</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default ComputerLab;
