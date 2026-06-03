import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { Tag } from '../ui/Tag'
import { FaClock, FaHeart, FaRegHeart, FaEye } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'
import { blogPosts } from '../../data/blog'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function FeaturedCard({ post }) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(24)

  return (
    <Link to={`/blog/${post.slug}`} className="block" style={{ textDecoration: 'none' }}>
      <div className="group relative rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_#00FFB215] cursor-pointer mb-6">
        {/* Top gradient bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#00FFB2] to-[#00C9FF]" />

        {/* Glow blob */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFB2] opacity-[0.03] rounded-full blur-3xl pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-500" />

        <div className="p-6 md:p-8">
          {/* Featured badge */}
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] text-black bg-accent px-3 py-1 rounded-full font-semibold tracking-widest uppercase">
              Featured
            </span>
            <span className="font-mono text-xs text-text-dim">{post.date}</span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors leading-tight">
            {post.title}
          </h3>
          <p className="text-text-dim font-body text-sm leading-relaxed mb-6 max-w-2xl">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              {post.tags.map((tag) => (
                <Tag key={tag} variant="default">{tag}</Tag>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Views */}
              <div className="flex items-center gap-1.5 text-text-dim">
                <FaEye size={12} />
                <span className="font-mono text-xs">1.2k</span>
              </div>

              {/* Likes */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setLiked(prev => !prev)
                  setLikes(prev => liked ? prev - 1 : prev + 1)
                }}
                className="flex items-center gap-1.5 transition-colors"
                style={{ color: liked ? '#ff6b6b' : '#9ca3af' }}
              >
                {liked ? <FaHeart size={12} /> : <FaRegHeart size={12} />}
                <span className="font-mono text-xs">{likes}</span>
              </button>

              {/* Read time */}
              <div className="flex items-center gap-1.5 text-text-dim">
                <FaClock size={11} />
                <span className="font-mono text-xs">{post.readTime}</span>
              </div>

              <div className="flex items-center gap-1 text-accent font-mono text-xs font-semibold group-hover:gap-2 transition-all">
                Read post <HiArrowUpRight size={13} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function PostCard({ post }) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(Math.floor(Math.random() * 20) + 5)

  return (
    <Link to={`/blog/${post.slug}`} className="block" style={{ textDecoration: 'none' }}>
      <div className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-border bg-surface hover:border-accent/30 hover:bg-accent/[0.02] hover:shadow-[0_4px_20px_#00FFB20A] transition-all duration-200 cursor-pointer overflow-hidden">
        {/* Subtle side glow on hover */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex items-start gap-3">
          <span className="font-mono text-xs text-text-dim flex-shrink-0 mt-1 w-14">
            {post.date}
          </span>
          <div className="min-w-0">
            <h3 className="font-display font-semibold text-base group-hover:text-accent transition-colors truncate">
              {post.title}
            </h3>
            <p className="text-text-dim font-body text-sm mt-0.5 line-clamp-1">
              {post.excerpt}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap pl-[68px]">
          {post.tags.map((tag) => (
            <Tag key={tag} variant="default">{tag}</Tag>
          ))}
          <div className="flex items-center gap-3 ml-auto">
            {/* Views */}
            <div className="flex items-center gap-1 text-text-dim">
              <FaEye size={11} />
              <span className="font-mono text-xs">840</span>
            </div>

            {/* Likes */}
            <button
              onClick={(e) => {
                e.preventDefault()
                setLiked(p => !p)
                setLikes(p => liked ? p - 1 : p + 1)
              }}
              className="flex items-center gap-1 transition-colors"
              style={{ color: liked ? '#ff6b6b' : '#9ca3af' }}
            >
              {liked ? <FaHeart size={11} /> : <FaRegHeart size={11} />}
              <span className="font-mono text-xs">{likes}</span>
            </button>

            <div className="flex items-center gap-1 text-text-dim">
              <FaClock size={11} />
              <span className="font-mono text-xs">{post.readTime}</span>
            </div>
            <HiArrowUpRight size={14} className="text-text-dim group-hover:text-accent transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export function Blog() {
  const ref = useScrollReveal()
  const [featured, ...rest] = blogPosts

  return (
    <section id="blog" className="py-28 w-full">
      <div className="px-4 md:px-6 max-w-6xl mx-auto">
        <div ref={ref} className="section-reveal">
          <div className="flex items-end justify-between mb-12">
            <div>
              <SectionLabel number={5} label="Brain Dump" />
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
                Editorial <span className="text-gradient">Musings.</span>
              </h2>
              <p className="text-text-dim font-body text-sm mt-3 max-w-md">
                Thoughts on React, mobile dev, building in public, and the grind of becoming a founder.
              </p>
            </div>
          </div>

          {/* Featured post */}
          {featured && <FeaturedCard post={featured} />}

          {/* Rest of posts */}
          <div className="space-y-6">
            {rest.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Coming soon banner */}
          <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2 relative">
              Blog Launching Soon
            </p>
            <p className="text-text-dim font-body text-sm relative">
              Weekly posts on React Native, FastAPI, startup building, and everything I learn the hard way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}