export interface Skills {
  id: string;
  label: string;
}

export interface Developer {
  id: string;
  name: string;
  email: string;
  title: string;
  headline: string;
  employmentType: string;
  location: string;
  skills: Skills[];
}
