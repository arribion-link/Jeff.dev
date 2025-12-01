// Define the type for a single nav link
type NavLink = {
  id: number;
  label: string;
  path: string;
};

const navLinks: NavLink[] = [
  {
    id: 1,
    label: "Overview",
    path: "/overview",
  },
  {
    id: 2,
    label: "Project",
    path: "/about",
  },
  {
    id: 3,
    label: "Work",
    path: "/contact",
  },
  {
    id: 3,
    label: "Certification",
    path: "/contact",
  },
  {
    id: 3,
    label: "Skills",
    path: "/contact",
  },
  {
    id: 3,
    label: "Blog",
    path: "/contact",
  },
  {
    id: 3,
    label: "Courses",
    path: "/contact",
  },
  {
    id: 3,
    label: "Archive",
    path: "/contact",
  },
];

// Define the type for a social link
type SocialLink = {
  id: number;
  label: string;
  path: string;
};

const socialLinks: SocialLink[] = [
  {
    id: 1,
    label: "Twitter",
    path: "https://twitter.com/yourhandle",
  },
  {
    id: 2,
    label: "LinkedIn",
    path: "https://linkedin.com/in/yourprofile",
  },
  {
    id: 3,
    label: "GitHub",
    path: "https://github.com/yourusername",
  },
];


export default {
    navLinks,
    socialLinks
}