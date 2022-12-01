export interface Request {
  requests: RequestElement[];
}

export interface RequestElement {
  image: Image;
  features: Feature[];
}

export interface Feature {
  type: string;
}

export interface Image {
  content: string;
}
