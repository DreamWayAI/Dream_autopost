
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleAuth = () => {
    if (password === '1510Andrey1618') setUnlocked(true);
    else alert('Невірний пароль');
  };

  const generate = () => {
    alert('✨ GPT згенерує текст та картинку...');
  };

  return (
    <>
      <Head>
        <title>DreamWay AI</title>
      </Head>
      <main style={{
        background: 'linear-gradient(to bottom right, #1f1c2c, #928DAB)',
        minHeight: '100vh', padding: '2rem', color: '#fff', fontFamily: 'sans-serif'
      }}>
        {!unlocked ? (
          <div style={{ maxWidth: 400, margin: '0 auto', textAlign: 'center' }}>
            <h2>🔒 Вхід у DreamWay</h2>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Введіть пароль"
              style={{ padding: '0.5rem', width: '100%', marginTop: '1rem' }}
            />
            <button onClick={handleAuth} style={{
              marginTop: '1rem', padding: '0.7rem 2rem', background: '#6C63FF',
              border: 'none', color: '#fff', cursor: 'pointer'
            }}>Увійти</button>
          </div>
        ) : (
          <>
            <h1 style={{ fontSize: '2rem' }}>DreamWay AI ✨</h1>
            <p>Тема: <b>Цікаве про штучний інтелект</b></p>
            <textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="Про що згенерувати пост?"
              style={{ width: '100%', minHeight: 100, padding: '1rem', marginTop: '1rem' }}
            />
            <button onClick={generate} style={{
              marginTop: '1rem', padding: '0.8rem 2rem', background: '#6C63FF',
              border: 'none', color: '#fff', fontSize: '1rem', cursor: 'pointer'
            }}>GPT ✨ Згенерувати</button>
          </>
        )}
      </main>
    </>
  );
}
