// Project content shared by the Home and Work pages.
// The media are placeholders from the design: replace `card.media` with
// { type: 'video', src, poster } (or another image) once final assets are ready.
// `overlay` positions are in design pixels on the 830x580 card.
import bigAppleImage from '@/assets/images/big-apple.jpg'
import bigAppleLogo from '@/assets/images/big-apple-logo.svg'
import madHouseImage from '@/assets/images/mad-house.jpg'
import mashvillePotatoes from '@/assets/images/mashville-potatoes.png'
import stellarGroupImage from '@/assets/images/stellar-group.jpg'
import toplanImage from '@/assets/images/toplan.jpg'
import bigAppleIcon from '@/assets/icons/big-apple-icon.svg'
import madHouseIcon from '@/assets/icons/mad-house-icon.svg'
import mashvilleIcon from '@/assets/icons/mashville-icon.svg'
import stellarGroupIcon from '@/assets/icons/stellar-group-icon.jpg'
import toplanIcon from '@/assets/icons/toplan-icon.jpg'

export const projects = [
  {
    slug: 'toplan',
    title: 'Toplan',
    subtitle: 'Architecture, Volume\n& Presence',
    description:
      'A building and interior studio built around geometric order, natural light, and structural logic made tactile',
    services: 'Brand Strategy, Identity, Motion',
    card: {
      name: 'Toplan',
      category: 'Interior design',
      media: { type: 'image', src: toplanImage, alt: 'Toplan logo on a moss wall' },
      icon: { src: toplanIcon, cover: true },
    },
  },
  {
    slug: 'mad-house',
    title: 'Mad House',
    subtitle: 'Interactive Play, Food\n& Social Experience',
    description:
      'An interactive sports experience centered on digital gameplay, rich food culture, and community competition',
    services: 'Strategy, Identity, Brand implementation',
    card: {
      name: 'Mad House',
      category: 'Sports',
      media: { type: 'image', src: madHouseImage, alt: 'Darts player wearing a Mad House shirt on stage' },
      icon: { src: madHouseIcon, background: '#7b1319', width: 24, height: 12, left: 9, top: 15 },
    },
  },
  {
    slug: 'big-apple',
    title: 'Big apple',
    subtitle: 'Mobility, Autonomy &\nDignity',
    description:
      'A home medical provider anchored by streamlined fulfillment, adaptive equipment, and personal independence made effortless',
    services: 'Strategy, Iconography, Identity',
    card: {
      name: 'Big Apple DME',
      category: 'Healthcare',
      media: { type: 'image', src: bigAppleImage, alt: '' },
      overlay: { src: bigAppleLogo, left: 365.84, top: 231.17, width: 99.155 },
      thumbnailOverlay: { src: bigAppleLogo, left: 174.58, top: 109.97, width: 47.246 },
      icon: { src: bigAppleIcon, background: '#e52227', width: 19, height: 22.69, left: 11, top: 8 },
    },
  },
  {
    slug: 'the-stellar-group',
    title: 'The Stellar\nGroup',
    subtitle: 'Precision, Structure\n& Endurance',
    description:
      'A development group grounded in planning, solid structures, and ambitious blueprints made perfect.',
    services: 'Iconography, Visual Identity System',
    card: {
      name: 'The Stellar Group',
      category: 'Construction',
      media: { type: 'image', src: stellarGroupImage, alt: 'White hard hat with The Stellar Group logo' },
      icon: { src: stellarGroupIcon, cover: true },
    },
  },
  {
    slug: 'mashville',
    title: 'mashville',
    subtitle: 'Culinary, fast\n& mashed',
    description: 'A direct-to-door culinary brand powered by fast delivery and freshly whipped mash',
    services: 'Brand Strategy, Identity, Motion',
    card: {
      name: 'mashville',
      category: 'food',
      background: '#ed1b24',
      overlay: { src: mashvillePotatoes, left: 259, top: 194, width: 274 },
      // Same artwork scaled for the small 396x276 "Explore our work" cards.
      thumbnailOverlay: { src: mashvillePotatoes, left: 131, top: 91, width: 134 },
      icon: { src: mashvilleIcon, background: '#fff', width: 29, height: 21, left: 6, top: 10 },
    },
  },
]

// The Work page lists the same projects in a different order.
const workOrder = ['mad-house', 'mashville', 'toplan', 'big-apple', 'the-stellar-group']
export const workProjects = workOrder.map((slug) => projects.find((project) => project.slug === slug))

export const disciplines = [
  'Strategy',
  'Visual Identity',
  'Creative Direction',
  'Campaign',
  'Positioning',
  'Design system',
  'Implementation',
]
