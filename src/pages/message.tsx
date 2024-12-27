import React from "react";
import Page from "@/components/page";
import { Card, CardContent } from "@/components/ui/card";

const Message = () => {
  return (
    <Page
      title="Principal's Message"
      description="A welcome message from our school principal"
    >
      <Card className="max-w-4xl mx-auto">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=principal"
              alt="Principal"
              className="w-48 h-48 rounded-full mx-auto md:mx-0"
            />
            <div className="prose dark:prose-invert">
              <p className="lead">Dear Parents, Students, and Visitors,</p>
              <p>
                Welcome to Holy Cross School Kabuganj. As the Principal, it
                gives me immense pleasure to lead this prestigious institution
                that has been shaping young minds and building future leaders.
              </p>
              <p>
                At HCSK, we believe in providing a holistic education that goes
                beyond textbooks. Our focus is on nurturing not just academic
                excellence, but also character, creativity, and leadership
                skills.
              </p>
              <p>
                We invite you to explore our school and discover the unique
                learning environment we offer to our students.
              </p>
              <p className="font-semibold mt-4">
                Best regards,
                <br />
                Principal Name
                <br />
                Principal, HCSK
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Page>
  );
};

export default Message;
