/**
 * Graphic design work, grouped one card per client/project.
 *
 * Images live in `src/assets/designs/` as optimised webp; every item needs
 * `<id>.webp` (full size, lightbox) and `<id>-thumb.webp` (card preview).
 * To add work: drop both files in that folder and add the item to a project's
 * `items` array — or add a whole new project object, following the shape in the
 * commented example below.
 *
 * While `projects` is empty the design block shows an empty-state message.
 */
const files = import.meta.glob("../assets/designs/*.webp", {
  eager: true,
  import: "default",
});

const asset = (name) => files[`../assets/designs/${name}.webp`];

const projects = [
  // {
  //   id: "client-name",
  //   title: { ar: "اسم الزبون", en: "Client name" },
  //   kind: { ar: "نوع الشغل", en: "Kind of work" },
  //   desc: {
  //     ar: "وصف قصير للمجموعة.",
  //     en: "A short description of the set.",
  //   },
  //   items: [
  //     { id: "client-name-post-1", title: { ar: "عنوان التصميم", en: "Design title" } },
  //   ],
  // },
];

export const designProjects = projects.map((p) => ({
  ...p,
  items: p.items.map((it) => ({
    ...it,
    client: p.title,
    img: asset(it.id),
    thumb: asset(`${it.id}-thumb`),
  })),
}));
