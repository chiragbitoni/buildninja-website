import { paths } from "./paths";

export const supportHeroText = {
  heading: "We’re Here to Help You Build Without Roadblocks",
  subheading:
    "Whether you have a question, need technical help, or want to learn more our team is just a message away.",
  getHelp: "Get Help",
  helpText: "We’re here to help you succeed with BuildNinja",
  options: [
    {
      icon: paths.icons.emailBlue,
      alt:"Grapecity blue email icon",
      title: "Email Support",
      // desc: "hello@grapehub.io",
      linkText: "hello@grapehub.io",
      mail: true,
    },
    {
      icon: paths.icons.documentpurple,
      alt:"Grapecity purple document icon",
      title: "Documentation",
      desc: "Browse guides and tutorials",
      linkText: "View Documentation →",
      mail: false,
      link: `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/overview`,
    },
  ],
  form: {
    title: "Contact Us",
    fields: {
      name: "Your Name",
      email: "Email Address",
      subject: "Subject",
      message: "Message",
    },
    button: "Send",
  },
};
