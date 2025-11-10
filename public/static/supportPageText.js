import { paths } from "./paths";

export const heroSectionText = {
  title: "We’re Here to Help You Build Without Roadblocks",
  subtitle:
    "Whether you have a question, need technical help, or want to learn more our team is just a message away.",
  column1: {
    title: "Get Help",
    subTitle: "We're here to help you suceed with BuildNinja",
    list: [
      {
        icon: paths.icons.emailBlue,
        title: "Email Support",
        description: "hello@grapehub.io",
      },
      {
        icon: paths.icons.documentpurple,
        title: "Documentation",
        description: "Browse guides and tutorials",

      },
    ],
  },
  form: {
    title: "Contact Us",
    name: {
      label: "Your Name",
      placeholder: "Enter your name",
    },
    email: {
      label: "Email Address",
      placeholder: "Enter your email address",
    },
    sbject: {
      label: "Subject",
      placeholder: "How can we help?",
    },
    message: {
      label: "Message",
      placeholder: "Tell us more about your question or issue...",
    },
    chekbox: "I'm not a robot",
    button: "Send",
  },
};

export const supportHeroText = {
  heading: "Get in Touch with BuildNinja Support",
  subheading:
    "Whether you have a question, need technical help, or want to learn more — our team is just a message away.",
  getHelp: "Get Help",
  helpText: "We’re here to help you succeed with BuildNinja",
  options: [
    {
      icon: paths.icons.emailBlue,
      title: "Email Support",
      // desc: "hello@grapehub.io",
      linkText: "hello@grapehub.io",
      mail:true,
    },
    {
      icon: paths.icons.documentpurple,
      title: "Documentation",
      desc: "Browse guides and tutorials",
      linkText: "View Documentation →",
      mail:false,
    },
    
    {
      icon: paths.icons.recorderRed,
      title: "Video Tutorials",
      desc: "Watch setup guides",
      linkText: "Watch Tutorials →",
      mail:false,
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