import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  data: {}[] = [
    {
      image: 'kanye.jpg',
      name: 'Kanye West',
      date: '1 month ago',
      section: 'Entertainment',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      thumbsUp: 64,
      thumbDown: 36
    },
    {
      image: 'Mark.jpg',
      name: 'Mark Zuckerberg',
      date: '1 month ago',
      section: 'Business',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      thumbsUp: 36,
      thumbDown: 64
    },
    {
      image: 'Cristina.jpg',
      name: 'Cristina Fernández de Kirchner',
      date: '1 month ago',
      section: 'Politics',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      thumbsUp: 36,
      thumbDown: 64
    },
    {
      image: 'Malala.jpg',
      name: 'Malala Yousafzai',
      date: '1 month ago',
      section: 'Entertainment',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      thumbsUp: 64,
      thumbDown: 36
    }
  ];

  constructor() { }
}
