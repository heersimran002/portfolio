import { SlLink } from "react-icons/sl";
import { ReactNode } from "react";

interface ProjectList {
  id: string;
  position: "left" | "right";
  image: string;
  title: string;
  subtitle: string | ReactNode;
  chips: { id: string; name: string }[];
  buttons: { id: string; name: string; redirect: string; icon: ReactNode }[];
}

export const projectList: ProjectList[] = [
  {
    id: "1",
    title: "Amazon clone",
    subtitle:
      "Full stack build using React, Firebase, Router, React Context API, Stripe.js, Tailwind CSS, Material-UI. Features: Accounts and Login Page Products Page Cart, Checkout Page, Real and  Order History Page",
    image: "/amazon-main.jpg",
    chips: [
      { id: "1", name: "React" },
      { id: "2", name: "Tailwind CSS" },
      { id: "4", name: "Firebase" },
      { id: "3", name: "Stripe.js" },
      { id: "4", name: "Material UI" },
    ],
    buttons: [
      {
        id: "1",
        name: "Visit",
        redirect: "https://clone-36b38.web.app/",
        icon: null,
      },
      {
        id: "2",
        name: "Github",
        redirect:
          "https://github.com/heersimran002/Projects/tree/master/amazon-clone",
        icon: null,
      },
    ],
    position: "left",
  },
  {
    id: "2",
    title: "Netflix clone",
    subtitle:
      "Created a netflix clone by successfully implementing API calls and learned to use Material Ui. It displays the trailer fetching data from youtube API",
    image: "/project_image.jpg",
    chips: [
      { id: "1", name: "React" },
      { id: "2", name: "Material Ui" },
      { id: "3", name: "Firebase" },
    ],
    buttons: [
      {
        id: "1",
        name: "Visit",
        redirect: "https://netflix-website-48dca.web.app/",
        icon: null,
      },
      {
        id: "2",
        name: "Github",
        redirect:
          "https://github.com/heersimran002/Projects/tree/master/netflix/netflix-clone",
        icon: null,
      },
    ],
    position: "right",
  },
  {
    id: "3",
    title: "Croatia Restaurant Website(capstone)",
    subtitle:
      "Fully functinal PHP capstone project with CMS, Order Placement, Add to Cart functionality along with order and invoice information",
    image: "/capstone.jpg",
    chips: [
      { id: "1", name: "PHP" },
      { id: "2", name: "MySQL" },
      { id: "4", name: "Css 5" },
      { id: "3", name: "Javascript" },
    ],
    buttons: [
      {
        id: "1",
        name: "Visit",
        redirect: "http://simran.top/index.php",
        icon: null,
      },
      {
        id: "2",
        name: "BitBucket",
        redirect:
          "https://bitbucket.org/heersimran002/project_capstone/src/master/",
        icon: null,
      },
    ],
    position: "left",
  },
  {
    id: "4",
    title: "Automech Engineering",
    subtitle:
      "A portfolio website made using Omnivous Theme and pluings that met clients requirements while working at Appstrack Innovations",
    image: "/automekk.jpg",
    chips: [{ id: "1", name: "WordPress" }],
    buttons: [
      {
        id: "1",
        name: "Visit",
        redirect: "https://automechengineering.in/",
        icon: null,
      },
    ],
    position: "right",
  },
  {
    id: "5",
    title: "Salon Surf",
    subtitle:
      "A portfolio website made using quomodosoft Theme and elementor,redux framework pluings that met clients requirements while working at Appstrack Innovations",
    image: "/salonsurf.jpg",
    chips: [{ id: "1", name: "WordPress" }],
    buttons: [
      {
        id: "1",
        name: "Visit",
        redirect: "https://website.salonsurf.in/",
        icon: null,
      },
    ],
    position: "left",
  },
  {
    id: "6",
    title: "Luzo App",
    subtitle:
      "Built API using laravel and contributed in the UI/UX while working with Appstrack innovations. Features: Book appointments, browse services, browse offers, reschedule/cancel appointments, etc. at different salons  ",
    image: "/Luzo.jpg",
    chips: [
      { id: "1", name: "Laravel" },
      { id: "2", name: "HTML 5" },
      { id: "4", name: "Css 5" },
      { id: "3", name: "Javascript" },
      { id: "3", name: "Figma" },
    ],
    buttons: [
      {
        id: "1",
        name: "Visit",
        redirect:
          "https://apps.apple.com/in/app/salonsurf/id1594592604?platform=iphone",
        icon: null,
      },
    ],
    position: "right",
  },
  {
    id: "7",
    title: "Expense Tracker",
    subtitle:
      "A basic react project made to add expense and view data of the expenses through the months and filtered by years",
    image: "/expense_tracker.jpg",
    chips: [{ id: "1", name: "React" }],
    buttons: [
      {
        id: "1",
        name: "Visit",
        redirect: "https://expensetracker-bb6a0.web.app/",
        icon: null,
      },
      {
        id: "2",
        name: "Github",
        redirect:
          "https://github.com/heersimran002/Projects/tree/master/react/my-app",
        icon: null,
      },
    ],
    position: "left",
  },
];
