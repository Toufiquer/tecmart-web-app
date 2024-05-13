/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
const navData = {
  baseInfo: {
    firstName: "Tec",
    lastName: "Mart",
  },
  about: {
    groupTitle: "About",
    fullName: "Tec Mart",
    description: " The best service provider for your business growth.",
    links: [
      {
        id: 1,
        title: "Introduction",
        url: "/about#introduction",
        description: "We are a group of people to solve your problems",
      },
      {
        id: 2,
        title: "Installation",
        url: "/about#installation",
        description: "We have more then three plan for your business",
      },
      {
        id: 3,
        title: "Installation",
        url: "/about#installation",
        description: "We have more then three plan for your business",
      },
    ],
  },
  services: {
    groupTitle: "Services",
    data: [
      {
        title: "Alert Dialog",
        href: "/services",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Hover Card",
        href: "/services",
        description:
          "For sighted users to preview content available behind a link.",
      },
      {
        title: "Progress",
        href: "/services",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        title: "Scroll-area",
        href: "/services",
        description: "Visually or semantically separates content.",
      },
      {
        title: "Tabs",
        href: "/services",
        description:
          "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
      {
        title: "Tooltip",
        href: "/services",
        description:
          "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      },
    ],
  },
  othersLink: [
    { id: 1, title: "Project", url: "/project" },
    { id: 2, title: "Blog", url: "/blog" },
    { id: 3, title: "Contact", url: "/contact" },
    { id: 4, title: "Log In", url: "/logIn" },
  ],
};
export default navData;
