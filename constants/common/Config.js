import Colors from './Colors';
import Assets from './Assets';

const baseUrl = 'http://13.234.240.173:4000/';

const appEndpoints = {
  login: 'users/logIn',
  signUp: 'users/userSignIn',
  phoneNumberVerify: 'users/phoneNumberVerify',
  resendOTP: 'users/resendOTP',
  //
  getCommunityDetails: 'community/communityDetails',
  getCommunityAndLessonsList: 'listCommunityLessons/listOfAll',
};

const welcomeSwiperItems = [
  {
    title: 'Connect to EXPERTS & EXPERIENCES',
    image: Assets.welcome_img1,
    subTitle:
      'Share meaningful experiences in areas you are interested in or even some you didn’t know about yet.',
  },
  {
    title: 'FIND NEW Communities',
    image: Assets.welcome_img2,
    subTitle:
      'Join growing and active online communities that share your passions!',
  },
  {
    title: 'EXPLORE A NEW MARKETPLACE',
    image: Assets.welcome_img3,
    subTitle: 'Find a marketplace with all products curated by experts',
  },
  {
    title: 'SIMPLE PRICING',
    image: Assets.welcome_img4,
    subTitle:
      'View and interact with communities for free and pay a fee for live and recorded events.',
  },
];

const rnPaperStyles = {
  txtInputStyle: {
    style: {
      marginBottom: 10,
      backgroundColor: 'transparent',
    },
    theme: {
      colors: {primary: Colors.lineColor, underlineColor: 'transparent'},
    },
  },
};

const tabBarNamesArr = {
  library: 'Library',
  communities: 'Communities',
  home: 'Home',
  experts: 'Experts',
  market: 'Market',
};

const homeStackArr = [
  {
    image: 'https://i.imgur.com/SsJmZ9jl.jpg',
    title: 'community',
    subTitle: 'Whiskies of the world',
    user: {
      name: 'Robert Fraser',
      address: 'Scotland, UK',
      userImg: 'https://i.imgur.com/ryybk8P.jpg',
      level: 'Expert',
    },
  },
  {
    image: 'https://i.imgur.com/5tj6S7Ol.jpg',
    title: 'sessions',
    subTitle: 'MUSIC LESSONS',
    user: {
      name: 'WOLFGANG MOZART',
      address: 'Venice, ITALY',
      userImg: 'https://i.imgur.com/ryybk8P.jpg',
      level: 'Beginner',
    },
  },
  {
    image: 'https://i.imgur.com/pmSqIFZl.jpg',
    title: 'community',
    subTitle: 'AWESOME BOOK CLUB',
    user: {
      name: 'WILLIAM SHAKESPEARe',
      address: 'London, UK',
      userImg: 'https://i.imgur.com/ryybk8P.jpg',
      level: 'Beginner',
    },
  },
];

const homeHorizontalTabArr = ['New', 'Fun', 'Education', 'Finance'];

const appDefaults = {
  callingCode: '1',
  countryCode: 'US',
  countryCodeLowerCase: 'us',
  // currency: "IND",
  // flag: "",
  // name: "India",
  // region: "Asia",
  // subregion: "",
};

export default {
  welcomeSwiperItems,
  rnPaperStyles,
  tabBarNamesArr,
  homeStackArr,
  homeHorizontalTabArr,
  appDefaults,
  baseUrl,
  appEndpoints,
};
