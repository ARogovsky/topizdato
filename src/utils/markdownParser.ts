export function parseMarkdown(markdown: string): string {
  let html = markdown;

  // Заголовки
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4">$1</h1>');

  // Жирный текст
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

  // Курсив
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');

  // Ссылки
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">$1</a>');

  // Изображения
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="w-full h-auto rounded-lg shadow-lg my-6" />');

  // Код
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>');
  
  // Блоки кода
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm font-mono">$2</code></pre>');

  // Списки
  html = html.replace(/^\* (.*$)/gim, '<li class="ml-4">$1</li>');
  html = html.replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>');
  html = html.replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4">$2</li>');

  // Оборачиваем списки в ul/ol
  html = html.replace(/(<li.*<\/li>)/gs, '<ul class="list-disc space-y-2 my-4">$1</ul>');

  // Цитаты
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-700">$1</blockquote>');

  // Горизонтальные линии
  html = html.replace(/^---$/gim, '<hr class="my-8 border-gray-300" />');

  // Параграфы
  html = html.replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed">');
  html = html.replace(/^([^<].*)/gm, '<p class="mb-4 leading-relaxed">$1</p>');

  // Убираем лишние теги параграфов
  html = html.replace(/<p class="mb-4 leading-relaxed"><\/p>/g, '');
  html = html.replace(/<p class="mb-4 leading-relaxed">(<[^>]+>.*<\/[^>]+>)<\/p>/g, '$1');

  return html;
} 