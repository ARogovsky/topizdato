export interface BlogPostMeta {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: string;
}

export function parseYamlFrontmatter(markdownContent: string): { meta: any; content: string } {
  const yamlRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdownContent.match(yamlRegex);
  
  if (!match) {
    throw new Error('No YAML frontmatter found');
  }
  
  const yamlContent = match[1];
  const content = match[2];
  
  // Простой парсер YAML для основных типов данных
  const meta: any = {};
  const lines = yamlContent.split('\n');
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) continue;
    
    const colonIndex = trimmedLine.indexOf(':');
    if (colonIndex === -1) continue;
    
    const key = trimmedLine.substring(0, colonIndex).trim();
    let value = trimmedLine.substring(colonIndex + 1).trim();
    
    // Убираем кавычки если есть
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    // Парсим массивы
    if (value.startsWith('[') && value.endsWith(']')) {
      meta[key] = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
    }
    // Парсим булевы значения
    else if (value === 'true') {
      meta[key] = true;
    }
    else if (value === 'false') {
      meta[key] = false;
    }
    else {
      meta[key] = value;
    }
  }
  
  return { meta, content };
}

export function validateBlogPostMeta(meta: any): BlogPostMeta {
  const requiredFields = ['id', 'title', 'excerpt', 'category', 'author', 'date', 'readTime', 'image', 'tags', 'featured'];
  
  for (const field of requiredFields) {
    if (meta[field] === undefined) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
  
  return meta as BlogPostMeta;
} 