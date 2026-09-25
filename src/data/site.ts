/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit this file to change copy, projects, awards.
 *  Layout/components read from here; you shouldn't need to touch them
 *  for normal content updates.
 *
 *  Images live in src/assets/. Drop a new JPG/PNG in there, import it
 *  below, and the build auto-generates AVIF/WebP at every size needed.
 *
 *  ⚠ Items marked TODO are placeholder content carried over from the
 *    Base44 template — confirm or replace before going live.
 * ─────────────────────────────────────────────────────────────
 */
import type { ImageMetadata } from 'astro';

// Work
import goldenValley from '../assets/work/golden-valley.jpg';
import echoesOfLight from '../assets/work/echoes-of-light.jpg';
import neonNocturne from '../assets/work/neon-nocturne.jpg';
import essenceCollection from '../assets/work/essence-collection.jpg';
import wanderer from '../assets/work/wanderer.jpg';
import coastalHorizons from '../assets/work/coastal-horizons.jpg';
import behindTheLens from '../assets/work/behind-the-lens.jpg';
import crimsonDusk from '../assets/work/crimson-dusk.jpg';
// Awards
import luminance from '../assets/awards/luminance.jpg';
import porscheHeritage from '../assets/awards/porsche-heritage.jpg';
import urbanSolitude from '../assets/awards/urban-solitude.jpg';
import stillWaters from '../assets/awards/still-waters.jpg';
import lexusImmersion from '../assets/awards/lexus-immersion.jpg';
import echoesFilm from '../assets/awards/echoes-of-light-film.jpg';
import vogueEditorial from '../assets/awards/vogue-editorial.jpg';
import portraitSeries from '../assets/awards/portrait-series.jpg';
// About
import portrait from '../assets/about/portrait.jpg';
// Client logos (pre-processed: trimmed, background removed, monochrome)
import porsche from '../assets/logos/porsche.png';
import lexus from '../assets/logos/lexus.png';
import audi from '../assets/logos/audi.png';
import bmw from '../assets/logos/bmw.png';
import acura from '../assets/logos/acura.png';
import mbTrueNorth from '../assets/logos/mb-true-north.png';
import radical from '../assets/logos/radical.png';
import libertyWalk from '../assets/logos/liberty-walk.png';
import vossen from '../assets/logos/vossen.png';

/* ── Brand & contact ─────────────────────────────────────────── */

