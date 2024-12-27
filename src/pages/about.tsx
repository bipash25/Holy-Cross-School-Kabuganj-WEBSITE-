import React from "react";
import Page from "@/components/page";

const About = () => {
  return (
    <Page
      title="About Us"
      description="Learn about Holy Cross School Kabuganj's rich history and tradition"
    >
      <div className="prose dark:prose-invert max-w-none">
        <p className="lead">
          Holy Cross School Kabuganj (HCSK) is a prestigious educational
          institution committed to providing quality education and fostering
          academic excellence.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2>Our History</h2>
            <p>
              Founded with a vision to provide quality education, Holy Cross
              School Kabuganj has been serving the community for many years,
              establishing itself as a center of academic excellence and
              character building.
            </p>
          </div>

          <div>
            <h2>Our Mission</h2>
            <p>
              We are dedicated to nurturing young minds, fostering creativity,
              and building strong character while maintaining high academic
              standards and moral values.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2>Core Values</h2>
          <ul>
            <li>Excellence in Education</li>
            <li>Character Development</li>
            <li>Moral Values</li>
            <li>Community Service</li>
            <li>Innovation and Creativity</li>
          </ul>
        </div>
      </div>
    </Page>
  );
};

export default About;
