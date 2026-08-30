import { PersonalityArea } from '../types';

export const personalityData: PersonalityArea[] = [
  {
    id: 'data',
    title: 'DATA',
    tagline: 'Finding patterns and turning them into decisions.',
    detail: 'I see data not just as numbers in rows, but as the raw narrative of how organizations and people behave. Uncovering the signal beneath the noise is where real clarity begins.',
    focusTopics: ['Statistical analysis', 'Relational structures', 'Predictive modeling', 'Visual storytelling']
  },
  {
    id: 'ai',
    title: 'AI',
    tagline: 'Building practical applications around intelligent systems.',
    detail: 'Rather than treating artificial intelligence as a black box novelty, I focus on integrating machine learning and LLMs into daily software workflows to solve tangible friction points.',
    focusTopics: ['Practical ML pipelines', 'LLM orchestration', 'Contextual assistance', 'Evaluation metrics']
  },
  {
    id: 'business',
    title: 'BUSINESS',
    tagline: 'Understanding how technology can solve real problems.',
    detail: 'Technology only creates impact when it aligns with real human and organizational needs. I enjoy unpacking business models, identifying inefficiencies, and designing measurable solutions.',
    focusTopics: ['Process optimization', 'Revenue visibility', 'Stakeholder requirements', 'Operational workflows']
  },
  {
    id: 'product',
    title: 'PRODUCT',
    tagline: 'Creating experiences people can actually use.',
    detail: 'A powerful backend is useless if the interface confuses its user. I value minimalist design, deliberate typography, and intuitive user experiences that make complex systems feel effortless.',
    focusTopics: ['Human-centered design', 'Clarity & restraint', 'Responsive architecture', 'Interaction design']
  }
];
