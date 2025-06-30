# React vs Vue: що обрати для першого проекту

*Автор: Дмитро Іваненко • Дата: 10 січня 2024 • Час читання: 15 хв*

![React vs Vue](https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800)

Вибір першого JavaScript фреймворку — це важливе рішення, яке впливає на весь подальший шлях розвитку. React та Vue.js є двома найпопулярнішими варіантами для початківців. У цій статті я детально порівняю обидва фреймворки з точки зору новачка, щоб допомогти вам зробити правильний вибір.

## Короткий огляд фреймворків

### React
**Розробник:** Facebook (Meta)  
**Рік випуску:** 2013  
**Тип:** JavaScript бібліотека для створення користувацьких інтерфейсів  

**Ключові особливості:**
- Компонентна архітектура
- Virtual DOM
- Односпрямований потік даних
- JSX синтаксис
- Великий екосистема

### Vue.js
**Розробник:** Evan You  
**Рік випуску:** 2014  
**Тип:** Прогресивний JavaScript фреймворк  

**Ключові особливості:**
- Поступове впровадження
- Реактивна система даних
- Template синтаксис
- Вбудований роутинг та стейт менеджмент
- Простота вивчення

## Порівняння для початківців

### 1. Легкість вивчення

#### React
**Складність:** Середня-висока

**Що потрібно знати:**
```javascript
// Базові знання JavaScript
const name = 'John';
const element = <h1>Hello, {name}!</h1>;

// ES6+ синтаксис
const MyComponent = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};
```

**Переваги для навчання:**
- ✅ Поглиблює знання JavaScript
- ✅ Навчає функціональному програмуванню
- ✅ Багато навчальних ресурсів

**Недоліки для початківців:**
- ❌ JSX може бути незвичним
- ❌ Потрібно розуміти концепції як hooks, state, props
- ❌ Багато способів зробити одне і те ж

#### Vue.js
**Складність:** Низька-середня

**Що потрібно знати:**
```vue
<template>
  <div>
    <p>You clicked {{ count }} times</p>
    <button @click="increment">Click me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
```

**Переваги для навчання:**
- ✅ Інтуїтивний template синтаксис
- ✅ Менше boilerplate коду
- ✅ Поступове вивчення концепцій

**Недоліки для початківців:**
- ❌ Може приховувати складність JavaScript
- ❌ Менше ресурсів українською мовою

### 2. Синтаксис та структура

#### React - JSX підхід
```jsx
// Компонент списку завдань
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-app">
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Додати завдання..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Додати</button>
      </div>
      
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
```

#### Vue - Template підхід
```vue
<template>
  <div class="todo-app">
    <div class="input-section">
      <input
        v-model="inputValue"
        @keyup.enter="addTodo"
        placeholder="Додати завдання..."
        type="text"
      />
      <button @click="addTodo">Додати</button>
    </div>
    
    <ul class="todo-list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        <input
          type="checkbox"
          v-model="todo.completed"
        />
        <span>{{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      todos: [],
      inputValue: ''
    }
  },
  methods: {
    addTodo() {
      if (this.inputValue.trim()) {
        this.todos.push({
          id: Date.now(),
          text: this.inputValue,
          completed: false
        });
        this.inputValue = '';
      }
    }
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  opacity: 0.6;
}

.todo-app {
  max-width: 400px;
  margin: 0 auto;
}

.input-section {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
```

### 3. Екосистема та інструменти

#### React екосистема
```bash
# Створення проекту
npx create-react-app my-app
cd my-app
npm start

# Популярні бібліотеки
npm install react-router-dom  # Роутинг
npm install redux @reduxjs/toolkit  # Стейт менеджмент
npm install axios  # HTTP запити
npm install styled-components  # CSS-in-JS
npm install material-ui  # UI компоненти
```

**Переваги:**
- ✅ Величезна кількість бібліотек
- ✅ Активна спільнота
- ✅ Багато готових рішень

**Недоліки:**
- ❌ Потрібно обирати з багатьох варіантів
- ❌ Може бути overwhelming для початківців

