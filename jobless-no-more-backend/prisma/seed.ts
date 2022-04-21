import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const freelanceUsers: Prisma.freelanceUserCreateInput[] = [
  {
    email: "desintila@email.com",
    firstName: "Desintila",
    lastName: "Luzi",
    location: "Tirane, Albania",
    password: bcrypt.hashSync("desintila", 8),
    bio: "My name is Desintila Luzi and I am a junior graphic designer from Albania.I am proficient in Adobe Photoshop and Illustrator.",
    savedJobs: {connect: [{id: 1}, {id: 2}]}
  },
  {
    email: "artiola@email.com",
    firstName: "Artiola",
    lastName: "Caka",
    location: "Tirane, Albania",
    password: bcrypt.hashSync("artiola", 8),
    image: "https://avatars.dicebear.com/api/avataaars/artiola.svg",
    totalReceived: 200,
  },
  {
    email: "besim@email.com",
    firstName: "Besim",
    lastName: "Sokoli",
    location: "Rahovec, Kosovo",
    password: bcrypt.hashSync("besim", 8),
    image: "https://avatars.dicebear.com/api/avataaars/besim.svg",
    totalReceived: 100,
    bio: "Extremely passionate about technology, working on all major Software platforms. Like to code/Python and Java",
  },
  {
    email: "endi@email.com",
    firstName: "Endi",
    lastName: "Ymeri",
    location: "Tirane, Albania",
    password: bcrypt.hashSync("endi", 8),
    image: "https://avatars.dicebear.com/api/avataaars/endi.svg",
    totalReceived: 600,
    bio: "Front-end and web enthusiast with a few months of development experience. My goal is to broaden my knowledge and skills and learn best industry practices by working with experienced people in a professional environment.",
  },
  {
    email: "fjona@email.com",
    firstName: "Fjona",
    lastName: "Meta",
    location: "Tirane, Albania",
    password: bcrypt.hashSync("fjona", 8),
    image: "https://avatars.dicebear.com/api/avataaars/fjona.svg",
    bio: "As a lawyer, I offer a combination of expertise in blockchain technology, smart contracts, legal consulting, and tax law.",
  },
  {
    email: "jona@email.com",
    firstName: "Jona",
    lastName: "Mera",
    location: "Tirane, Albania",
    password: bcrypt.hashSync("jona", 8),
    image: "https://avatars.dicebear.com/api/avataaars/jona.svg",
    totalReceived: 800,
    bio: "I am prepared to put time and effort as necessary. My goals are to use the knowledge, the skills that I have acquired and exceed industry expectations.I have noticed during my experience in my previous job, I have great leadership abilities and organizational skills. I enjoy helping people as I can.",
  },
];

const clientUsers: Prisma.clientUserCreateInput[] = [
  {
    email: "denis@email.com",
    firstName: "Denis",
    lastName: "Luzi",
    location: "Tirane, Albania",
    password: bcrypt.hashSync("denis", 8),
    paymentVerified: true,
    image: "https://avatars.dicebear.com/api/avataaars/denis.svg",
    totalSpend: 200,
    rating: 4,
  },
  {
    email: "arita@email.com",
    firstName: "Arita",
    lastName: "Osmani",
    location: "Prishtine, Kosovo",
    password: bcrypt.hashSync("arita", 8),
    image: "https://avatars.dicebear.com/api/avataaars/arita.svg",
    totalSpend: 300,
    rating: 2,
  },
  {
    email: "ani@email.com",
    firstName: "Ani",
    lastName: "Koni",
    location: "Tirane, Albania",
    password: bcrypt.hashSync("ani", 8),
    paymentVerified: true,
  },
  {
    email: "john@email.com",
    firstName: "John",
    lastName: "Tim",
    location: "England, Uk",
    password: bcrypt.hashSync("john", 8),
    paymentVerified: true,
    image: "https://avatars.dicebear.com/api/avataaars/john.svg",
    totalSpend: 900,
    rating: 5,
  },
];

const difficulties: Prisma.DifficultyCreateInput[] = [
  {
    name: "Entry level",
  },
  {
    name: "Intermediate",
  },
  {
    name: "Expert",
  },
];

