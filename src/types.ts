export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  author?: string;
  editor?: string;
  peerReview?: string;
  content: string[];
  category: string;
  image?: string;
  references?: number[];
}

export interface MagazineContent {
  edition: string;
  title: string;
  tagline: string;
  subtitle: string;
  faculty: string;
  university: string;
  editorial: {
    title: string;
    text: string[];
    quote: string;
  };
  articles: Article[];
  rubrics: Article[];
  steps: {
    title: string;
    description: string;
  }[];
  process: string[];
  team: {
    role: string;
    name: string;
    email?: string;
  }[];
  about: {
    vision: string;
    mission: string[];
    target: string;
  };
  contributorInfo: {
    title: string;
    description: string;
    roles: {
      title: string;
      description: string;
      icon: string;
    }[];
    benefits: string[];
    process: {
      step: string;
      title: string;
      desc: string;
    }[];
    cta: string;
  };
  references: string[];
  conclusion: {
    title: string;
    text: string[];
  };
  pantun: {
    title: string;
    lines: string[];
  };
}
