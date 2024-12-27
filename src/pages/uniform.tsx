import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Uniform = () => {
  return (
    <Page
      title="School Uniform"
      description="Official uniform guidelines for HCSK students"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Boys Uniform</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Summer Uniform</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• White shirt with school logo</li>
                    <li>• Navy blue trousers</li>
                    <li>• Black shoes with white socks</li>
                    <li>• School belt with logo</li>
                    <li>• School tie (house color)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Winter Uniform</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Navy blue sweater/blazer with school logo</li>
                    <li>• White shirt with school logo</li>
                    <li>• Navy blue trousers</li>
                    <li>• Black shoes with navy blue socks</li>
                    <li>• School tie and belt</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Girls Uniform</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Summer Uniform</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• White shirt with school logo</li>
                    <li>• Navy blue pinafore/skirt</li>
                    <li>• Black shoes with white socks</li>
                    <li>• School belt with logo</li>
                    <li>• School tie (house color)</li>
                    <li>• Hair ribbons in house color</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Winter Uniform</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Navy blue sweater/blazer with school logo</li>
                    <li>• White shirt with school logo</li>
                    <li>• Navy blue pinafore/skirt</li>
                    <li>• Black shoes with navy blue socks</li>
                    <li>• School tie and belt</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sports Uniform</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• House color T-shirt with school logo</li>
              <li>• Navy blue track pants</li>
              <li>• White sports shoes with white socks</li>
              <li>• House color cap (optional)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>General Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Uniforms must be clean and well-maintained</li>
              <li>• Proper school shoes must be worn at all times</li>
              <li>• School ID card is mandatory</li>
              <li>• Hair should be neat and properly groomed</li>
              <li>• No jewelry except small earrings for girls</li>
              <li>• Nails should be trimmed and clean</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default Uniform;
