import { PersonalPost } from '../../types';

export const musicPosts: PersonalPost[] = [
  {
    id: 'music-1',
    caption: 'no cap, this hits different fr',
    type: 'music',
    tags: ['pop', 'favorite'],
    metadata: {
      artist: 'Bruno Mars',
      album: 'Just The Way You Are',
    }
  },  
  {
    id: 'music-2',
    caption: 'lowkey obsessed with this one',
    type: 'music',
    tags: ['soundtrack', 'electronic'],
    metadata: {
      artist: 'Jesper Kyd',
      album: 'Lose My Mind',
    }
  }
];

export interface Artist {
  id: string;
  name: string;
  image?: string;
  genre?: string;
}

export const artists: Artist[] = [
  { id: 'artist-1', name: 'Arijit Singh', genre: 'Bollywood', image: 'music/arijitsingh.jpeg' },
  { id: 'artist-2', name: 'Coldplay', genre: 'Alternative Rock', image: 'music/coldplay.jpeg' },
  { id: 'artist-3', name: 'Bruno Mars', genre: 'Pop', image: 'music/brunomars.jpg' },
  ];
