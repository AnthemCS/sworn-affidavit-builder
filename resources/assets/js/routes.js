import Home from "./components/home/Home.vue";
import Login from "./components/login/Login.vue";
import ProfileWrapper from "./components/profile/ProfileWrapper.vue";
import Profile from "./components/profile/Profile.vue";
import EditProfile from "./components/profile/edit-profile/EditProfile.vue";
import EditPassword from "./components/profile/edit-password/EditPassword.vue";
import DocumentBuilder from "./components/builder/DocumentBuilder";
import DocumentList from "./components/builder/DocumentList";
import DocumentViewer from "./components/builder/DocumentViewer";

export default [
  {
    path: "/",
    name: "index",
    component: Home,
    meta: {},
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: "/profile",
    component: ProfileWrapper,
    children: [
      {
        path: "",
        name: "profile",
        component: Profile,
        meta: { requiresAuth: true },
      },
      {
        path: "edit-profile",
        name: "profile.editProfile",
        component: EditProfile,
        meta: { requiresAuth: true },
      },
      {
        path: "edit-password",
        name: "profile.editPassword",
        component: EditPassword,
        meta: { requiresAuth: true },
      },
      {
        path: "*",
        redirect: {
          name: "profile",
        },
      },
    ],
  },
  {
    path: "/document-builder",
    component: DocumentBuilder,
    children: [
      {
        path: "",
        name: "documentList",
        component: DocumentList,
        meta: { requiresAuth: true },
      },
      {
        path: "viewer",
        name: "documentViewer",
        component: DocumentViewer,
        meta: { requiresAuth: true },
      },
    ],
  },
];
