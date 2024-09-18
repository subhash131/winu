export type Player = {
  id: number;
  name: string;
  imageUrl: string;
  description?: string;
};

export type Team = {
  id: number;
  name: string;
  players: Player[];
  description?: string;
};

export type Venue = {
  id: number;
  name: string;
  imageUrl: string;
  streamLink: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  description: string;
  teams?: Team[];
};

export const venues = [
  {
    id: 1,
    name: "Champions Arena",
    imageUrl: "https://example.com/images/arena1.jpg",
    streamLink: "https://streaming.com/event1",
    startDate: "2024-09-20",
    startTime: "14:00",
    endDate: "2024-09-20",
    endTime: "18:00",
    description: "The grand finals of the championship featuring top teams.",
    teams: [
      {
        id: 1,
        name: "Alpha Warriors",
        players: [
          {
            id: 1,
            name: "John Maverick",
            imageUrl: "https://example.com/images/john.jpg",
          },
          {
            id: 2,
            name: "Sierra Blaze",
            imageUrl: "https://example.com/images/sierra.jpg",
          },
        ],
      },
      {
        id: 2,
        name: "Omega Strikers",
        players: [
          {
            id: 3,
            name: "Liam Falcon",
            imageUrl: "https://example.com/images/liam.jpg",
          },
          {
            id: 4,
            name: "Eva Viper",
            imageUrl: "https://example.com/images/eva.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Victory Grounds",
    imageUrl: "https://example.com/images/arena2.jpg",
    streamLink: "https://streaming.com/event2",
    startDate: "2024-09-25",
    startTime: "12:00",
    endDate: "2024-09-25",
    endTime: "16:00",
    description: "An intense battle between top-tier teams for the trophy.",
    teams: [
      {
        id: 3,
        name: "Phoenix Squad",
        players: [
          {
            id: 5,
            name: "Alex Storm",
            imageUrl: "https://example.com/images/alex.jpg",
          },
          {
            id: 6,
            name: "Jordan Blaze",
            imageUrl: "https://example.com/images/jordan.jpg",
          },
        ],
      },
      {
        id: 4,
        name: "Titan Rangers",
        players: [
          {
            id: 7,
            name: "Zoe Thunder",
            imageUrl: "https://example.com/images/zoe.jpg",
          },
          {
            id: 8,
            name: "Noah Strike",
            imageUrl: "https://example.com/images/noah.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Battlefield Dome",
    imageUrl: "https://example.com/images/arena3.jpg",
    streamLink: "https://streaming.com/event3",
    startDate: "2024-10-01",
    startTime: "10:00",
    endDate: "2024-10-01",
    endTime: "14:00",
    description: "A fight for supremacy in this top-tier tournament.",
    teams: [
      {
        id: 5,
        name: "Shadow Vipers",
        players: [
          {
            id: 9,
            name: "Ethan Strike",
            imageUrl: "https://example.com/images/ethan.jpg",
          },
          {
            id: 10,
            name: "Olivia Venom",
            imageUrl: "https://example.com/images/olivia.jpg",
          },
        ],
      },
      {
        id: 6,
        name: "Inferno Blades",
        players: [
          {
            id: 11,
            name: "Mason Blaze",
            imageUrl: "https://example.com/images/mason.jpg",
          },
          {
            id: 12,
            name: "Luna Frost",
            imageUrl: "https://example.com/images/luna.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Warzone Stadium",
    imageUrl: "https://example.com/images/arena4.jpg",
    streamLink: "https://streaming.com/event4",
    startDate: "2024-10-05",
    startTime: "15:00",
    endDate: "2024-10-05",
    endTime: "19:00",
    description: "A high-stakes competition between rival teams.",
    teams: [
      {
        id: 7,
        name: "Steel Dragons",
        players: [
          {
            id: 13,
            name: "Jack Steel",
            imageUrl: "https://example.com/images/jack.jpg",
          },
          {
            id: 14,
            name: "Emily Flame",
            imageUrl: "https://example.com/images/emily.jpg",
          },
        ],
      },
      {
        id: 8,
        name: "Diamond Snipers",
        players: [
          {
            id: 15,
            name: "Chris Hawk",
            imageUrl: "https://example.com/images/chris.jpg",
          },
          {
            id: 16,
            name: "Sophia Strike",
            imageUrl: "https://example.com/images/sophia.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Rival's Coliseum",
    imageUrl: "https://example.com/images/arena5.jpg",
    streamLink: "https://streaming.com/event5",
    startDate: "2024-10-10",
    startTime: "11:00",
    endDate: "2024-10-10",
    endTime: "15:00",
    description: "A clash between the best of the best in the arena.",
    teams: [
      {
        id: 9,
        name: "Eagle Fury",
        players: [
          {
            id: 17,
            name: "Max Thunder",
            imageUrl: "https://example.com/images/max.jpg",
          },
          {
            id: 18,
            name: "Nina Swift",
            imageUrl: "https://example.com/images/nina.jpg",
          },
        ],
      },
      {
        id: 10,
        name: "Wolf Guardians",
        players: [
          {
            id: 19,
            name: "Ryan Bolt",
            imageUrl: "https://example.com/images/ryan.jpg",
          },
          {
            id: 20,
            name: "Ava Phoenix",
            imageUrl: "https://example.com/images/ava.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Elite Showdown",
    imageUrl: "https://example.com/images/arena6.jpg",
    streamLink: "https://streaming.com/event6",
    startDate: "2024-10-15",
    startTime: "17:00",
    endDate: "2024-10-15",
    endTime: "21:00",
    description: "Elite teams compete for ultimate glory.",
    teams: [
      {
        id: 11,
        name: "Lion Hearts",
        players: [
          {
            id: 21,
            name: "Ella Storm",
            imageUrl: "https://example.com/images/ella.jpg",
          },
          {
            id: 22,
            name: "Oscar Blaze",
            imageUrl: "https://example.com/images/oscar.jpg",
          },
        ],
      },
      {
        id: 12,
        name: "Thunder Force",
        players: [
          {
            id: 23,
            name: "Logan Flame",
            imageUrl: "https://example.com/images/logan.jpg",
          },
          {
            id: 24,
            name: "Zara Storm",
            imageUrl: "https://example.com/images/zara.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Combat Arena",
    imageUrl: "https://example.com/images/arena7.jpg",
    streamLink: "https://streaming.com/event7",
    startDate: "2024-10-20",
    startTime: "09:00",
    endDate: "2024-10-20",
    endTime: "13:00",
    description: "A thrilling match where top teams battle for survival.",
    teams: [
      {
        id: 13,
        name: "Phoenix Blaze",
        players: [
          {
            id: 25,
            name: "Lily Flame",
            imageUrl: "https://example.com/images/lily.jpg",
          },
          {
            id: 26,
            name: "Henry Strike",
            imageUrl: "https://example.com/images/henry.jpg",
          },
        ],
      },
      {
        id: 14,
        name: "Rogue Titans",
        players: [
          {
            id: 27,
            name: "Tom Hawk",
            imageUrl: "https://example.com/images/tom.jpg",
          },
          {
            id: 28,
            name: "Eva Storm",
            imageUrl: "https://example.com/images/eva2.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Victory Field",
    imageUrl: "https://example.com/images/arena8.jpg",
    streamLink: "https://streaming.com/event8",
    startDate: "2024-10-25",
    startTime: "13:00",
    endDate: "2024-10-25",
    endTime: "17:00",
    description: "Intense combat between teams to claim the ultimate victory.",
    teams: [
      {
        id: 15,
        name: "Warrior Legends",
        players: [
          {
            id: 29,
            name: "Mia Thunder",
            imageUrl: "https://example.com/images/mia.jpg",
          },
          {
            id: 30,
            name: "Luke Strike",
            imageUrl: "https://example.com/images/luke.jpg",
          },
        ],
      },
      {
        id: 16,
        name: "Shadow Assassins",
        players: [
          {
            id: 31,
            name: "Ethan Flame",
            imageUrl: "https://example.com/images/ethan2.jpg",
          },
          {
            id: 32,
            name: "Sophia Viper",
            imageUrl: "https://example.com/images/sophia2.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Arena of Legends",
    imageUrl: "https://example.com/images/arena9.jpg",
    streamLink: "https://streaming.com/event9",
    startDate: "2024-11-01",
    startTime: "11:00",
    endDate: "2024-11-01",
    endTime: "15:00",
    description: "Where legends are made in an ultimate team battle.",
    teams: [
      {
        id: 17,
        name: "Eagle Guardians",
        players: [
          {
            id: 33,
            name: "Chris Thunder",
            imageUrl: "https://example.com/images/chris2.jpg",
          },
          {
            id: 34,
            name: "Ella Blaze",
            imageUrl: "https://example.com/images/ella3.jpg",
          },
        ],
      },
      {
        id: 18,
        name: "Titan Slayers",
        players: [
          {
            id: 35,
            name: "Mason Hawk",
            imageUrl: "https://example.com/images/mason2.jpg",
          },
          {
            id: 36,
            name: "Sarah Venom",
            imageUrl: "https://example.com/images/sarah2.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Final Clash Arena",
    imageUrl: "https://example.com/images/arena10.jpg",
    streamLink: "https://streaming.com/event10",
    startDate: "2024-11-05",
    startTime: "16:00",
    endDate: "2024-11-05",
    endTime: "20:00",
    description: "The final showdown to crown the ultimate champions.",
    teams: [
      {
        id: 19,
        name: "Inferno Guardians",
        players: [
          {
            id: 37,
            name: "Mark Blaze",
            imageUrl: "https://example.com/images/mark.jpg",
          },
          {
            id: 38,
            name: "Sarah Strike",
            imageUrl: "https://example.com/images/sarah.jpg",
          },
        ],
      },
      {
        id: 20,
        name: "Storm Legends",
        players: [
          {
            id: 39,
            name: "Luke Thunder",
            imageUrl: "https://example.com/images/luke.jpg",
          },
          {
            id: 40,
            name: "Ella Venom",
            imageUrl: "https://example.com/images/ella2.jpg",
          },
        ],
      },
    ],
  },
];
