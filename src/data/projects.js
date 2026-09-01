/**
 * Web projects — placeholder entries, replace them with your own.
 *
 * To add one: copy an entry and fill it in — the grid grows on its own.
 * `status` is "live" for client work that is published, or "concept" for
 * self-initiated demo builds.
 * `shot` is an optional screenshot import; leave it out and the card falls back
 * to the uniform browser mockup built from `brand`.
 *
 * Leave the array empty ([]) to hide the websites block entirely.
 */
export const webProjects = [
  {
    id: "project-one",
    name: "Project One",
    title: { ar: "المشروع الأول", en: "Project One" },
    kind: { ar: "نوع المشروع", en: "Project type" },
    status: "live",
    desc: {
      ar: "وصف قصير للمشروع بسطرين — شنو بنيتوا، ولمنو، وشنو المميز بيه.",
      en: "A short two-line description of the project — what you built, who for, and what makes it stand out.",
    },
    tags: {
      ar: ["الوسم الأول", "الوسم الثاني", "الوسم الثالث"],
      en: ["Tag one", "Tag two", "Tag three"],
    },
    url: "https://example.com/",
    domain: "example.com",
    brand: { from: "#A78BFA", to: "#5B21B6" },
  },
  {
    id: "project-two",
    name: "Project Two",
    title: { ar: "المشروع الثاني", en: "Project Two" },
    kind: { ar: "نوع المشروع", en: "Project type" },
    status: "live",
    desc: {
      ar: "وصف قصير للمشروع بسطرين — شنو بنيتوا، ولمنو، وشنو المميز بيه.",
      en: "A short two-line description of the project — what you built, who for, and what makes it stand out.",
    },
    tags: {
      ar: ["الوسم الأول", "الوسم الثاني"],
      en: ["Tag one", "Tag two"],
    },
    url: "https://example.com/",
    domain: "example.com",
    brand: { from: "#38BDF8", to: "#1E3A8A" },
  },
  {
    id: "project-three",
    name: "Project Three",
    title: { ar: "المشروع الثالث", en: "Project Three" },
    kind: { ar: "نوع المشروع", en: "Project type" },
    status: "concept",
    desc: {
      ar: "مشروع من فكرتكم، تعرضون بيه أسلوبكم بدون زبون حقيقي.",
      en: "A self-initiated build that shows your style without a real client behind it.",
    },
    tags: {
      ar: ["الوسم الأول", "الوسم الثاني"],
      en: ["Tag one", "Tag two"],
    },
    url: "https://example.com/",
    domain: "example.com",
    brand: { from: "#F472B6", to: "#9D174D" },
  },
];
