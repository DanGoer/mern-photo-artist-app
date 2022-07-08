import writepostimage from "./images/writepostimage.svg";
import writestoryimage from "./images/writestoryimage.svg";

// Route-links for NavBar

export const navLinks = [
  { name: "Blog", link: "/" },
  { name: "Gallerie", link: "/gallery" },
  { name: "Stories", link: "/stories" },
  { name: "Kontakt", link: "/contact" },
  { name: "Impressum", link: "/impressum" },
];

// Social-icon list for NavBar and Impressum

export const socialIconsList = [
  {
    name: "Facebook",
    viewBox: "0 0 512 512",
    svg: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
    link: "https://www.facebook.com/an.na.988711/",
    alt: "Facebook Profil link",
  },
  {
    name: "Instagram",
    viewBox: "0 0 448 512",
    svg: "M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z",
    link: "https://www.instagram.com/annegoergens/",
    alt: "Instagram Profil link",
  },
  {
    name: "Email",
    viewBox: "0 0 512 512",
    svg: "M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z",
    link: "mailto:goergensjoa@gmail.com",
    alt: "Send email button",
  },
  {
    name: "Lokalkompass",
    viewBox: "0 0 482 482",
    svg: "M474.119,230.046L324.665,179.78l54.482-67.083c1.668-2.048,1.511-5.014-0.356-6.874c-1.858-1.858-4.824-2.017-6.865-0.354l-68.451,55.597L251.967,7.878C250.386,3.172,245.972,0,241.005,0c-4.968,0-9.381,3.172-10.963,7.878l-51.508,153.18l-68.45-55.597c-2.04-1.662-5.005-1.504-6.874,0.354c-1.858,1.859-2.017,4.826-0.356,6.875l54.482,67.09L7.883,230.046c-4.707,1.581-7.879,5.995-7.879,10.962c0,4.968,3.172,9.381,7.879,10.963l152.79,51.382l-57.82,71.179c-1.661,2.049-1.502,5.023,0.356,6.881c1.86,1.86,4.826,2.009,6.874,0.349l69.828-56.713l50.131,149.075c1.583,4.705,5.995,7.877,10.963,7.877c4.967,0,9.381-3.172,10.962-7.877L302.1,325.048l69.826,56.713c2.041,1.66,5.015,1.512,6.874-0.349c1.859-1.857,2.017-4.84,0.356-6.881l-57.819-71.179l152.783-51.382c4.706-1.582,7.878-5.995,7.878-10.963C481.996,236.041,478.824,231.627,474.119,230.046z M434.142,241.008H274.937l34.154-42.055L434.142,241.008z M241.005,47.854v163.952l-43.306-35.175L241.005,47.854z M47.857,241.008h159.199l2.127,2.611l-32.944,40.56L47.857,241.008z M241.005,434.147V275.431l41.921,34.052L241.005,434.147z",
    link: "https://www.lokalkompass.de/oberhausen/profile-52533/achim-goergens?type=article",
    alt: "Lokalkompass Profil link",
  },
];

// Data for SubTexts

export const subtexts = {
  contact: "Wir helfen dir gerne weiter, schreib uns!",
  impressum: "Rechtliche Informationen und Hinweise",
  gallery:
    '"Mach sichtbar, was vielleicht ohne dich nie wahrgenommen worden wäre." - Robert Bresson',
  home: '"Bilder, welche Du gemacht hast haben Einfluss auf die, welche du machen wirst. So ist das Leben!" – John Sexton',
  stories:
    "“Worte und Bilder kommunizieren gemeinsam viel stärker als alleine.” – William Albert Allard",
  write: "Der richtige Ort um deine Kreativität auszuleben",
  writepost: "Erstell einen neuen Blog-Eintrag",
  writestory: "Erstell eine neue Story",
  login: "Willkommen zurück!",
};

// Data for WriteCards in Write

export const write = [
  {
    id: 1,
    url: "/writepost",
    title: "Blog-Eintrag",
    text: "Füge ein Bild mit Titel und Text zum Blog hinzu.",
    icon: writepostimage,
  },
  {
    id: 2,
    url: "/writestory",
    title: "Story",
    text: "Erstell eine neue Story mit Titelbild und einem Album.",
    icon: writestoryimage,
  },
];

// Firebase base Url for storage

export const firebaseBaseUrl =
  "https://firebasestorage.googleapis.com/v0/b/ago-photography.appspot.com/o/";

// Backend server address

const server = "https://ago-photography.herokuapp.com/";
//const server = "http://localhost:8080/";

// Server side addresslist for API requests
// [0] = Gallery route (/ = post, /:id = get, delete, /photos = get )
// [1] = Gallery upload photo route (/ = post)
// [2] = Posts route (/ = get, /:id = get,  /:id = delete, /:id = put)
// [3] = Post upload photo route (/ = post)
// [4] = Singlestory photo route (/ = get, post)
// [5] = Singlestory upload photo route (/ = post)
// [6] = Singlestory route (/ = get, /:id = get, delete)

export const apiroutes = [
  {
    id: 0,
    url: `${server}api/gallery/`,
  },
  {
    id: 1,
    url: `${server}api/uploadgallery/`,
  },
  {
    id: 2,
    url: `${server}api/posts/`,
  },
  {
    id: 3,
    url: `${server}api/uploadpost/`,
  },
  {
    id: 4,
    url: `${server}api/stories/photos/`,
  },
  {
    id: 5,
    url: `${server}api/uploadstory/`,
  },
  {
    id: 6,
    url: `${server}api/stories/story/`,
  },
  {
    id: 7,
    url: `${server}api/contact/`,
  },
  {
    id: 8,
    url: `${server}api/gallery/photos/`,
  },
];
