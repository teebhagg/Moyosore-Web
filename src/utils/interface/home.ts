let homeSchema = {
  _id: "250f3a37-0c2c-4b0c-8379-ca0c4b4c6819",
  _updatedAt: "2023-11-30T20:48:17Z",
  projectsPeek: [[Object], [Object], [Object], [Object]],
  blogPeek: {
    image: [Object],
    subheader:
      "I have been hearing the phrase “God-sized visions” repeatedly for over a week during my Triumph30 Midday Prayers but the first time I really saw it in practice was on the 12th of May, when I came across a Nigerian lady named Hilda Baci who was at that time attempting to break an 86hr 45mins Guiness world record of marathon cooking. I was stunned and amazed at her audacity and I quickly came to the conclusion that it could only be God-sized vision.",
    header: "God-Sized Visions",
    blogLink: "Learn More",
  },
  contactMe: {
    subTitle: "MEMORIES WORTH EVERYTHING",
    link: "Contact me",
    title: "Collaborate|Innovate | Create",
  },
  _createdAt: "2023-11-30T20:39:24Z",
  coverImage: {
    image: [Array],
    aboutLink: "Throughy the Lens of Life | A Photographic Journey",
  },
  _rev: "3P2odkr3n9ZKcpSzH3CvXd",
  _type: "home",
  aboutPeek: {
    subheader:
      "I’m a bit of an eccentric individual with a moderate interest in life. I believe in preserving smiles and laughter through fellowship with Christ. I am currently re-developing a love for medicine with psychiatry in view. I will take pictures and enjoy food regardless of the circumstance or situation. Sometimes life’s joys are in the little things. Regardless of where I find myself, I will connect with a beautiful soul.  While exploring this space, you will find Love, Joy, Faith and Hope.",
    aboutLink: "More About Me",
    header: "I do all things Fellowship, Medicine, Creativity and People",
    image: [Object],
  },
  portfolioPeek: [[Object], [Object], [Object], [Object], [Object]],
};

let porfolioPeekSchema = { image: { _type: 'image', asset: [Object] }, _key: '1111956a6dd7' };

let projectsPeek = {
    image: { _type: 'image', asset: [Object] },
    author: '~loml✨',
    _type: 'projectsPeek',
    _key: '0d4e0614ead4',
    body: `They say, "A small tree with strong roots will outlive a big tree with weak ones". A woman proudly adorned in her culture. This outfit speaks 'I know my Roots', 'Grounded obinrin'.`
  }

export interface HomeInterface {
  _id: string;
  _updatedAt: string;
  projectsPeek: ProjectsPeekInterface[];
  blogPeek: {
    image: any[];
    subheader: string;
    header: string;
    blogLink: string;
  };
  contactMe: {
    subTitle: string;
    link: string;
    title: string;
  };
  _createdAt: string;
  coverImage: {
    image: any[];
    title: string;
    aboutLink: string;
  };
  _rev: string;
  _type: string;
  aboutPeek: {
    subheader: string;
    aboutLink: string;
    header: string;
    image: any;
  },
  portfolioPeek: PortfolioPeekInterface[]
}

export interface PortfolioPeekInterface {
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _key: string;
}

export interface ProjectsPeekInterface {
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _key: string;
  author: string;
  _type: string;
  body: string;
}