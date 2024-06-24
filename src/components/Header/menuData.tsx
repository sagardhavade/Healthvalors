import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },

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

      {
        id: 42,
        title: "IVF Care",
        path: "/ivfCare",
        newTab: false,
      },
      {
        id: 43,
        title: "Oncology",
        path: "/oncology",
        newTab: false,
      },
      {
        id: 44,
        title: "Medical College Software",
        path: "/medicalClgSw",
        newTab: false,
      },
      {
        id: 45,
        title: "Dialysis Management",
        path: "/dailysis",
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

  {
    id: 33,
    title: "Career",
    path: "/career",
    newTab: false,
  },

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
];
export default menuData;
