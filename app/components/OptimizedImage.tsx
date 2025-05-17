'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/app/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="0%" />
      <stop stop-color="#edeef1" offset="20%" />
      <stop stop-color="#f6f7f8" offset="40%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function OptimizedImage({
  src,
  alt,
  width = 1200,
  height = 630,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  objectFit = 'cover',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);
  
  // Convert images to WebP format if they're from Cloudinary
  useEffect(() => {
    if (src.includes('cloudinary.com') && !src.includes('f_auto')) {
      // Add format auto and quality auto for Cloudinary optimization
      const newSrc = src.replace('upload/', 'upload/f_auto,q_auto/');
      setImgSrc(newSrc);
    }
  }, [src]);

  return (
    <div className={cn('relative overflow-hidden', className)} style={{ aspectRatio: `${width}/${height}` }}>
      <Image
        src={imgSrc}
        alt={alt}
        fill={true}
        style={{ objectFit }}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
        priority={priority}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onError={() => {
          // Fallback to original src if optimization fails
          setImgSrc(src);
        }}
      />
    </div>
  );
} 