import React from "react";
import "./benefits.css";

const Benefits = () => {
  return (
    <React.Fragment>
      <h1 className="benefitHeading">
        Benefits Of&nbsp;<span> Choosing Us</span>
      </h1>
      <div className="mainGrid">
        <div className="benefit">
          <img
            src="https://treact.owaiskhan.me/static/media/shield-icon.daefe14b320b14fbd9cbd18908ac93ec.svg"
            alt="Convenience"
          />
          <h2>Convenience</h2>
          <p>Access courses anytime, anywhere, and learn at your own pace.</p>
        </div>

        <div className="benefit">
          <img
            src="https://treact.owaiskhan.me/static/media/support-icon.f9253ffa8cb6ffde5bbaa05eb5136375.svg"
            alt="Wide Selection"
          />
          <h2>Wide Selection</h2>
          <p>
            Choose from a diverse range of courses tailored to your interests
            and needs
          </p>
        </div>

        <div className="benefit">
          <img
            src="https://treact.owaiskhan.me/static/media/customize-icon.367468c90fd796009b97fbfba67b2c6a.svg"
            alt="Expert Instructors"
          />
          <h2>Expert Instructors</h2>
          <p>
            Learn from industry experts and professionals in their respective
            fields.
          </p>
        </div>

        <div className="benefit">
          <img
            src="https://treact.owaiskhan.me/static/media/reliable-icon.1367510a8f0a1bec76dc425d25f92f43.svg"
            alt="Interactive Learning"
            className="extra"
          />
          <h2>Interactive Learning</h2>
          <p>
            Engage with multimedia content, quizzes, and assignments for an
            immersive experience.
          </p>
        </div>

        <div className="benefit">
          <img
            src="https://treact.owaiskhan.me/static/media/fast-icon.dbb971a73d4805d2fc3bcdacdb55beba.svg"
            alt="Cost-Effective"
          />
          <h2>Cost-Effective</h2>
          <p>
            Save money on travel and traditional classroom expenses with
            affordable online courses.
          </p>
        </div>

        <div className="benefit">
          <img
            src="https://treact.owaiskhan.me/static/media/simple-icon.673b7e1750b2a4ef32907fc164828d00.svg"
            alt="Lifetime Access"
          />
          <h2>Lifetime Access</h2>
          <p>
            Enjoy unlimited access to course materials and updates, ensuring
            continuous learning.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Benefits;