const categories: Prisma.CategoryCreateInput[] = [
  {
    name: "IT & Networking",
  },
  {
    name: "Legal",
  },
  {
    name: "Design & Creative",
  },
  {
    name: "Sales & Marketing",
  },
];
const jobs: Prisma.jobCreateInput[] = [
  {
    title: "Webpage in HTML/CSS",
    content:
      "I have a figma, requires few hours of work, HTML/CSS. I need someone who speak English please so that I am able to work with her/him. This is a start of bigger project but need someone who is committed and deliver fast with Quality",
    location: "Worlwide",
    Category: { connect: { name: "IT & Networking" } },
    difficulty: { connect: { name: "Intermediate" } },
    clientUser: { connect: { email: "denis@email.com" } },
    published: true,
    duration: {
      connectOrCreate: {
        where: { name: "Short Term / Part Time" },
        create: { name: "Short Term / Part Time" },
      },
    },
  },
  {
    title: "Edit Html web page",
    content:
      "I need someone who can perfectly edit and fix some details in our web page.        ",
    location: "Albania",
    Category: { connect: { name: "IT & Networking" } },
    difficulty: { connect: { name: "Entry level" } },
    clientUser: { connect: { email: "arita@email.com" } },
    published: true,
    duration: {
      connectOrCreate: {
        where: { name: "Short Term / Part Time" },
        create: { name: "Short Term / Part Time" },
      },
    },
  },
  {
    title: "Letter head, business card, flyer creation ",
    content:
      "I already have a logo i just need it resized for letter head, then a business card and flyer creation.",
    location: "Worlwide",
    Category: { connect: { name: "Design & Creative" } },
    difficulty: { connect: { name: "Intermediate" } },
    clientUser: { connect: { email: "ani@email.com" } },
    published: true,
    duration: {
      connectOrCreate: {
        where: { name: "Short Term / Part Time" },
        create: { name: "Short Term / Part Time" },
      },
    },
  },
  {
    title: "Creation of HTML templates responsive !!",
    content:
      "Looking for a front-end dev, templates creator who will be able to recreate a couple of specific HTML templates.Thanks,Daniel",
    location: "France",
    Category: { connect: { name: "IT & Networking" } },
    difficulty: { connect: { name: "Intermediate" } },
    clientUser: { connect: { email: "denis@email.com" } },
    published: true,
    duration: {
      connectOrCreate: {
        where: { name: "Long Term / Dedicated" },
        create: { name: "Long Term / Dedicated" },
      },
    },
  },
  {
    title: "UK legal adviser (liquidation/strike off)",
    content: "Small question regarding liquidation procedures in the UK",
    location: "UK",
    Category: { connect: { name: "Legal" } },
    difficulty: { connect: { name: "Expert" } },
    clientUser: { connect: { email: "john@email.com" } },
    published: true,
    duration: {
      connectOrCreate: {
        where: { name: "Long Term / Dedicated" },
        create: { name: "Long Term / Dedicated" },
      },
    },
  },
  {
    title: "Translation of a Legal Doc from Spanish to Chinese",
    content:
      "Translator needed to work on a Code of Ethics. Languages: Spanish to Chinese (PRC). Word count: 5365. When proposing, please point your price per word for translation services. Do you work in CAT tools?",
    location: "Worlwide",
    Category: { connect: { name: "Legal" } },
    difficulty: { connect: { name: "Intermediate" } },
    clientUser: { connect: { email: "ani@email.com" } },
    published: true,
    duration: {
      connectOrCreate: {
        where: { name: "Long Term / Dedicated" },
        create: { name: "Long Term / Dedicated" },
      },
    },
  },
  {
    title: "Graphic Designer/ Brand Identity",
    content:
      "We are looking to hire someone with strong graphic design and brand visual identity skills to help us do a mini refresh of our brand identity.We are in active talks with brand agencies and are NOT looking to hire a brand agency at this time. We are looking for an individual freelancer who can help with a few components (mainly graphic design related) elements of a brand refresh.",
    location: "Albania",
    Category: { connect: { name: "Design & Creative" } },
    difficulty: { connect: { name: "Expert" } },
    clientUser: { connect: { email: "ani@email.com" } },
    published: true,
    duration: {
      connectOrCreate: {
        where: { name: "Long Term / Dedicated" },
        create: { name: "Long Term / Dedicated" },
      },
    },
  },
  {
    title: "Alibaba Orders is now hiring!!",
    content:
      "The task here is to assist Amazon internet shopping platform merchants in improving their sales rankings. You can receive a cash incentive for assisting in the accomplishment this activity.",
    location: "Worlwide",
    Category: { connect: { name: "Sales & Marketing" } },
    difficulty: { connect: { name: "Entry level" } },
    clientUser: { connect: { email: "john@email.com" } },
    published: true,
    duration: {
      connectOrCreate: {
        where: { name: "Long Term / Dedicated" },
        create: { name: "Long Term / Dedicated" },
      },
    },
  },
];

const proposals: Prisma.ProposalCreateInput[] = [
  {
    frelanceUser: { connect: { email: "desintila@email.com" } },
    job: { connect: { id: 3 } },
  },
  {
    frelanceUser: { connect: { email: "fjona@email.com" } },
    job: { connect: { id: 5 } },
  },
  {
    frelanceUser: { connect: { email: "besim@email.com" } },
    job: { connect: { id: 1 } },
  },
  {
    frelanceUser: { connect: { email: "fjona@email.com" } },
    job: { connect: { id: 6 } },
  },
  {
    frelanceUser: { connect: { email: "endi@email.com" } },
    job: { connect: { id: 2 } },
  },
];

