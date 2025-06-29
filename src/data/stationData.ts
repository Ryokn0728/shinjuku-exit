export interface Gate {
  id: string;
  name: string;
  nameEn?: string;
  floor: number;
  x: number;
  y: number;
}

export interface Exit {
  id: string;
  name: string;
  nameEn?: string;
  floor: number;
  x: number;
  y: number;
  description: string;
  nearbyLandmarks: string[];
}

export interface Point {
  x: number;
  y: number;
}

export interface Route {
  from: string;
  to: string;
  path: Point[];
  distance: number;
  time: number;
}

export interface Wall {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Corridor {
  x: number;
  y: number;
  width: number;
  height: number;
  name?: string;
}

export const gates: Gate[] = [
  { id: "south", name: "南口改札", nameEn: "South Gate", floor: 0, x: 400, y: 600 },
  { id: "new-south", name: "新南改札", nameEn: "New South Gate", floor: 0, x: 600, y: 650 },
  { id: "east", name: "東口改札", nameEn: "East Gate", floor: 0, x: 650, y: 400 },
  { id: "central-east", name: "中央東口改札", nameEn: "Central East Gate", floor: 0, x: 500, y: 400 },
  { id: "central-west", name: "中央西口改札", nameEn: "Central West Gate", floor: 0, x: 350, y: 400 },
  { id: "west", name: "西口改札", nameEn: "West Gate", floor: 0, x: 200, y: 400 },
  { id: "south-east", name: "東南口改札", nameEn: "Southeast Gate", floor: 0, x: 550, y: 550 },
  { id: "miraina-tower", name: "ミライナタワー改札", nameEn: "Miraina Tower Gate", floor: 0, x: 700, y: 500 },
];

export const exits: Exit[] = [
  { 
    id: "a1", 
    name: "A1", 
    floor: 0, 
    x: 250, 
    y: 300,
    description: "西口地下街方面",
    nearbyLandmarks: ["小田急百貨店", "京王百貨店"]
  },
  { 
    id: "a2", 
    name: "A2", 
    floor: 0, 
    x: 280, 
    y: 280,
    description: "西口地下街方面",
    nearbyLandmarks: ["ヨドバシカメラ方面"]
  },
  { 
    id: "b13", 
    name: "B13", 
    floor: -1, 
    x: 350, 
    y: 250,
    description: "西口地下方面",
    nearbyLandmarks: ["西口地下広場", "都営大江戸線"]
  },
  { 
    id: "central-west", 
    name: "中央西口", 
    floor: 0, 
    x: 350, 
    y: 320,
    description: "JR中央西口地上出口",
    nearbyLandmarks: ["ルミネ", "バスタ新宿方面"]
  },
  { 
    id: "central-east", 
    name: "中央東口", 
    floor: 0, 
    x: 500, 
    y: 320,
    description: "JR中央東口地上出口",
    nearbyLandmarks: ["新宿アルタ", "東口広場"]
  },
  { 
    id: "east", 
    name: "東口", 
    floor: 0, 
    x: 650, 
    y: 320,
    description: "JR東口地上出口",
    nearbyLandmarks: ["歌舞伎町方面", "ドン・キホーテ"]
  },
  { 
    id: "south", 
    name: "南口", 
    floor: 0, 
    x: 400, 
    y: 680,
    description: "JR南口地上出口",
    nearbyLandmarks: ["新宿タカシマヤ", "紀伊國屋書店"]
  },
  { 
    id: "new-south", 
    name: "新南口", 
    floor: 0, 
    x: 600, 
    y: 720,
    description: "JR新南口地上出口",
    nearbyLandmarks: ["NEWoMan", "バスタ新宿", "ミライナタワー"]
  },
];

// 壁の定義
export const walls: Wall[] = [
  // 外壁
  { x: 150, y: 200, width: 600, height: 10 },
  { x: 150, y: 200, width: 10, height: 550 },
  { x: 750, y: 200, width: 10, height: 550 },
  { x: 150, y: 750, width: 600, height: 10 },
  
  // 内部の壁
  { x: 300, y: 450, width: 200, height: 10 },
  { x: 450, y: 300, width: 10, height: 100 },
];

// 通路の定義
export const corridors: Corridor[] = [
  { x: 160, y: 380, width: 580, height: 40, name: "中央通路" },
  { x: 380, y: 210, width: 40, height: 540, name: "南北通路" },
  { x: 160, y: 580, width: 300, height: 40, name: "南通路" },
  { x: 540, y: 480, width: 200, height: 40, name: "東通路" },
];

export const routes: Route[] = [
  // 南口改札からのルート
  {
    from: "south",
    to: "south",
    path: [
      { x: 400, y: 600 },
      { x: 400, y: 680 }
    ],
    distance: 20,
    time: 1
  },
  {
    from: "south",
    to: "new-south",
    path: [
      { x: 400, y: 600 },
      { x: 440, y: 600 },
      { x: 600, y: 600 },
      { x: 600, y: 720 }
    ],
    distance: 150,
    time: 3
  },
  {
    from: "south",
    to: "central-west",
    path: [
      { x: 400, y: 600 },
      { x: 400, y: 400 },
      { x: 350, y: 400 },
      { x: 350, y: 320 }
    ],
    distance: 250,
    time: 5
  },
  {
    from: "south",
    to: "central-east",
    path: [
      { x: 400, y: 600 },
      { x: 400, y: 400 },
      { x: 500, y: 400 },
      { x: 500, y: 320 }
    ],
    distance: 270,
    time: 5
  },
  {
    from: "south",
    to: "east",
    path: [
      { x: 400, y: 600 },
      { x: 400, y: 400 },
      { x: 650, y: 400 },
      { x: 650, y: 320 }
    ],
    distance: 350,
    time: 7
  },
  {
    from: "south",
    to: "a1",
    path: [
      { x: 400, y: 600 },
      { x: 400, y: 400 },
      { x: 250, y: 400 },
      { x: 250, y: 300 }
    ],
    distance: 400,
    time: 8
  },
  {
    from: "south",
    to: "a2",
    path: [
      { x: 400, y: 600 },
      { x: 400, y: 400 },
      { x: 280, y: 400 },
      { x: 280, y: 280 }
    ],
    distance: 380,
    time: 8
  },
  {
    from: "south",
    to: "b13",
    path: [
      { x: 400, y: 600 },
      { x: 400, y: 400 },
      { x: 350, y: 400 },
      { x: 350, y: 250 }
    ],
    distance: 450,
    time: 9
  },
  
  // 西口改札からのルート
  {
    from: "west",
    to: "a1",
    path: [
      { x: 200, y: 400 },
      { x: 250, y: 400 },
      { x: 250, y: 300 }
    ],
    distance: 100,
    time: 2
  },
  {
    from: "west",
    to: "a2",
    path: [
      { x: 200, y: 400 },
      { x: 280, y: 400 },
      { x: 280, y: 280 }
    ],
    distance: 150,
    time: 3
  },
  {
    from: "west",
    to: "b13",
    path: [
      { x: 200, y: 400 },
      { x: 350, y: 400 },
      { x: 350, y: 250 }
    ],
    distance: 200,
    time: 4
  },
  {
    from: "west",
    to: "central-west",
    path: [
      { x: 200, y: 400 },
      { x: 350, y: 400 },
      { x: 350, y: 320 }
    ],
    distance: 200,
    time: 4
  },
  {
    from: "west",
    to: "central-east",
    path: [
      { x: 200, y: 400 },
      { x: 500, y: 400 },
      { x: 500, y: 320 }
    ],
    distance: 300,
    time: 6
  },
  {
    from: "west",
    to: "east",
    path: [
      { x: 200, y: 400 },
      { x: 650, y: 400 },
      { x: 650, y: 320 }
    ],
    distance: 450,
    time: 9
  },
  {
    from: "west",
    to: "south",
    path: [
      { x: 200, y: 400 },
      { x: 400, y: 400 },
      { x: 400, y: 680 }
    ],
    distance: 350,
    time: 7
  },
  {
    from: "west",
    to: "new-south",
    path: [
      { x: 200, y: 400 },
      { x: 400, y: 400 },
      { x: 400, y: 600 },
      { x: 600, y: 600 },
      { x: 600, y: 720 }
    ],
    distance: 500,
    time: 10
  },
  
  // 東口改札からのルート
  {
    from: "east",
    to: "east",
    path: [
      { x: 650, y: 400 },
      { x: 650, y: 320 }
    ],
    distance: 20,
    time: 1
  },
  {
    from: "east",
    to: "central-east",
    path: [
      { x: 650, y: 400 },
      { x: 500, y: 400 },
      { x: 500, y: 320 }
    ],
    distance: 200,
    time: 4
  },
  {
    from: "east",
    to: "central-west",
    path: [
      { x: 650, y: 400 },
      { x: 350, y: 400 },
      { x: 350, y: 320 }
    ],
    distance: 300,
    time: 6
  },
  {
    from: "east",
    to: "a1",
    path: [
      { x: 650, y: 400 },
      { x: 250, y: 400 },
      { x: 250, y: 300 }
    ],
    distance: 400,
    time: 8
  },
  {
    from: "east",
    to: "south",
    path: [
      { x: 650, y: 400 },
      { x: 400, y: 400 },
      { x: 400, y: 680 }
    ],
    distance: 350,
    time: 7
  },
  {
    from: "east",
    to: "new-south",
    path: [
      { x: 650, y: 400 },
      { x: 650, y: 500 },
      { x: 600, y: 500 },
      { x: 600, y: 720 }
    ],
    distance: 250,
    time: 5
  },
  
  // 中央東口改札からのルート
  {
    from: "central-east",
    to: "central-east",
    path: [
      { x: 500, y: 400 },
      { x: 500, y: 320 }
    ],
    distance: 20,
    time: 1
  },
  {
    from: "central-east",
    to: "east",
    path: [
      { x: 500, y: 400 },
      { x: 650, y: 400 },
      { x: 650, y: 320 }
    ],
    distance: 200,
    time: 4
  },
  {
    from: "central-east",
    to: "central-west",
    path: [
      { x: 500, y: 400 },
      { x: 350, y: 400 },
      { x: 350, y: 320 }
    ],
    distance: 150,
    time: 3
  },
  {
    from: "central-east",
    to: "south",
    path: [
      { x: 500, y: 400 },
      { x: 400, y: 400 },
      { x: 400, y: 680 }
    ],
    distance: 250,
    time: 5
  },
  
  // 中央西口改札からのルート
  {
    from: "central-west",
    to: "central-west",
    path: [
      { x: 350, y: 400 },
      { x: 350, y: 320 }
    ],
    distance: 20,
    time: 1
  },
  {
    from: "central-west",
    to: "a1",
    path: [
      { x: 350, y: 400 },
      { x: 250, y: 400 },
      { x: 250, y: 300 }
    ],
    distance: 150,
    time: 3
  },
  {
    from: "central-west",
    to: "b13",
    path: [
      { x: 350, y: 400 },
      { x: 350, y: 250 }
    ],
    distance: 150,
    time: 3
  },
  {
    from: "central-west",
    to: "south",
    path: [
      { x: 350, y: 400 },
      { x: 400, y: 400 },
      { x: 400, y: 680 }
    ],
    distance: 250,
    time: 5
  },
  
  // 新南改札からのルート
  {
    from: "new-south",
    to: "new-south",
    path: [
      { x: 600, y: 650 },
      { x: 600, y: 720 }
    ],
    distance: 20,
    time: 1
  },
  {
    from: "new-south",
    to: "south",
    path: [
      { x: 600, y: 650 },
      { x: 600, y: 600 },
      { x: 400, y: 600 },
      { x: 400, y: 680 }
    ],
    distance: 150,
    time: 3
  },
  
  // ミライナタワー改札からのルート
  {
    from: "miraina-tower",
    to: "new-south",
    path: [
      { x: 700, y: 500 },
      { x: 650, y: 500 },
      { x: 650, y: 650 },
      { x: 600, y: 650 },
      { x: 600, y: 720 }
    ],
    distance: 100,
    time: 2
  },
  {
    from: "miraina-tower",
    to: "east",
    path: [
      { x: 700, y: 500 },
      { x: 650, y: 500 },
      { x: 650, y: 320 }
    ],
    distance: 150,
    time: 3
  },
  
  // 東南口改札からのルート
  {
    from: "south-east",
    to: "south",
    path: [
      { x: 550, y: 550 },
      { x: 400, y: 550 },
      { x: 400, y: 680 }
    ],
    distance: 200,
    time: 4
  },
  {
    from: "south-east",
    to: "east",
    path: [
      { x: 550, y: 550 },
      { x: 650, y: 550 },
      { x: 650, y: 320 }
    ],
    distance: 250,
    time: 5
  },
];

export function findRoute(fromGateId: string, toExitId: string): Route | null {
  return routes.find(r => r.from === fromGateId && r.to === toExitId) || null;
}