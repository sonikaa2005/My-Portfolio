const skillsData = [
  { id:1,  name:"HTML",         shortLabel:"HT", description:"Semantic markup, accessibility, page structure." },
  { id:2,  name:"CSS",          shortLabel:"CS", description:"Responsive layouts, animations, flexbox & grid." },
  { id:3,  name:"JavaScript",   shortLabel:"JS", description:"DOM, events, Fetch API, dynamic UIs." },
  { id:4,  name:"ReactJS",      shortLabel:"⚛",  description:"Component-based UIs, hooks, state management." },
  { id:5,  name:"Node.js",      shortLabel:"N",  description:"Backend applications and server-side logic." },
  { id:6,  name:"Express.js",   shortLabel:"Ex", description:"RESTful APIs, routing, middleware." },
  { id:7,  name:"MongoDB",      shortLabel:"Mg", description:"NoSQL data storage, Mongoose, aggregation." },
  { id:8,  name:"Java",         shortLabel:"Jv", description:"OOP concepts and application development." },
  { id:9,  name:"Python",       shortLabel:"Py", description:"ML implementations and scripting." },
  { id:10, name:"C",            shortLabel:"C",  description:"Procedural programming and problem-solving." },
  { id:11, name:"Tailwind CSS", shortLabel:"TW", description:"Responsive utility-first CSS framework." },
  { id:12, name:"Git & GitHub", shortLabel:"⌥",  description:"Version control, branching, 583+ commits." }
];

// appended
skillsData.push(
  { id:13, name:"Postman",  shortLabel:"PM", description:"API testing, collections, environment variables." },
  { id:14, name:"GitHub",   shortLabel:"GH", description:"Version control, repositories, 250+ commits." },
  { id:15, name:"Netlify",  shortLabel:"NL", description:"Frontend deployment, CI/CD, hosting." }
);
// remove old Git entry (id 12)
const gitIdx = skillsData.findIndex(s => s.id === 12);
if (gitIdx !== -1) skillsData.splice(gitIdx, 1);
