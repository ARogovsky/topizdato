export const loadMarkdownFile = async (filename: string): Promise<string> => {
  try {
    const response = await fetch(`/src/content/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown file:', error);
    return 'Помилка завантаження документа';
  }
}; 