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

// Licensed Unsplash photography (Unsplash License). Swap `id` for `src` to self-host.
export const images = {
  lakeBoat: { id: 'photo-1699152614846-e2c7b8ee6c2c', alt: 'Speedboat crossing a blue desert lake with mountains behind' },
  lakeBoats: { id: 'photo-1699152748905-897f7970a9da', alt: 'Boats gathered on calm lake water' },
  sunsetRide: { id: 'photo-1618857320928-e53d9fee12fe', alt: 'Boat silhouetted on the water at sunset' },
  palmsShore: { id: 'photo-1578057592065-14f95c242d26', alt: 'Palm trees along a sunny shoreline' },
  boatsFloat: { id: 'photo-1687047781342-cb4243d61bf4', alt: 'Two boats floating on still water' },
  marina: { id: 'photo-1767072528342-67bb702c0614', alt: 'Boats docked at a marina with a bridge in the background' },
  poolDeck: { id: 'photo-1709755502254-3a71dab6fa58', alt: 'Pool deck with lounge chairs and umbrellas beside the water' },
  poolBlue: { id: 'photo-1685366309327-d9600b3d6a7c', alt: 'Blue swimming pool bordered by a smooth deck' },
  poolLadder: { id: 'photo-1778166156726-a9468d573b73', alt: 'Pool ladder and tiled pool surround next to the deck' },
  loungers: { id: 'photo-1562672753-989b09b0939b', alt: 'Grey lounge chairs lined up on a pool deck' },
  garagePair: { id: 'photo-1694025951779-1fcae4ab4dc7', alt: 'Two cars parked side by side on a smooth garage floor' },
  garageRow: { id: 'photo-1694025945285-714a08ba0db6', alt: 'Silver car parked among others on a clean garage floor' },
  garageShow: { id: 'photo-1694026015216-d474894705a2', alt: 'Black sports car on a glossy garage floor' },
  garageDoorway: { id: 'photo-1788174220600-4307cedd61a7', alt: 'Convertible parked in a bright garage doorway' },
  galleryFloor: { id: 'photo-1774021794777-4ada1deaf41f', alt: 'Modern open space with a polished, seamless floor' },
  galleryWhite: { id: 'photo-1774021798954-21e366cd09db', alt: 'White-walled room with a smooth concrete floor' },
  warehouse: { id: 'photo-1772305336606-989a457ffbae', alt: 'Industrial warehouse with a polished concrete floor' },
  warehouseModern: { id: 'photo-1771530789155-b1f03fbf82b5', alt: 'Modern warehouse interior with a light, reflective floor' },
  crew: { id: 'photo-1772300164438-f73307d3b645', alt: 'Installers working across a large warehouse floor' },
};
