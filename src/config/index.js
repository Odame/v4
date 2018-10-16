module.exports = {
  siteTitle: 'Prince Odame | Back-End Software Engineer',
  siteDescription:
    'A smart-ass computer engineer, building things to make the world a better place',
  siteKeywords:
    'Prince Odame, Prince, Odame, opodame, software engineer, backend, back-end engineer, web developer, python, nodejs, docker, microservices, ghana',
  siteUrl: 'https://princeodame.com',
  siteLanguage: 'en_US',
  siteImage: 'https://princeodame.com/og.png',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Prince Odame',
  location: 'Boston, MA',
  email: 'opodame@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/Odame/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/princeodame/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/opodame/',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/opodame/',
    // },
    {
      name: 'Twitter',
      url: 'https://twitter.com/opodame',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@opodame',
  googleAnalyticsID: '-1', // todo: Sign up with Google Analytics and get a tracking ID

  headerHeight: 100,

  // greenColor: '#64ffda',
  // navyColor: '#0a192f',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
