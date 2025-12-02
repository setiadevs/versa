import { Member, PhotoItem, NavigationLink } from './types';

export const NAV_LINKS: NavigationLink[] = [
  { label: 'HOME', href: '#hero' },
  { label: 'VIBES', href: '#playlist' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'SQUAD', href: '#members' },
];

export const MEMBERS: Member[] = [
  { id: 1, name: 'ALEX', role: 'President', photo: 'https://picsum.photos/id/64/300/300', socials: ['instagram', 'twitter'] },
  { id: 2, name: 'SARAH', role: 'Creative', photo: 'https://picsum.photos/id/65/300/300', socials: ['instagram', 'whatsapp'] },
  { id: 3, name: 'DIMAS', role: 'Logistics', photo: 'https://picsum.photos/id/91/300/300', socials: ['whatsapp'] },
  { id: 4, name: 'PUTRI', role: 'Events', photo: 'https://picsum.photos/id/103/300/300', socials: ['instagram'] },
  { id: 5, name: 'RIZKY', role: 'Music', photo: 'https://picsum.photos/id/177/300/300', socials: ['twitter', 'whatsapp'] },
  { id: 6, name: 'MAYA', role: 'Socials', photo: 'https://picsum.photos/id/338/300/300', socials: ['instagram'] },
  { id: 7, name: 'KEVIN', role: 'Documentation', photo: 'https://picsum.photos/id/334/300/300', socials: ['instagram', 'twitter'] },
  { id: 8, name: 'NADIA', role: 'Secretary', photo: 'https://picsum.photos/id/349/300/300', socials: ['whatsapp'] },
];

export const GALLERY_PHOTOS: PhotoItem[] = [
  { id: 1, url: 'https://picsum.photos/id/20/600/800', caption: 'Study Session', rotation: -2 },
  { id: 2, url: 'https://picsum.photos/id/26/600/600', caption: 'Founders', rotation: 3 },
  { id: 3, url: 'https://picsum.photos/id/48/600/800', caption: 'Campus Corner', rotation: -1 },
  { id: 4, url: 'https://picsum.photos/id/180/800/600', caption: 'Late Nights', rotation: 2 },
  { id: 5, url: 'https://picsum.photos/id/201/600/600', caption: 'Projects', rotation: 0 },
  { id: 6, url: 'https://picsum.photos/id/250/600/800', caption: 'Analog Cam', rotation: -3 },
];

export const PLAYLIST_ID = "37i9dQZF1DWWQRwui0ExPn"; // Lo-Fi Beats placeholder
