import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  // {
  //   id: 2,
  //   title: "About",
  //   path: "/about",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 21,
  //       title: "Infrastructure",
  //       path: "/infrastructure",
  //       newTab: false,
  //     },
  //     {
  //       id: 22,
  //       title: "Gallery",
  //       path: "/gallery",
  //       newTab: false,
  //     },
  //   ],
  // },
  {
    id: 2,
    title: "Profile",
    newTab: false,
    submenu: [
      {
        id: 20,
        title: "About",
        path: "/about",
        newTab: false,
      },
      {
        id: 21,
        title: "Infrastructure",
        path: "/infrastructure",
        newTab: false,
      },
      // {
      //   id: 22,
      //   title: "Gallery",
      //   path: "/gallery",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 4,
    title: "Product",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "HIMS",
        path: "/hims",
        newTab: false,
      },
      // {
      //   id: 42,
      //   title: "Home Care Solution",
      //   path: "/homecare",
      //   newTab: false,
      // },
      // {
      //   id: 43,
      //   title: "Telemedicine Solution",
      //   path: "/telemedicine",
      //   newTab: false,
      // },
      // {
      //   id: 44,
      //   title: "Rural Health",
      //   path: "/ruralHealth",
      //   newTab: false,
      // },
      {
        id: 42,
        title: "IVF Care",
        path: "/homecare",
        newTab: false,
      },
      {
        id: 43,
        title: "Oncology",
        path: "/telemedicine",
        newTab: false,
        // submenu: [
        //   {
        //     id: 441,
        //     title: "Raditation Therapy",
        //     newTab: false,
        //   },
        //   {
        //     id: 442,
        //     title: "Chemo Therapy",
        //     newTab: false,
        //   },
        // ],
      },
      {
        id: 44,
        title: "Medical College Software",
        path: "/ruralHealth",
        newTab: false,
      },
      {
        id: 45,
        title: "Dialysis Management",
        path: "/ruralHealth",
        newTab: false,
      },
      {
        id: 46,
        title: "Public Health",
        path: "/ruralHealth",
        newTab: false,
      },
    ],
  },
  // {
  //   id: 33,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 33,
    title: "Career",
    path: "/career",
    newTab: false,
  },
  // {
  //   id: 3,
  //   title: "Enquiry",
  //   path: "/enquiry",
  //   newTab: false,
  // },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "+91 902 10 23456",
    path: "#",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //     {
  //       id: 49,
  //       title: "HIMS",
  //       path: "/hims",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
