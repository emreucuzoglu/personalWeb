export class MainData {
  intro: Intro;
  about: About;
  experience: WorkExperience;
}

class Intro {
  header: string;
  summary: string;
  items: string[];
}

class About {
  header: string;
  summary: string[];
}

class WorkExperience {
  header: string;
  items: Experience[];
}

class Experience {
  company: string;
  location: string;
  title: string;
  startDate: Date;
  endDate: Date;
  summary: string;
  items: Tech[];
}

class Tech {
  summary: string;
  link: URL;
}
