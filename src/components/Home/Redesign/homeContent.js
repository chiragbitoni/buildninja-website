export const homeFaqs = [
  {
    q: "Can I try BuildNinja before installing it?",
    a: "Yes. Dojo lets you explore sample projects and build workflows in a browser.",
  },
  {
    q: "Where does BuildNinja run?",
    a: "You host the CI/CD server and agents on infrastructure you manage. Installation options include Windows, Linux, macOS, and Docker.",
  },
  {
    q: "Does BuildNinja include AI?",
    a: "Yes. BuildNinja comes with AI. Eligible new accounts can claim 500,000 free AI credits, with prepaid top-ups available when needed.",
  },
  {
    q: "Does AI usage affect my builds?",
    a: "AI requests use a separate credit balance. At zero, new requests pause. An AI Runner step can affect the build result according to its configured failure threshold and server-error policy.",
  },
  {
    q: "Is AI processing self-hosted too?",
    a: "AI requests use an external service. The information submitted with a request is processed to generate the response. See the AI data policy for details.",
  },
];

export const comparisons = [
  { name: "GitHub Actions", slug: "github-actions", description: "Keep your code on GitHub while exploring a dedicated, self-hosted home for CI/CD." },
  { name: "CircleCI", slug: "circleci", description: "Compare deployment models, operating responsibility, and the costs that actually change." },
  { name: "Jenkins", slug: "jenkins", description: "Evaluate an integrated product beside the flexibility and maintenance of your Jenkins setup." },
  { name: "TeamCity", slug: "teamcity", description: "Compare self-hosted approaches using the agent capacity and workflow your team needs." },
];
