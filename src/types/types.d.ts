export interface HighlightEntity {
  text: string;
  entities: {
    text: string;
    color: string;
  }[];
}

interface ImageEntity {
  image_type: string;
  image_url: string;
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
}
