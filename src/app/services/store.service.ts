import { Injectable } from '@angular/core';
import { Person } from "../person/person.model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  data: Person[] = [
    new Person(
      1,
      'kanye.jpg',
      'Kanye West',
      '1 month ago',
      'Entertainment',
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      64,
      36
    ),
    new Person(
      2,
      'Mark.jpg',
      'Mark Zuckerberg',
      '1 month ago',
      'Business',
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      36,
      64
    ),
    new Person(
      3,
      'Cristina.jpg',
      'Cristina Fernández de Kirchner',
      '1 month ago',
      'Politics',
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      36,
      64
    ),
    new Person(
      4,
      'Malala.jpg',
      'Malala Yousafzai',
      '1 month ago',
      'Entertainment',
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      64,
      36
    )
  ];

  constructor() { }
}
