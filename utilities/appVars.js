import {
  EXPO_FIREBASE_KEY,
  EXPO_FIREBASE_ID,
  EXPO_LEARN_BANNER,
  EXPO_READS_BANNER,
  EXPO_SAVED_READS_BANNER,
  EXPO_CARD_DETAILS_BANNER,
  EXPO_READER_BANNER,
  EXPO_MY_READS_INTERSTITIAL,
  EXPO_SAVED_READS_INTERSTITIAL,
  EXPO_READS_INTERSTITIAL,
  EXPO_READS_REWARD,
} from 'react-native-dotenv'

export const colors = {
  default: '#f3f0ea',
  darker: '#ded7c8',
  dark: '#7f5a14',
  black: '#303131',
  grey: '#757575',
  red: '#e20000',
  highlight: '#B14E17',
  highlightShine: '#ff5900',
  highlightLight: '#d8d0cc',
}

export const MAX_SAVED_READS = 10

export const FIREBASE_CONFIG = {
  apiKey: EXPO_FIREBASE_KEY,
  authDomain: 'tarot-331d9.firebaseapp.com',
  databaseURL: 'https://tarot-331d9.firebaseio.com',
  projectId: 'tarot-331d9',
  storageBucket: 'tarot-331d9.appspot.com',
  appId: EXPO_FIREBASE_ID,
  measurementId: 'G-XCLVKQ5Z46',
}

export const ADMOB = {
  showBannerAds: true,
  showInterstitialAds: true,
  showRewardedAds: true,
  learnBanner: EXPO_LEARN_BANNER,
  readsBanner: EXPO_READS_BANNER,
  savedReadsBanner: EXPO_SAVED_READS_BANNER,
  cardDetailsBanner: EXPO_CARD_DETAILS_BANNER,
  readerBanner: EXPO_READER_BANNER,
  myReadsInterstitial: EXPO_MY_READS_INTERSTITIAL,
  savedReadsInterstitial: EXPO_SAVED_READS_INTERSTITIAL,
  readsInterstitial: EXPO_READS_INTERSTITIAL,
  readReward: EXPO_READS_REWARD,
}

export const SUITS = [
  { name: 'major', nameAr: 'السر الأعظم' },
  { name: 'cups', nameAr: 'الكؤوس' },
  { name: 'pentacles', nameAr: 'النجمة الخماسية' },
  { name: 'wands', nameAr: 'العصي' },
  { name: 'swords', nameAr: 'السيوف' },
]

export const posts = [
  {
    key: 1,
    title: 'ما هي بطاقات التاروت؟',
    description: 'تتكون مجموعة بطاقات التاروت التقليدية من 78 بطاقة: 22 بطاقة من بطاقات السر الأعظم و 40 بطاقة من بطاقات السر الأصغر و 16 بطاقة محكمة.',
    link: 'https://www.eltarot.blog/post/%D9%85%D8%A7-%D9%87%D9%8A-%D8%A8%D8%B7%D8%A7%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%88%D8%AA',
  },
  {
    key: 2,
    title: 'كيف تقرأ بطاقات التاروت؟',
    description: 'قراءات التاروت هي ترتيبات  محددة للبطاقات مصممة لنقل أنواع معينة من المعلومات',
    link: 'https://www.eltarot.blog/post/%D9%83%D9%8A%D9%81-%D8%AA%D9%82%D8%B1%D8%A3-%D8%A8%D8%B7%D8%A7%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%88%D8%AA',
  },
  {
    key: 3,
    title: 'التاروت و بطاقات السر الأعظم: رحلة الأحمق',
    description: 'ترمز كل بطاقة من البطاقات الـ 22 لجانب مختلف من العقل وتسعى معه البطاقات في رحلة من مرحلة التشتت إلى مرحلة الكمال.',
    link: 'https://www.eltarot.blog/post/%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%88%D8%AA-%D9%88-%D8%A8%D8%B7%D8%A7%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%B3%D8%B1-%D8%A7%D9%84%D8%A3%D8%B9%D8%B8%D9%85-'
    + '%D8%B1%D8%AD%D9%84%D8%A9-%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D9%82',
  },
  {
    key: 4,
    title: 'التاروت ودائرة الأبراج',
    description: 'تتوافق مجموعات التاروت الأربعة مع عناصر الحياة الأربعة في علم الأبراج',
    link: 'https://www.eltarot.blog/post/%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%88%D8%AA-%D9%88%D8%AF%D8%A7%D8%A6%D8%B1%D8%A9-%D8%A7%D9%84%D8%A3%D8%A8%D8%B1%D8%A7%D8%AC',
  },
  {
    key: 5,
    title: 'بطاقات السر الأصغر : مجموعة العصي',
    description: ' تحدد المجموعة السلوكيات والمهارات والظروف التي يمكن أن تكون محتملة للنجاح.',
    link: 'https://www.eltarot.blog/post/%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%88%D8%AA-%D8%A8%D8%B7%D8%A7%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%B3%D8%B1-%D8%A7%D9%84%D8%A3%D8%B5%D8%BA%D8%B1-'
    + '%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%A7%D9%84%D8%B9%D8%B5%D9%8A',
  },
  {
    key: 6,
    title: 'بطاقات السر الأصغر : مجموعة النجمة الخماسية',
    description: 'تعني المجموعة الموارد المادية أو القدرات الجسدية أو الظروف الصحية.',
    link: 'https://www.eltarot.blog/post/%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%88%D8%AA-%D8%A8%D8%B7%D8%A7%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%B3%D8%B1-%D8%A7%D9%84%D8%A3%D8%B5%D8%BA%D8%B1-%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-'
    + '%D8%A7%D9%84%D9%86%D8%AC%D9%85%D8%A9-%D8%A7%D9%84%D8%AE%D9%85%D8%A7%D8%B3%D9%8A%D8%A9',
  },
  {
    key: 7,
    title: 'بطاقات السر الأصغر: مجموعة السيوف',
    description: 'تمثل المجموعة الاغتراب عن النفس الذي يأتي من عزل نفسك وعدم سماعك لصوتك الداخلي.',
    link: 'https://www.eltarot.blog/post/%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%88%D8%AA-%D8%A8%D8%B7%D8%A7%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%B3%D8%B1-%D8%A7%D9%84%D8%A3%D8%B5%D8%BA%D8%B1-'
    + '%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%A7%D9%84%D8%B3%D9%8A%D9%88%D9%81',
  },
  {
    key: 8,
    title: 'بطاقات السر الأصغر : مجموعة الكؤوس',
    description: 'تمثل المجموعة الصداقة وحب البشر بشكل عام.',
    link: 'https://www.eltarot.blog/post/%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%88%D8%AA-%D8%A8%D8%B7%D8%A7%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%B3%D8%B1-%D8%A7%D9%84%D8%A3%D8%B5%D8%BA%D8%B1-'
    + '%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%A7%D9%84%D9%83%D8%A4%D9%88%D8%B3',
  },
]
