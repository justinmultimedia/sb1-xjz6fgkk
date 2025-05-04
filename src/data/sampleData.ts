import { Lesson, Transcript } from '../types';

// Sample lessons data
export const sampleLessons: Lesson[] = [
  {
    id: 1,
    title: 'Understanding the Fundamentals of Tawhid',
    description: 'An in-depth exploration of the concept of Tawhid (Oneness of Allah) and its importance in Islamic faith.',
    duration: '45:20',
    date: 'Apr 15, 2025',
    category: 'aqidah',
    tags: ['tawhid', 'fundamentals', 'aqidah', 'belief'],
    imageUrl: 'https://images.pexels.com/photos/5692893/pexels-photo-5692893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Practical Guidance on Salah',
    description: 'A comprehensive guide on the proper performance of Salah (prayer) according to authentic sources.',
    duration: '38:15',
    date: 'Apr 10, 2025',
    category: 'fiqh',
    tags: ['salah', 'prayer', 'fiqh', 'worship'],
    imageUrl: 'https://images.pexels.com/photos/7249302/pexels-photo-7249302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Tafsir of Surah Al-Fatiha',
    description: 'Detailed explanation of Surah Al-Fatiha, exploring its meaning, significance, and lessons.',
    duration: '52:40',
    date: 'Apr 5, 2025',
    category: 'tafsir',
    tags: ['quran', 'tafsir', 'al-fatiha', 'explanation'],
    imageUrl: 'https://images.pexels.com/photos/5691620/pexels-photo-5691620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'The Life of Prophet Muhammad ﷺ - Makkan Period',
    description: 'Exploring the life of Prophet Muhammad ﷺ during the Makkan period, challenges faced, and lessons learned.',
    duration: '63:10',
    date: 'Mar 28, 2025',
    category: 'seerah',
    tags: ['seerah', 'prophet', 'makkah', 'history'],
    imageUrl: 'https://images.pexels.com/photos/4630588/pexels-photo-4630588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Understanding Hadith Methodology',
    description: 'An introduction to the science of Hadith, including authentication methods and classification.',
    duration: '47:55',
    date: 'Mar 20, 2025',
    category: 'hadith',
    tags: ['hadith', 'methodology', 'isnad', 'authentication'],
    imageUrl: 'https://images.pexels.com/photos/8471839/pexels-photo-8471839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'The Concept of Sabr in Islam',
    description: 'Exploring the Islamic concept of Sabr (patience) and its application in daily life.',
    duration: '35:30',
    date: 'Mar 15, 2025',
    category: 'aqidah',
    tags: ['sabr', 'patience', 'character', 'spirituality'],
    imageUrl: 'https://images.pexels.com/photos/5875066/pexels-photo-5875066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Sample transcript data for a single lesson
export const sampleTranscript: Transcript[] = [
  {
    timestamp: '00:00',
    text: 'Bismillahir Rahmanir Raheem. In the name of Allah, the Most Beneficent, the Most Merciful. Today we will be discussing the concept of Tawhid in Islam.'
  },
  {
    timestamp: '01:15',
    text: 'Tawhid is the most fundamental concept in Islam. It refers to the absolute oneness of Allah. This concept is the foundation upon which all Islamic beliefs and practices are built.'
  },
  {
    timestamp: '03:42',
    text: 'There are three categories of Tawhid that scholars have identified: Tawhid al-Rububiyyah (Oneness of Lordship), Tawhid al-Uluhiyyah (Oneness of Worship), and Tawhid al-Asma was-Sifat (Oneness of Names and Attributes).'
  },
  {
    timestamp: '06:30',
    text: 'Tawhid al-Rububiyyah is the belief that Allah alone is the Lord of the universe. He is the Creator, Sustainer, and Owner of everything that exists. He is the one who gives life and causes death.'
  },
  {
    timestamp: '10:15',
    text: 'Tawhid al-Uluhiyyah means that Allah alone deserves to be worshipped. No act of worship should be directed to anyone or anything other than Allah. This includes prayer, supplication, sacrifice, vows, and all other forms of worship.'
  },
  {
    timestamp: '15:48',
    text: 'Tawhid al-Asma was-Sifat refers to the belief in the oneness of Allah\'s names and attributes. Allah has described Himself in the Quran with certain names and attributes, and we affirm these without distortion, denial, questioning their nature, or likening them to the attributes of created beings.'
  },
  {
    timestamp: '21:23',
    text: 'The opposite of Tawhid is Shirk, which means associating partners with Allah. This is the gravest sin in Islam. Allah says in the Quran: "Indeed, Allah does not forgive association with Him, but He forgives what is less than that for whom He wills." [Surah An-Nisa, 4:48]'
  },
  {
    timestamp: '26:50',
    text: 'Shirk can manifest in various forms. It can be obvious, like worshipping idols, or it can be subtle, like performing acts of worship to impress others rather than for the sake of Allah.'
  },
  {
    timestamp: '32:17',
    text: 'The declaration of faith in Islam, the Shahada, begins with the negation of all false gods ("There is no god") before affirming the truth ("except Allah"). This structure emphasizes the importance of rejecting falsehood before establishing truth.'
  },
  {
    timestamp: '37:40',
    text: 'Tawhid has profound implications for our lives. It liberates us from servitude to created beings and directs our ultimate allegiance to Allah alone. It gives purpose and meaning to our existence and guides our moral and ethical decisions.'
  },
  {
    timestamp: '42:05',
    text: 'In conclusion, Tawhid is not just a theological concept but a comprehensive worldview that shapes every aspect of a Muslim\'s life. It is the core message that all prophets brought to humanity, from Adam to Muhammad, peace be upon them all.'
  }
];

// Sample selected lesson for detail view
export const selectedLesson = sampleLessons[0];