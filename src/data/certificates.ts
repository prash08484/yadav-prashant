import { Certificate } from '../types';

export const certificates: Certificate[] = [
  {
    title: "Meta Hacker Cup - Global Rank 1336 out of 5972",
    date: "2025",
    image: "/certs/meta.png",
  },
  {
    title: "Joy of Computing Using Python- in Top 2% Nationwide",
    date: "2024",
    image: "/certs/nptel-python.png",
  }, 
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

