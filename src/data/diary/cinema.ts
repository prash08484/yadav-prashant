import { PersonalPost } from '../../types';

export const cinemaPosts: PersonalPost[] = [ 
  {
    id: 'cinema-1',
    caption: 'obsessed with grant gustin fr, he\'s the best flash',
    type: 'cinema',
    tags: ['tv-show', 'superhero'],
    image: 'cinema/flash.jpg',
    metadata: {
      show: 'The Flash',
      detailedReview: [
        'grant gustin as barry allen is actually perfect casting',
        'the way they handle time travel and multiverse stuff is so cool',
        'watched this religiously every week when it was airing',
        'the emotional moments hit different, especially with iris',
        'the cgi and action sequences are actually really good for a tv show'
      ]
    }
  },
  {
    id: 'cinema-2',
    caption: 'loki is my most favorite marvel show, tom hiddleston is everything',
    type: 'cinema',
    tags: ['tv-show', 'marvel'],
    image: 'cinema/loki.jpg',
    metadata: {
      show: 'Loki',
      detailedReview: [
        'tom hiddleston as loki is actually perfect, no one else could do it',
        'the time variance authority concept is so interesting and well-executed',
        'sylvie and loki\'s dynamic is chef\'s kiss',
        'the multiverse stuff in this show is way better than the movies',
        'watched both seasons multiple times and still find new details'
      ]
    }
  }, 
  {
    id: 'cinema-3',
    caption: 'andrew garfield\'s spiderman is the best, no debate',
    type: 'cinema',
    tags: ['movie', 'superhero'],
    image: 'cinema/theamazingspiderman.jpg',
    metadata: {
      movie: 'The Amazing Spider-Man',
      detailedReview: [
        'andrew garfield is actually the perfect peter parker, the awkwardness is so real',
        'the chemistry with emma stone as gwen is unmatched',
        'the swinging scenes are the best out of all the spiderman movies',
        'rewatched this so many times and it never gets old',
        'the emotional depth and character development is way better than the others'
      ]
    }
  },
  {
    id: 'cinema-4',
    caption: 'arrow started the whole arrowverse and it\'s actually iconic',
    type: 'cinema',
    tags: ['tv-show', 'superhero'],
    image: 'cinema/thearrow.jpg',
    metadata: {
      show: 'The Arrow',
      detailedReview: [
        'stephen amell as oliver queen is actually perfect',
        'the flashbacks to the island are so well integrated into the story',
        'the action sequences and fight choreography are top tier',
        'watched this from the beginning and it was my introduction to the arrowverse',
        'the way they handle oliver\'s growth from vigilante to hero is great'
      ]
    }
  },  
  {
    id: 'cinema-5',
    caption: 'batman rises is actually the best batman movie, christian bale is unmatched',
    type: 'cinema',
    tags: ['movie', 'dc'],
    image: 'cinema/thedarkknightrises.jpg',
    metadata: {
      movie: 'The Dark Knight Rises',
      detailedReview: [
        'christian bale is the best batman, way better than ben affleck or robert pattinson',
        'the way nolan handles the conclusion of the trilogy is perfect',
        'bane is actually a terrifying villain, tom hardy killed it',
        'rewatched this so many times and the ending still hits',
        'the way they show bruce\'s journey from broken to hero again is so well done'
      ]
    }
  },  
];