#### Vue екосистема
```bash
# Створення проекту
npm create vue@latest my-project
cd my-project
npm install
npm run dev

# Офіційні бібліотеки
npm install vue-router  # Роутинг
npm install pinia  # Стейт менеджмент
npm install @vue/cli  # CLI інструменти
```

**Переваги:**
- ✅ Офіційні рішення для основних потреб
- ✅ Менше рішень для прийняття
- ✅ Все працює разом "з коробки"

**Недоліки:**
- ❌ Менший вибір сторонніх бібліотек
- ❌ Менша спільнота

### 4. Продуктивність

#### React
```javascript
// Оптимізація через React.memo
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: heavyCalculation(item)
    }));
  }, [data]);

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id}>{item.processed}</div>
      ))}
    </div>
  );
});

// Lazy loading
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

#### Vue
```vue
<!-- Автоматична оптимізація -->
<template>
  <div>
    <div v-for="item in processedData" :key="item.id">
      {{ item.processed }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // Автоматичне кешування
    processedData() {
      return this.data.map(item => ({
        ...item,
        processed: this.heavyCalculation(item)
      }));
    }
  },
  methods: {
    heavyCalculation(item) {
      // Складні обчислення
    }
  }
}
</script>
```

### 5. Ринок праці та кар'єрні можливості

#### React
**Статистика вакансій в Україні (2024):**
- 🔥 65% всіх frontend вакансій
- 💰 Середня зарплата: $1500-4000
- 🏢 Використовують: Facebook, Netflix, Airbnb, Uber

**Типові вимоги:**
```
Junior React Developer:
- React, JSX
- JavaScript ES6+
- HTML/CSS
- Git
- Базове розуміння Redux

Middle React Developer:
- React Hooks
- Redux/Context API
- TypeScript
- Testing (Jest, React Testing Library)
- Next.js або Gatsby
```

#### Vue.js
**Статистика вакансій в Україні (2024):**
- 📈 20% всіх frontend вакансій
- 💰 Середня зарплата: $1200-3500
- 🏢 Використовують: GitLab, Adobe, Nintendo, BMW

**Типові вимоги:**
```
Junior Vue Developer:
- Vue.js 3
- JavaScript ES6+
- HTML/CSS
- Vue Router
- Vuex/Pinia

Middle Vue Developer:
- Composition API
- TypeScript
- Nuxt.js
- Testing (Vue Test Utils)
- Performance optimization
```

## Практичні приклади

### Створення простого блогу

#### React версія
```jsx
// App.js
import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Завантаження...</div>;
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Мій Блог</h1>
      </header>
      <main className="main">
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
}

// BlogPost.js
import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <article className="blog-post">
      <h2>{post.title}</h2>
      <p className="meta">
        {post.author} • {new Date(post.date).toLocaleDateString('uk-UA')}
      </p>
      <p>{post.excerpt}</p>
      <a href={`/post/${post.id}`} className="read-more">
        Читати далі →
      </a>
    </article>
  );
};

export default BlogPost;
```

#### Vue версія
```vue
<!-- App.vue -->
<template>
  <div class="app">
    <header class="header">
      <h1>Мій Блог</h1>
    </header>
    <main class="main">
      <div v-if="loading" class="loading">
        Завантаження...
      </div>
      <BlogPost
        v-else
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </main>
  </div>
</template>

<script>
import BlogPost from './components/BlogPost.vue';

export default {
  name: 'App',
  components: {
    BlogPost
  },
  data() {
    return {
      posts: [],
      loading: true
    }
  },
  async mounted() {
    await this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch('/api/posts');
        this.posts = await response.json();
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<!-- BlogPost.vue -->
<template>
  <article class="blog-post">
    <h2>{{ post.title }}</h2>
    <p class="meta">
      {{ post.author }} • {{ formatDate(post.date) }}
    </p>
    <p>{{ post.excerpt }}</p>
    <router-link :to="`/post/${post.id}`" class="read-more">
      Читати далі →
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('uk-UA');
    }
  }
}
</script>

