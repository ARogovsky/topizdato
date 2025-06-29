// Blog content loader utility
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
}

// Mock blog posts data - in a real app, this would load from markdown files
export const blogPosts: BlogPost[] = [
  {
    id: 'beginner-developer-first-project',
    title: 'Як початківцю-розробнику знайти свій перший проект',
    excerpt: 'Покрокова інструкція для тих, хто тільки починає свій шлях у IT та хоче отримати перший комерційний досвід.',
    content: '', // Would be loaded from MD file
    category: 'career',
    author: 'Олексій Петренко',
    date: '2024-01-15',
    readTime: '8 хв',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['початківці', 'кар\'єра', 'фріланс'],
    featured: true
  },
  {
    id: 'technical-specification-mistakes',
    title: '10 помилок при створенні технічного завдання',
    excerpt: 'Найпоширеніші помилки замовників при написанні ТЗ та як їх уникнути для успішної реалізації проекту.',
    content: '',
    category: 'business',
    author: 'Марія Коваленко',
    date: '2024-01-12',
    readTime: '12 хв',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['ТЗ', 'проекти', 'бізнес'],
    featured: false
  },
  {
    id: 'react-vs-vue-comparison',
    title: 'React vs Vue: що обрати для першого проекту',
    excerpt: 'Порівняння популярних JavaScript фреймворків з точки зору початківця. Плюси, мінуси та рекомендації.',
    content: '',
    category: 'development',
    author: 'Дмитро Іваненко',
    date: '2024-01-10',
    readTime: '15 хв',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React', 'Vue', 'JavaScript'],
    featured: true
  },
  {
    id: 'effective-team-communication',
    title: 'Ефективна комунікація в IT команді',
    excerpt: 'Як налагодити продуктивну роботу в команді розробників: інструменти, методи та практичні поради.',
    content: '',
    category: 'team',
    author: 'Андрій Сидоренко',
    date: '2024-01-08',
    readTime: '10 хв',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['команда', 'комунікація', 'менеджмент'],
    featured: false
  },
  {
    id: 'project-cost-estimation',
    title: 'Як оцінити вартість веб-проекту',
    excerpt: 'Методики розрахунку вартості розробки сайтів та веб-додатків. Що впливає на ціну та як не переплатити.',
    content: '',
    category: 'business',
    author: 'Ольга Мельник',
    date: '2024-01-05',
    readTime: '7 хв',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['ціни', 'оцінка', 'проекти'],
    featured: false
  }
];

// Function to load markdown content (mock implementation)
export async function loadBlogPost(id: string): Promise<BlogPost | null> {
  const post = blogPosts.find(p => p.id === id);
  if (!post) return null;

  // In a real implementation, you would:
  // 1. Import the markdown file
  // 2. Parse the frontmatter
  // 3. Convert markdown to HTML
  // 4. Return the complete post object

  try {
    // Mock loading markdown content
    const markdownContent = await import(`../content/blog/${id}.md?raw`);
    return {
      ...post,
      content: markdownContent.default || ''
    };
  } catch (error) {
    console.error(`Failed to load blog post: ${id}`, error);
    return post; // Return post without content if markdown fails to load
  }
}

// Function to get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Function to get featured blog posts
export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

// Function to get blog posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

// Function to search blog posts
export function searchBlogPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}