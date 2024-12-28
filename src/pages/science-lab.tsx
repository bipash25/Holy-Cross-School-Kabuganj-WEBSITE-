import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Beaker, ShieldAlert, Microscope } from "lucide-react";

const ScienceLab = () => {
  return (
    <Page
      title="Science Laboratory"
      description="Well-equipped laboratories for practical science education"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Beaker className="w-5 h-5" /> Chemistry Lab
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Modern workstations</li>
                <li>• Chemical storage facility</li>
                <li>• Safety equipment</li>
                <li>• Analytical instruments</li>
                <li>• Demonstration table</li>
                <li>• Fume hood</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="w-5 h-5" /> Biology Lab
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Microscopes</li>
                <li>• Specimen collections</li>
                <li>• Models and charts</li>
                <li>• Dissection kits</li>
                <li>• Slides collection</li>
                <li>• Plant study area</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Beaker className="w-5 h-5" /> Physics Lab
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Physics apparatus</li>
                <li>• Electrical equipment</li>
                <li>• Mechanics tools</li>
                <li>• Optical instruments</li>
                <li>• Measurement devices</li>
                <li>• Digital equipment</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" /> Safety Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">General Rules</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Wear lab coats and safety gear</li>
                  <li>• No food or drinks allowed</li>
                  <li>• Follow teacher's instructions</li>
                  <li>• Report accidents immediately</li>
                  <li>• Keep workspace clean</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Emergency Procedures</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• First aid protocols</li>
                  <li>• Emergency exits</li>
                  <li>• Fire safety measures</li>
                  <li>• Chemical spill procedures</li>
                  <li>• Emergency contact numbers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lab Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Chemistry Experiments</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Chemical reactions</li>
                  <li>• Titrations</li>
                  <li>• Salt analysis</li>
                  <li>• Organic chemistry</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Biology Practicals</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Microscopy</li>
                  <li>• Plant studies</li>
                  <li>• Dissections</li>
                  <li>• Cell biology</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Physics Experiments</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Mechanics</li>
                  <li>• Optics</li>
                  <li>• Electricity</li>
                  <li>• Sound and waves</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default ScienceLab;
