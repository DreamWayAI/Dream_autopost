
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [date, setDate] = useState('');
  const [theme, setTheme] = useState('');
  const [image, setImage] = useState('');
  const [prompt, setPrompt] = useState('');
  const [text, setText] = useState('');
  const [status, setStatus] = useState('Очікує');

  const handleAuth = () => {
    if (password === '1510Andrey1618') setUnlocked(true);
    else alert('Невірний пароль');
  };

  const generatePost = () => {
    setText("🔮 GPT результат: " + prompt);
    setStatus("Згенеровано");
  };

  const publishPost = () => {
    alert("🚀 Пост опубліковано!");
    setStatus("Опубліковано");
  };

  return (
    <>
      <Head><title>DreamWay</title></Head>
      <main style={{
        background: '#0d1117', minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif', color: '#fff'
      }}>
        {!unlocked ? (
          <div style={{ maxWidth: 400, margin: '0 auto' }}>
            <h2>🔐 Авторизація</h2>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              placeholder="Введіть пароль" style={styles.input} />
            <button onClick={handleAuth} style={styles.button}>Увійти</button>
          </div>
        ) : (
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h1>DreamWay AI ✨</h1>
            <div style={styles.row}>
              <input type="text" placeholder="14.06.2025" value={date} onChange={e => setDate(e.target.value)} style={styles.input} />
              <input type="text" placeholder="Тема" value={theme} onChange={e => setTheme(e.target.value)} style={styles.input} />
              <input type="text" placeholder="Посилання на зображення" value={image} onChange={e => setImage(e.target.value)} style={styles.input} />
            </div>
            <textarea placeholder="Згенеруй пост у стилі DreamWay AI" value={prompt} onChange={e => setPrompt(e.target.value)} style={styles.textarea} />
            <textarea placeholder="Текст поста" value={text} onChange={e => setText(e.target.value)} style={styles.textarea} />
            <p>Статус: <b>{status}</b></p>
            <div style={styles.row}>
              <button onClick={generatePost} style={styles.button}>GPT ✨ Згенерувати</button>
              <button onClick={publishPost} style={{ ...styles.button, background: '#4f46e5' }}>Опублікувати 🚀</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

const styles = {
  row: { display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' },
  input: { padding: '0.7rem', background: '#1f2937', color: '#fff', border: '1px solid #374151', borderRadius: 6, flex: 1 },
  textarea: { width: '100%', padding: '1rem', background: '#1f2937', color: '#fff', border: '1px solid #374151', borderRadius: 6, marginTop: '1rem', minHeight: 100 },
  button: { padding: '0.8rem 2rem', background: '#8f44fd', border: 'none', color: '#fff', fontSize: '1rem', borderRadius: 6, cursor: 'pointer', marginTop: '1rem' }
};
