export interface Member {
  id: number;
  name: string;
  role: string;
  photo: string;
  socials: ('instagram' | 'twitter' | 'whatsapp')[];
}

export interface PhotoItem {
  id: number;
  url: string;
  caption: string;
  rotation: number;
}

export interface NavigationLink {
  label: string;
  href: string;
}
