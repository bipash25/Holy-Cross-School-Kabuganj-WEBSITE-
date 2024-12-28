import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "@/components/page";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Page
      title="404 - Page Not Found"
      description="The page you're looking for doesn't exist."
    >
      <div className="max-w-md mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-8xl font-bold text-primary">404</h2>
          <p className="text-lg text-muted-foreground">
            Oops! We couldn't find the page you were looking for.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
          <Button
            variant="default"
            className="gap-2"
            onClick={() => navigate("/")}
          >
            <Home className="h-4 w-4" />
            Return Home
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default NotFound;