<style scoped>
.blog-post {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.meta {
  color: #666;
  font-size: 14px;
}

.read-more {
  color: #007bff;
  text-decoration: none;
}
</style>
```

## Рекомендації для різних ситуацій

### Обирайте React, якщо:

1. **Хочете максимальні кар'єрні можливості**
   - Більше вакансій на ринку
   - Вищі зарплати
   - Більше можливостей для фрілансу

2. **Плануєте працювати в великих компаніях**
   - React частіше використовується в enterprise
   - Краща підтримка складних проектів

3. **Хочете глибоко вивчити JavaScript**
   - React змушує краще розуміти JS
   - Розвиває навички функціонального програмування

4. **Потрібна максимальна гнучкість**
   - Багато варіантів для кожної задачі
   - Можливість налаштувати все під себе

### Обирайте Vue, якщо:

1. **Хочете швидко почати створювати проекти**
   - Простіший синтаксис
   - Менше концепцій для вивчення
   - Швидший старт

2. **Працюєте в малих командах або соло**
   - Менше overhead
   - Простіше підтримувати код

3. **Цінуєте простоту та елегантність**
   - Чистіший код
   - Менше boilerplate
   - Інтуїтивний API

4. **Хочете все "з коробки"**
   - Офіційні рішення для роутингу та стейту
   - Менше рішень для прийняття

## План вивчення для початківців

### React (12 тижнів)
```
Тиждень 1-2: JavaScript ES6+
- Arrow functions, destructuring
- Promises, async/await
- Modules, classes

Тиждень 3-4: React основи
- JSX синтаксис
- Компоненти та props
- State та lifecycle

Тиждень 5-6: React Hooks
- useState, useEffect
- Custom hooks
- Context API

Тиждень 7-8: Роутинг та форми
- React Router
- Controlled components
- Form validation

Тиждень 9-10: Стейт менеджмент
- Redux basics
- Redux Toolkit
- Async actions

Тиждень 11-12: Проект
- Створення повноцінного додатку
- Деплой та оптимізація
```

### Vue (10 тижнів)
```
Тиждень 1-2: JavaScript ES6+
- Основи сучасного JS
- Modules та classes

Тиждень 3-4: Vue основи
- Template синтаксис
- Директиви (v-if, v-for)
- Компоненти та props

Тиждень 5-6: Vue екосистема
- Vue Router
- Vuex/Pinia
- Vue CLI

Тиждень 7-8: Composition API
- setup()
- Reactive refs
- Computed properties

Тиждень 9-10: Проект
- Створення SPA
- Деплой та оптимізація
```

## Висновки та рекомендації

### Для абсолютних початківців:
**Рекомендую Vue.js** — простіший старт, швидші результати, менше фрустрації.

### Для тих, хто має базу JavaScript:
**Рекомендую React** — більше можливостей, кращі перспективи, глибше розуміння.

### Для швидкого результату:
**Vue.js** — можна створити робочий проект за тиждень.

### Для довгострокової кар'єри:
**React** — більше вакансій та вищі зарплати.

### Універсальна порада:
Не зациклюйтеся на виборі. Обидва фреймворки відмінні, і знання одного допоможе швидко вивчити інший. Головне — почати програмувати та створювати проекти!

**Пам'ятайте**: найкращий фреймворк — той, з яким ви створюєте проекти, а не той, який вивчаєте роками.

---

**Корисні ресурси:**

**React:**
- [Офіційна документація](https://react.dev/)
- [React Tutorial](https://react.dev/learn)
- [Create React App](https://create-react-app.dev/)

**Vue:**
- [Офіційна документація](https://vuejs.org/)
- [Vue Mastery](https://www.vuemastery.com/)
- [Vue School](https://vueschool.io/)

**Практика:**
- [ТОП ІЗДАТО](/) — знайдіть команду для першого проекту
- [CodeSandbox](https://codesandbox.io/) — онлайн редактор
- [GitHub](https://github.com/) — зберігайте свої проекти

**Теги:** #React #Vue #JavaScript #frontend #початківці #порівняння