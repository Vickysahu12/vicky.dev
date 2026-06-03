import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Path: pages/ se content/ ka relative path
const modules = import.meta.glob('../blog/*.mdx')

export function BlogPost() {
  const { slug } = useParams()
  const [PostContent, setPostContent] = useState(null)
  const [meta, setMeta] = useState(null)
  const [progress, setProgress] = useState(0)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const key = `../blog/${slug}.mdx`
    console.log('Looking for:', key)
    console.log('Available modules:', Object.keys(modules))

    if (!modules[key]) {
      setNotFound(true)
      return
    }
    modules[key]().then((mod) => {
      setPostContent(() => mod.default)
      setMeta(mod.meta)
    })
  }, [slug])

  if (notFound) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
      <p style={{ color: '#9ca3af', fontFamily: 'monospace' }}>404 — Post not found</p>
      <Link to="/" style={{ color: '#00FFB2', fontFamily: 'monospace', fontSize: '14px' }}>← Back home</Link>
    </div>
  )

  if (!PostContent) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#9ca3af', fontFamily: 'monospace', fontSize: '14px' }}>Loading...</p>
    </div>
  )

  return (
    <>
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 100,
        height: '3px', width: progress + '%',
        background: 'linear-gradient(to right, #00FFB2, #00C9FF)',
        transition: 'width 0.1s linear',
      }} />

      <article style={{ maxWidth: '680px', margin: '0 auto', padding: '120px 24px 80px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#9ca3af', fontFamily: 'monospace', fontSize: '13px', textDecoration: 'none', marginBottom: '40px' }}>
          ← Back
        </Link>

        {meta && (
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {meta.tags?.map(tag => (
                <span key={tag} style={{ fontFamily: 'monospace', fontSize: '11px', color: '#00FFB2', border: '1px solid rgba(0,255,178,0.3)', padding: '3px 10px', borderRadius: '999px' }}>
                  {tag}
                </span>
              ))}
            </div>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
              {meta.title}
            </h1>
            <div style={{ display: 'flex', gap: '16px', color: '#9ca3af', fontFamily: 'monospace', fontSize: '13px' }}>
              <span>{meta.date}</span>
              <span>·</span>
              <span>{meta.readTime} read</span>
            </div>
          </div>
        )}

        <div style={{ height: '1px', background: '#1A1F2E', marginBottom: '40px' }} />

        <div className="prose-blog">
          <PostContent />
        </div>
      </article>
    </>
  )
}