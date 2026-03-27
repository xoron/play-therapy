/**
 * Stock-style photos via Lorem Flickr (https://loremflickr.com): comma-separated
 * tags in the path act like search terms; ?lock=N keeps a stable image per slot
 * while you iterate on the site. Swap these URLs for your own assets when ready.
 *
 * Requires network at view time. Images come from Flickr’s pool for those tags.
 */
export const PLACEHOLDER_IMAGES = {
  /** Hero: children + playful setting */
  hero: 'https://loremflickr.com/640/360/child,playground?lock=8721',
  /** Pillar — child-led play */
  feature1: 'https://loremflickr.com/200/200/toy,kindergarten?lock=8722',
  /** Pillar — relationship / warmth */
  feature2: 'https://loremflickr.com/200/200/child,smile?lock=8723',
  /** Pillar — families / partnership */
  feature3: 'https://loremflickr.com/200/200/family,child?lock=8724',
  /** About page — calmer “care / learning” tone */
  about: 'https://loremflickr.com/480/280/children,library?lock=8725',
  /** About — opening visual */
  aboutIntro: 'https://loremflickr.com/640/260/children,teacher?lock=8726',

  /** Services — play materials / session tone */
  servicesBanner: 'https://loremflickr.com/640/280/toys,kindergarten?lock=8727',
  servicesDetail:
    'https://loremflickr.com/480/280/children,classroom?lock=8728',

  /** Approach — expression & connection */
  approachBanner: 'https://loremflickr.com/640/280/child,drawing?lock=8729',
  approachSupport:
    'https://loremflickr.com/480/280/children,smile?lock=8730',

  /** For families — welcome & continuity of care */
  familiesBanner: 'https://loremflickr.com/640/280/mother,child?lock=8731',
  familiesCare: 'https://loremflickr.com/480/280/family,sunset?lock=8732',

  /** Contact — getting in touch */
  contactBanner: 'https://loremflickr.com/640/300/notebook,coffee?lock=8733',

  /** FAQ — gentle “questions” mood */
  faqBanner: 'https://loremflickr.com/520/280/child,book?lock=8734',
} as const;
