// Site-wide configuration for Lake Havasu City Epoxy.

export const site = {
  name: 'Lake Havasu City Epoxy',
  domain: 'https://lakehavasucityepoxy.com',
  city: 'Lake Havasu City',
  cityLong: 'Lake Havasu City',
  region: 'Mohave County, Arizona',
  state: 'AZ',
  locale: 'en_US',

  // PLACEHOLDER — replace before launch, then set phoneVerified: true.
  phone: '(928) 555-0164',
  phoneHref: 'tel:+19285550164',
  phoneVerified: false,
  email: '',

  map: { query: 'Lake Havasu City, AZ', lat: 34.4839, lng: -114.3225, zoom: 11 },

  serviceAreas: [
    { name: 'Lake Havasu City', note: 'Every part of town, from the north end to the south shore.' },
    { name: 'The Island', note: 'Homes and businesses across the bridge on Pittsburgh Point.' },
    { name: 'Havasu Foothills Estates', note: 'Larger homes with RV and boat garages above the lake.' },
    { name: 'Desert Hills', note: 'Residential lots, shops and outbuildings north of town.' },
    { name: 'Horizon Six', note: 'Homes and workshops along Highway 95.' },
    { name: 'Crystal Beach', note: 'Lakeside properties and second homes north of the city.' },
    { name: 'Golden Shores', note: 'Homes and storage near Topock and the river.' },
    { name: 'Parker', note: 'Commercial and residential projects down the Parker Strip.' },
    { name: 'Needles, CA', note: 'Select projects just across the river.' },
  ],

  projectTypes: [
    'Garage floor coating',
    'Residential interior floor',
    'Decorative flake floor',
    'Metallic epoxy floor',
    'Polyaspartic coating',
    'Polyurea coating',
    'Patio or pool deck',
    'Commercial floor',
    'Warehouse or industrial floor',
    'Not sure yet',
  ],
};

// Licensed Envato Elements photography, self-hosted as WebP in src/assets/img (key-<width>.webp).
export const images = {
  lakeBoat: { file: 'lakeBoat', group: 'scene', w: 1600, h: 1199, widths: [480, 800, 1200, 1600], alt: "Speedboat carving a wide wake across turquoise lake water" },
  lakeBoats: { file: 'lakeBoats', group: 'scene', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Boats scattered across a desert lake below red rock buttes" },
  sunsetRide: { file: 'sunsetRide', group: 'scene', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Small boat silhouetted on the lake at sunset" },
  palmsShore: { file: 'palmsShore', group: 'scene', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Palm trees leaning over a calm, sunny shoreline" },
  boatsFloat: { file: 'boatsFloat', group: 'scene', w: 1600, h: 1017, widths: [480, 800, 1200, 1600], alt: "Two small boats floating on still water seen from above" },
  marina: { file: 'marina', group: 'scene', w: 1600, h: 639, widths: [480, 800, 1200, 1600], alt: "London Bridge spanning the channel in Lake Havasu City" },
  poolDeck: { file: 'poolDeck', group: 'outdoor', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Pool deck lined with lounge chairs and umbrellas" },
  poolBlue: { file: 'poolBlue', group: 'outdoor', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Blue swimming pool bordered by a smooth light deck" },
  poolLadder: { file: 'poolLadder', group: 'outdoor', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Stainless pool ladder beside a light deck" },
  loungers: { file: 'loungers', group: 'outdoor', w: 1600, h: 1064, widths: [480, 800, 1200, 1600], alt: "Lounge chairs and a daybed on a sunny pool deck" },
  garagePair: { file: 'garagePair', group: 'garage', w: 1600, h: 1068, widths: [480, 800, 1200, 1600], alt: "Two vehicles parked on a glossy grey floor" },
  garageRow: { file: 'garageRow', group: 'garage', w: 1600, h: 1059, widths: [480, 800, 1200, 1600], alt: "Silver car parked on a blue coated floor with yellow lines" },
  garageShow: { file: 'garageShow', group: 'garage', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Black sports car under bright garage lights" },
  garageDoorway: { file: 'garageDoorway', group: 'garage', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Light blue vintage convertible parked in a garage" },
  galleryFloor: { file: 'galleryFloor', group: 'interior', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Bright open living space with a polished light floor" },
  galleryWhite: { file: 'galleryWhite', group: 'interior', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "White wall above a smooth grey concrete floor" },
  warehouse: { file: 'warehouse', group: 'industrial', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Vast empty warehouse with a light, smooth floor" },
  warehouseModern: { file: 'warehouseModern', group: 'industrial', w: 1600, h: 1067, widths: [480, 800, 1200, 1600], alt: "Bright modern warehouse with a clean grey floor" },
  crew: { file: 'crew', group: 'industrial', w: 1600, h: 1068, widths: [480, 800, 1200, 1600], alt: "Installer in spiked shoes leveling a fresh floor coating" },
  xShopBays: { file: 'xShopBays', group: 'garage', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Empty garage bay with a grey floor and sunlit windows" },
  xDetailShop: { file: 'xDetailShop', group: 'garage', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Detailing garage with product shelves and a car on a smooth floor" },
  xBuffing: { file: 'xBuffing', group: 'garage', w: 1600, h: 1064, widths: [480, 800, 1200, 1600], alt: "Detailer polishing a red car in a dark garage" },
  xFilm: { file: 'xFilm', group: 'garage', w: 1600, h: 1078, widths: [480, 800, 1200, 1600], alt: "Installer applying protective film to a car in a bright shop" },
  xDetailers: { file: 'xDetailers', group: 'garage', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Two detailers standing beside a car in their shop" },
  xShinyRoom: { file: 'xShinyRoom', group: 'interior', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Large empty room with a glossy grey floor reflecting the windows" },
  xLounge: { file: 'xLounge', group: 'interior', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Basement lounge with a sofa, ceiling fan and stone accent wall" },
  xKitchen: { file: 'xKitchen', group: 'interior', w: 1600, h: 1067, widths: [480, 800, 1200, 1600], alt: "White kitchen with bar stools on a smooth grey floor" },
  xPour: { file: 'xPour', group: 'industrial', w: 1600, h: 1014, widths: [480, 800, 1200, 1600], alt: "Bright orange coating being poured onto a floor" },
  xPatio: { file: 'xPatio', group: 'outdoor', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Outdoor seating with bright cushions on a paved patio" },
};
