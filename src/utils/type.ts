interface Testimonial {
  name: string;
  image: string;
  text: string;
}

export interface TestimonialSliderProps {
  title?: string;
  testimonials: Testimonial[];
}

interface Links {
  url: string;
  icon: string;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  socialLinks: Links[];
}
export interface Job {
  title: string;
  location: string;
  description: string;
  responsibilities: string;
  requirements: string;
  salary: string;
}
export interface JobModalProps {
  job: Job;
  onClose: () => void;
}

export interface ProjectData {
  title: string;
  image: string;
  tags: string[];
  industry: string;
}