const skills: Prisma.SkillCreateInput[] = [
  {
    name: "HTML5",
    freelanceUsers: {
      connect: [
        { email: "besim@email.com" },
        { email: "endi@email.com" },
        { email: "artiola@email.com" },
      ],
    },
    jobs: { connect: [{ id: 1 }, { id: 2 }, { id: 4 }] },
  },
  {
    name: "CSS3",
    freelanceUsers: {
      connect: [
        { email: "besim@email.com" },
        { email: "endi@email.com" },
        { email: "artiola@email.com" },
      ],
    },
    jobs: { connect: [{ id: 1 }, { id: 2 }, { id: 4 }] },
  },
  {
    name: "Logo Design",
    freelanceUsers: { connect: { email: "desintila@email.com" } },
    jobs: { connect: [{ id: 3 }, { id: 7 }] },
  },
  {
    name: "Flyer Design",
    freelanceUsers: { connect: { email: "desintila@email.com" } },
    jobs: { connect: [{ id: 3 }, { id: 7 }] },
  },
  {
    name: "Orders Processing",
    freelanceUsers: { connect: { email: "jona@email.com" } },
    jobs: { connect: [{ id: 8 }] },
  },
  {
    name: "Purchase Orders",
    freelanceUsers: { connect: { email: "jona@email.com" } },
    jobs: { connect: [{ id: 8 }] },
  },
  {
    name: "Legal Consulting",
    freelanceUsers: { connect: { email: "fjona@email.com" } },
    jobs: { connect: [{ id: 5 }, { id: 6 }] },
  },
  {
    name: "Legal Services",
    freelanceUsers: { connect: { email: "fjona@email.com" } },
    jobs: { connect: [{ id: 5 }, { id: 6 }] },
  },
];
const educations: Prisma.EducationCreateInput[] = [
  {
    institute: "Tirana University",
    profileOfStudies: "IT",
    fromYear: 2017,
    endYear: 2020,
    freelanceUser: { connect: { email: "endi@email.com" } },
  },
  {
    institute: "Tirana University",
    profileOfStudies: "Web Developer",
    fromYear: 2018,
    endYear: 2021,
    freelanceUser: { connect: { email: "desintila@email.com" } },
  },
  {
    institute: "Prishtina University",
    profileOfStudies: "Computer Science",
    fromYear: 2018,
    endYear: 2021,
    freelanceUser: { connect: { email: "besim@email.com" } },
  },
  {
    institute: "Tirana University",
    profileOfStudies: "Web Developer",
    fromYear: 2017,
    endYear: 2021,
    freelanceUser: { connect: { email: "artiola@email.com" } },
  },
];
const languages: Prisma.LanguageCreateInput[] = [
  {
    languageName: "English",
    freelanceUser: {
      connect: [
        { email: "desintila@email.com" },
        { email: "endi@email.com" },
        { email: "artiola@email.com" },
        { email: "besim@email.com" },
      ],
    },
  },
  {
    languageName: "French",
    freelanceUser: {
      connect: [
        { email: "desintila@email.com" },
        { email: "endi@email.com" },
        { email: "besim@email.com" },
      ],
    },
  },
  {
    languageName: "German",
    freelanceUser: {
      connect: [
        { email: "desintila@email.com" },
        { email: "artiola@email.com" },
        { email: "besim@email.com" },
      ],
    },
  },

  {
    languageName: "Italian",
    freelanceUser: {
      connect: [
        { email: "endi@email.com" },
        { email: "artiola@email.com" },
        { email: "besim@email.com" },
      ],
    },
  },
];



async function createStuff() {
  

 
  for (const clientUser of clientUsers) {
    await prisma.clientUser.create({ data: clientUser });
  }
    for (const difficulty of difficulties) {
    await prisma.difficulty.create({ data: difficulty });
  }
  for (const category of categories) {
    await prisma.category.create({ data: category });
  }

  for (const job of jobs) {
    await prisma.job.create({ data: job });
  }
  for (const freelanceUser of freelanceUsers) {
    await prisma.freelanceUser.create({ data: freelanceUser });
  }
  
  for (const proposal of proposals) {
    await prisma.proposal.create({ data: proposal });
  }
  for (const skill of skills) {
    await prisma.skill.create({ data: skill });
  }
  for (const education of educations) {
    await prisma.education.create({ data: education });
  }
  for (const language of languages) {
    await prisma.language.create({ data: language });
  }
 
}

createStuff();
