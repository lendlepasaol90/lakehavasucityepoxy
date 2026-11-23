// Service registry: order here drives the menu, footer and homepage index.
import garage from './garage-rv-boat-bay-coatings.mjs';
import residential from './lake-house-epoxy-floors.mjs';
import flake from './flake-floor-coatings.mjs';
import metallic from './metallic-floors.mjs';
import polyaspartic from './one-day-polyaspartic.mjs';
import polyurea from './polyurea-shop-floors.mjs';
import patio from './pool-deck-coatings.mjs';
import commercial from './commercial-epoxy.mjs';

export const services = [garage, residential, flake, metallic, polyaspartic, polyurea, patio, commercial];
export const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
