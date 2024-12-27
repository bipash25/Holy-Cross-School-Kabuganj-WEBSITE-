import React from "react";
import Layout from "./layout";

interface PageProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Page = ({ title, description, children }: PageProps) => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-xl text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </div>
    </Layout>
  );
};

export default Page;
