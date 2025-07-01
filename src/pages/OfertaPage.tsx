import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Loader2 } from 'lucide-react';
import { loadMarkdownFile } from '../utils/markdownLoader';

const OfertaPage = () => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadOferta = async () => {
      try {
        setLoading(true);
        const markdownContent = await loadMarkdownFile('oferta.md');
        setContent(markdownContent);
      } catch (err) {
        setError('Помилка завантаження документа');
      } finally {
        setLoading(false);
      }
    };

    loadOferta();
  }, []);

  const formatMarkdown = (markdown: string) => {
    let formatted = markdown;
    
    // Обработка списков
    const lines = formatted.split('\n');
    let inList = false;
    let listType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Проверяем, является ли строка элементом списка
      if (/^\d+\.\s+/.test(line)) {
        if (!inList || listType !== 'ol') {
          if (inList) lines[i-1] += '</ul>';
          lines[i] = '<ol class="list-decimal list-inside mb-4 space-y-1">' + line.replace(/^\d+\.\s+/, '<li>') + '</li>';
          inList = true;
          listType = 'ol';
        } else {
          lines[i] = line.replace(/^\d+\.\s+/, '<li>') + '</li>';
        }
      } else if (/^-\s+/.test(line)) {
        if (!inList || listType !== 'ul') {
          if (inList) lines[i-1] += '</ol>';
          lines[i] = '<ul class="list-disc list-inside mb-4 space-y-1">' + line.replace(/^-\s+/, '<li>') + '</li>';
          inList = true;
          listType = 'ul';
        } else {
          lines[i] = line.replace(/^-\s+/, '<li>') + '</li>';
        }
      } else {
        // Если строка не является элементом списка, закрываем список
        if (inList) {
          lines[i-1] += listType === 'ol' ? '</ol>' : '</ul>';
          inList = false;
          listType = '';
        }
      }
    }
    
    // Закрываем список, если он был открыт в конце
    if (inList) {
      lines[lines.length - 1] += listType === 'ol' ? '</ol>' : '</ul>';
    }
    
    formatted = lines.join('\n');
    
    // Остальные преобразования
    return formatted
      // Заголовки
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 mb-6">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-gray-900 mb-3 mt-6">$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4 class="text-lg font-semibold text-gray-900 mb-2 mt-4">$1</h4>')
      
      // Жирный текст
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      
      // Курсив
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      
      // Параграфы (только для строк, которые не являются заголовками или списками)
      .replace(/\n\n/g, '</p><p class="mb-4">')
      
      // Ссылки
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">$1</a>')
      
      // Горизонтальная линия
      .replace(/^---$/gim, '<hr class="my-8 border-gray-300">')
      
      // Код
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>')
      
      // Блоки кода
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>$1</code></pre>');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Договір-оферта
          </h1>
          <p className="text-xl text-gray-600">
            Умови надання інформаційних послуг платформи ТОП ІЗДАТО
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin mr-3" />
              <span className="text-gray-600">Завантаження документа...</span>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Помилка завантаження</h3>
              <p className="text-gray-600">{error}</p>
            </div>
          ) : (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: `<p class="mb-4">${formatMarkdown(content)}</p>` 
              }}
            />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfertaPage; 