import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function checkStorageAccess(): Promise<boolean> {
  try {
    // Try to list resources to verify access
    await cloudinary.api.resources({
      type: 'upload',
      max_results: 1
    });
    return true;
  } catch (error) {
    console.error('Storage access check failed:', error);
    return false;
  }
}

export async function uploadToStorage(
  file: string | Buffer,
  options: {
    folder?: string;
    resource_type?: 'image' | 'video' | 'raw';
    public_id?: string;
  } = {}
): Promise<{ url: string; public_id: string }> {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: options.folder || 'portfolio',
      resource_type: options.resource_type || 'auto',
      public_id: options.public_id,
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error('Upload failed:', error);
    throw new Error('Failed to upload file to storage');
  }
}

export async function deleteFromStorage(public_id: string): Promise<boolean> {
  try {
    await cloudinary.uploader.destroy(public_id);
    return true;
  } catch (error) {
    console.error('Delete failed:', error);
    return false;
  }
} 