export const site = {
  name: 'SightlessVision',
  tagline: 'Photographer · Cinematographer · Creative Director',
  description:
    'SightlessVision — Toronto-based photographer, cinematographer and creative director crafting visual narratives for brands and artists.',
  footerBlurb: 'Capturing stories through light, motion, and vision. Based in Toronto, working worldwide.',
  location: 'Toronto, Ontario', // TODO: Contact page previously said "Los Angeles, California" — confirm.
  email: 'hello@lensandvision.com', // TODO: template placeholder domain — replace with a real inbox.
  phone: '+1 (310) 555-0192', // TODO: 555 placeholder number. Set to '' to hide the row.
  /**
   * Contact form delivery. GitHub Pages has no backend, so the form posts to
   * a form service. Create a free form at https://formspree.io (or Web3Forms),
   * paste its endpoint here, e.g. 'https://formspree.io/f/abcdwxyz'.
   * If left empty, the form falls back to opening the visitor's email app
   * pre-filled and addressed to `email` above.
   */
  formEndpoint: '',
  social: {
    instagram: '', // TODO: e.g. 'https://instagram.com/sightlessvision'
    youtube: '', // TODO
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Awards', href: '/awards/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

/* ── Home ────────────────────────────────────────────────────── */

export const hero = {
  image: goldenValley,
  alt: 'Dramatic mountain valley at golden hour',
  eyebrow: 'Photographer · Cinematographer · Creative Director',
  titleTop: 'Stories told',
  titleAccent: 'through light',
  body: 'Crafting visual narratives that move, inspire, and endure. From concept to final frame.',
  cta: { label: 'View Portfolio', href: '/portfolio/' },
};

export const services = [
  {
    icon: 'camera',
    title: 'Photography',
    description: 'Editorial, commercial, and fine art photography that captures the essence of every moment.',
  },
  {
    icon: 'film',
    title: 'Cinematography',
    description: 'Cinematic storytelling through motion — from short films to brand narratives.',
  },
  {
    icon: 'palette',
    title: 'Creative Direction',
    description: 'End-to-end visual strategy, art direction, and brand identity development.',
  },
] as const;

/* ── Portfolio ───────────────────────────────────────────────── */

export const categories = ['Photography', 'Cinematography', 'Creative Direction'] as const;
export type Category = (typeof categories)[number];

export interface Project {
  slug: string;
  title: string;
  category: Category;
  image: ImageMetadata;
  alt: string;
  featured?: boolean;
}

export const projects: Project[] = [
  { slug: 'echoes-of-light', title: 'Echoes of Light', category: 'Photography', image: echoesOfLight, alt: 'Black and white studio portrait of a woman in profile', featured: true },
  { slug: 'neon-nocturne', title: 'Neon Nocturne', category: 'Cinematography', image: neonNocturne, alt: 'Rain-soaked neon city street at night', featured: true },
  { slug: 'essence-collection', title: 'Essence Collection', category: 'Creative Direction', image: essenceCollection, alt: 'Styled flat-lay of heels, perfume, sunglasses and silk', featured: true },
  { slug: 'wanderer', title: 'Wanderer', category: 'Photography', image: wanderer, alt: 'Lone figure walking through a sunlit stone alley', featured: true },
  { slug: 'coastal-horizons', title: 'Coastal Horizons', category: 'Cinematography', image: coastalHorizons, alt: 'Aerial view of a rugged coastline at sunset' },
  { slug: 'behind-the-lens', title: 'Behind the Lens', category: 'Cinematography', image: behindTheLens, alt: 'Film crew silhouetted by studio lights on set' },
  { slug: 'crimson-dusk', title: 'Crimson Dusk', category: 'Photography', image: crimsonDusk, alt: 'Woman in a flowing red dress in the desert at dusk' },
  { slug: 'golden-valley', title: 'Golden Valley', category: 'Creative Direction', image: goldenValley, alt: 'Mountain valley at golden hour' },
];

/* ── Clients ─────────────────────────────────────────────────── */

export const clients: { name: string; logo: ImageMetadata }[] = [
  { name: 'Porsche', logo: porsche },
  { name: 'Lexus', logo: lexus },
  { name: 'Audi', logo: audi },
  { name: 'BMW', logo: bmw },
  { name: 'Acura', logo: acura },
  { name: 'MB True North', logo: mbTrueNorth },
  { name: 'Radical Sportscars', logo: radical },
  { name: 'Liberty Walk', logo: libertyWalk },
  { name: 'Vossen', logo: vossen },
];

/* ── Awards ──────────────────────────────────────────────────── */
// TODO: These entries came from the Base44 template (TIFF, Cannes Lions,
// World Press Photo…). Replace with real credits before publishing —
// named awards are easy for clients to verify.

export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  project: string;
  image: ImageMetadata;
}

export const awarded: AwardItem[] = [
  { year: '2023', title: 'Best Cinematography', organization: 'Toronto International Film Festival', project: 'Luminance — Short Film', image: luminance },
  { year: '2022', title: 'Gold — Visual Excellence', organization: 'Cannes Lions', project: 'Porsche Heritage Campaign', image: porscheHeritage },
  { year: '2021', title: 'Creative Director of the Year', organization: 'Communication Arts', project: 'Urban Solitude Series', image: urbanSolitude },
  { year: '2019', title: 'Best Documentary Photography', organization: 'World Press Photo', project: 'Still Waters — Short Film', image: stillWaters },
];

export const nominated: AwardItem[] = [
  { year: '2023', title: 'Outstanding Art Direction', organization: 'The One Club for Creativity', project: 'Lexus Immersion Campaign', image: lexusImmersion },
  { year: '2022', title: 'Emerging Filmmaker', organization: 'Tribeca Film Festival', project: 'Echoes of Light — Short Film', image: echoesFilm },
  { year: '2020', title: 'Editorial Photography of the Year', organization: 'Society of Publication Designers', project: 'Vogue Canada Editorial', image: vogueEditorial },
  { year: '2018', title: 'Best New Talent', organization: 'PDN Photo Annual', project: 'Portrait Series', image: portraitSeries },
];

/* ── About ───────────────────────────────────────────────────── */

export const about = {
  portrait,
  portraitAlt: 'Portrait of the photographer in red and blue light with smoke',
  paragraphs: [
    "I'm a visual storyteller based in Toronto with over a decade of experience in photography, cinematography, and creative direction. My work lives at the intersection of art and narrative — every frame is intentional, every story is worth telling.",
    "I've had the privilege of working with brands like Porsche, Radical, and Lexus, as well as independent artists and filmmakers who dare to push boundaries. Whether it's a quiet portrait or a sweeping cinematic sequence, I bring the same dedication to craft and vision.",
  ],
  meta: ['Toronto, Ontario', 'Since 2016'], // TODO: timeline below starts in 2014 — pick one.
  badge: { title: 'Award Winner', subtitle: 'Tribeca Film Festival' }, // TODO: confirm
  stats: [
    { value: 12, suffix: '+', label: 'Years Experience' },
    { value: 200, suffix: '+', label: 'Projects Completed' },
    { value: 45, suffix: '+', label: 'Brands Partnered' },
    { value: 8, suffix: '', label: 'International Awards' },
  ],
  timeline: [
    { year: '2014', title: 'Started freelance photography', description: 'Began capturing stories through editorial and documentary work.' },
    { year: '2017', title: 'Expanded into cinematography', description: "Directed first short film, 'Luminance', screened at Tribeca." },
    { year: '2019', title: 'Creative Director at Studio Noir', description: 'Led visual campaigns for global fashion and lifestyle brands.' },
    { year: '2022', title: 'Independent studio launch', description: 'Founded SightlessVision, a multidisciplinary creative studio.' },
  ],
};
