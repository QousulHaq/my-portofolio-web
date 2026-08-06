export interface ImageUrl {
  link: string;
  type: string;
}

export interface Work {
  is_active: boolean;
  title: string;
  description: string;
  link: string;
  github: string;
  figma: string;
  imageUrls: ImageUrl[];
}