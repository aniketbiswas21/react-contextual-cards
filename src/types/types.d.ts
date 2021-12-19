export interface HighlightEntity {
  text: string;
  entities: {
    text: string;
    color: string;
  }[];
}

export interface ImageEntity {
  image_type: string;
  image_url: string;
}

export interface CTAEntity {
  bg_color: string;
  text: string;
  text_color: string;
  url: string;
}

export interface GradientEntity {
  colors: string[];
  angle: number | null;
}

export interface CardData {
  description: string;
  formatted_description?: HighlightEntity;
  formatted_title?: HighlightEntity;
  icon: ImageEntity;
  bg_image?: ImageEntity;
  name: string;
  title: string;
  url: string;
  bg_color?: string;
  cta?: CTAEntity[];
  bg_gradient?: GradientEntity;
}
