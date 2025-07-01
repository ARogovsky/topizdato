import { BlogPost, BlogPostMeta, parseYamlFrontmatter, validateBlogPostMeta } from './yamlParser';

export type { BlogPostMeta, BlogPost } from './yamlParser';

// Список всех постов блога
const blogPostIds = [
  'beginner-developer-first-project',
  'technical-specification-mistakes', 
  'react-vs-vue-comparison',
  'effective-team-communication',
  'project-cost-estimation'
];

// Кэш для загруженных постов
const blogPostsCache = new Map<string, BlogPost>();

// Function to load markdown content with YAML frontmatter
export async function loadBlogPost(id: string): Promise<BlogPost | null> {
  // Проверяем кэш
  if (blogPostsCache.has(id)) {
    return blogPostsCache.get(id)!;
  }

  try {
    // Загружаем markdown файл
    const markdownModule = await import(`../content/blog/${id}.md?raw`);
    const markdownContent = markdownModule.default;
    
    // Парсим YAML frontmatter
    const { meta, content } = parseYamlFrontmatter(markdownContent);
    const validatedMeta = validateBlogPostMeta(meta);
    
    const blogPost: BlogPost = {
      meta: validatedMeta,
      content
    };
    
    // Сохраняем в кэш
    blogPostsCache.set(id, blogPost);
    
    return blogPost;
  } catch (error) {
    console.error(`Failed to load blog post: ${id}`, error);
    return null;
  }
}

// Function to get all blog posts metadata
export async function getAllBlogPosts(): Promise<BlogPostMeta[]> {
  const posts: BlogPostMeta[] = [];
  
  for (const id of blogPostIds) {
    try {
      const post = await loadBlogPost(id);
      if (post) {
        posts.push(post.meta);
      }
    } catch (error) {
      console.error(`Failed to load blog post metadata: ${id}`, error);
    }
  }
  
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Function to get featured blog posts
export async function getFeaturedBlogPosts(): Promise<BlogPostMeta[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter(post => post.featured);
}

// Function to get blog posts by category
export async function getBlogPostsByCategory(category: string): Promise<BlogPostMeta[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter(post => post.category === category);
}

// Function to search blog posts
export async function searchBlogPosts(query: string): Promise<BlogPostMeta[]> {
  const allPosts = await getAllBlogPosts();
  const lowercaseQuery = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}