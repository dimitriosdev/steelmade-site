import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Αρχική",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Εταιρία",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Projects",
    newTab: false,
    path: "/projects",
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "Επικοινωνία",
    newTab: false,
    path: "/contact",
  },
];

export default menuData;
