import React from "react";
import { Loader2 } from "lucide-react";

export const Loading = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
        <p className="text-lg text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};
