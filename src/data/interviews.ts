export interface CreatorInterview {
  id: string;
  creatorName: string;
  title: string;
  summary: string;
  attribution: string;
  imageUrl: string;
  imageAlt: string;
  channelUrl: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

// Add future creator interviews here so the page layout can be reused.
export const creatorInterviews: CreatorInterview[] = [
  {
    id: 'the-littlest-snail-community',
    creatorName: 'The Littlest Snail',
    title: 'Making every viewer feel seen',
    summary: 'The Littlest Snail shares how authenticity, acceptance, and attention help shape her welcoming Fortnite community.',
    attribution: 'Interview conducted by the site owner.',
    imageUrl: 'creators/littlest-snail-starflare.png',
    imageAlt: 'The Littlest Snail’s featured Starflare Fortnite outfit',
    channelUrl: 'https://www.youtube.com/@LittlestSnail',
    questions: [
      {
        question: 'There are thousands of Fortnite creators out there, but your channel has such a distinct, welcoming energy. What do you feel is the most important thing you bring to your community every time you go live?',
        answer: 'Thank you for saying that! It’s cheesy but the most important thing a streamer can do is be themselves. By being loud, silly, and not taking myself too seriously, I am showing my community that they can be themselves too! I accept everyone for who they are, and I am lucky that so many of them accept me for myself as well.',
      },
      {
        question: 'Gaming communities can sometimes feel intense or unwelcoming. How do you actively protect your viewer lobbies to make sure they stay a safe, family-friendly space for everyone?',
        answer: 'Keeping the community space welcoming and friendly should be one of the main goals of any streamer! I think making sure that everyone feels important and seen, whether they are a first time viewer or whether it’s their 200th stream.',
      },
    ],
  },
];
