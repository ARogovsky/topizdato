import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Tag,
  Share2,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { loadBlogPost, getAllBlogPosts, type BlogPost } from '../utils/blogLoader';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        const blogPost = await loadBlogPost(id);
        setPost(blogPost);
        
        if (blogPost) {
          // Get related posts from the same category
          const allPosts = getAllBlogPosts();
          const related = allPosts
            .filter(p => p.id !== id && p.category === blogPost.category)
            .slice(0, 3);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleShare = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Посилання скопійовано в буфер обміну!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Стаття не знайдена</h1>
          <p className="text-gray-600 mb-8">Можливо, стаття була видалена або переміщена.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Повернутися до блогу
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Повернутися до блогу
          </Link>

          <div className="mb-6">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
              post.category === 'development' ? 'bg-blue-100 text-blue-800' :
              post.category === 'business' ? 'bg-green-100 text-green-800' :
              post.category === 'career' ? 'bg-purple-100 text-purple-800' :
              post.category === 'tips' ? 'bg-yellow-100 text-yellow-800' :
              post.category === 'team' ? 'bg-indigo-100 text-indigo-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {post.category === 'development' ? 'Розробка' :
               post.category === 'business' ? 'Бізнес' :
               post.category === 'career' ? 'Кар\'єра' :
               post.category === 'tips' ? 'Поради' :
               post.category === 'team' ? 'Командна робота' :
               'Інше'}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {new Date(post.date).toLocaleDateString('uk-UA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {post.readTime}
            </div>
            <button 
              onClick={handleShare}
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Поділитися
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <span key={tag} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
            {post.excerpt}
          </div>
          
          {/* Mock content since we don't have markdown parser */}
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p>
              Ця стаття містить детальну інформацію про {post.title.toLowerCase()}. 
              Тут ви знайдете практичні поради, приклади коду та покрокові інструкції.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Основні моменти</h2>
            <p>
              У цій секції розглядаються ключові аспекти теми. Матеріал структурований 
              таким чином, щоб ви могли легко знайти потрібну інформацію та застосувати 
              її на практиці.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Практичні приклади</h2>
            <p>
              Тут наведені реальні приклади та кейси, які допоможуть краще зрозуміти 
              матеріал. Кожен приклад супроводжується детальними поясненнями.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="text-blue-800">
                <strong>Порада:</strong> Для кращого засвоєння матеріалу рекомендуємо 
                практикувати отримані знання на реальних проектах.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Висновки</h2>
            <p>
              Підсумовуючи, можна сказати, що розглянута тема є важливою для розвитку 
              в IT сфері. Застосування описаних методів допоможе вам досягти кращих 
              результатів у роботі.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Готові застосувати знання на практиці?
          </h3>
          <p className="text-gray-600 mb-6">
            Приєднуйтесь до команди на ТОП ІЗДАТО та працюйте над реальними проектами
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/create-team"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Створити команду
            </Link>
            <Link 
              to="/find-projects"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
            >
              Знайти проекти
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Схожі статті</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
                >
                  <div className="relative">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(relatedPost.date).toLocaleDateString('uk-UA')}
                      <Clock className="w-4 h-4 ml-4 mr-1" />
                      {relatedPost.readTime}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    
                    <div className="flex items-center text-blue-600 font-semibold">
                      Читати далі
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPostPage;