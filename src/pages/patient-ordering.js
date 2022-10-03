import React from "react";
import Layout from "../components/Layout";

function PatientOrderingPage() {
  return (
    <Layout>
      <iframe
        title="Patient Ordering"
        src="https://form.typeform.com/to/plEJSG?typeform-embed-id=6232477151743505&amp;typeform-embed=embed-widget&amp;typeform-source=localhost&amp;typeform-medium=embed-sdk&amp;typeform-medium-version=next"
        data-testid="iframe"
        allow="microphone; camera"
        style={{ width: "100%", height: "80vh", border: "none" }}
      ></iframe>
    </Layout>
  );
}

export default PatientOrderingPage;

