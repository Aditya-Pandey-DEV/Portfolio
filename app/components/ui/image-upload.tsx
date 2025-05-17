'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from './button';
import { FaUpload, FaImage, FaTrash } from 'react-icons/fa';

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  label?: string;
}

export function ImageUpload({ onChange, value, label }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (!file) return;
    
    // Reset states
    setError(null);
    setIsUploading(true);
    
    // Check file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      setIsUploading(false);
      return;
    }
    
    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      setIsUploading(false);
      return;
    }
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to upload image');
      }
      
      const data = await response.json();
      
      // Call the onChange function with the file path
      onChange(data.filePath);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload image');
      console.error('Upload error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = () => {
    onChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      
      <div className="mt-1 space-y-4">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        
        {!value ? (
          <Button
            type="button"
            variant="outline"
            onClick={handleClick}
            disabled={isUploading}
            className="w-full py-8 flex flex-col items-center justify-center border-dashed"
          >
            {isUploading ? (
              <div className="animate-pulse flex flex-col items-center">
                <FaUpload className="h-8 w-8 mb-2 text-gray-400" />
                <span>Uploading...</span>
              </div>
            ) : (
              <>
                <FaImage className="h-8 w-8 mb-2 text-gray-400" />
                <span>Click to upload an image</span>
                <span className="text-xs text-gray-500 mt-1">
                  (Max size: 5MB)
                </span>
              </>
            )}
          </Button>
        ) : (
          <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="relative aspect-video w-full">
              <Image
                src={value}
                alt="Uploaded image"
                fill
                className="object-cover"
              />
            </div>
            <Button
              type="button"
              variant="danger"
              size="sm"
              onClick={handleRemove}
              className="absolute top-2 right-2"
            >
              <FaTrash className="h-4 w-4" />
            </Button>
          </div>
        )}
        
        {error && (
          <p className="text-sm text-red-600 dark:text-red-400 mt-1">
            {error}
          </p>
        )}
      </div>
    </div>
  );
} 