import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "@/services/blogs";
import { useAuth } from "@/context/AuthContext";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";


function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  // ✅ Correct Cloudinary setup using cloud name (not full URL)
  const cloudName = import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloudUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const uploadPreset = import.meta.env.VITE_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setIsUploading(true);
      const uploadedUrls: string[] = [];

      try {
        for (const file of acceptedFiles) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", uploadPreset);

          const response = await fetch(cloudUrl, {
            method: "POST",
            body: formData,
          });

          if (!response.ok) {
            throw new Error("Upload failed");
          }

          const data = await response.json();
          uploadedUrls.push(data.secure_url);
        }

        setImages((prev) => [...prev, ...uploadedUrls]);
      } catch (error) {
        toast.error("Error uploading image. Please try again.");
      } finally {
        setIsUploading(false);
      }
    },
    [cloudUrl, uploadPreset]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    multiple: true,
    maxFiles: 5,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || user.role !== "ADMIN") {
      setError("Only admins can create blog posts");
      return;
    }

    if (!title || !content || images.length === 0) {
      setError("Please fill all fields and add at least one image");
      return;
    }

    try {
      setIsLoading(true);
      console.log("user details in create blog: ", user);
      await createBlog({ title, content, images });
      navigate("/blog");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create blog");
    } finally {
      setIsLoading(false);
    }
  };

  const removeImage = (url: string) => {
    setImages(images.filter((img) => img !== url));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">
          Create New Blog Post
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Images
            </label>

            <div
              {...getRootProps()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors mb-4"
            >
              <input {...getInputProps()} />
              {isUploading ? (
                <p className="text-gray-500">Uploading images...</p>
              ) : isDragActive ? (
                <p className="text-blue-500">Drop the images here</p>
              ) : (
                <div>
                  <p className="text-gray-600">
                    Drag & drop images here, or click to select files
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    (Max 5 images, JPEG/PNG/WEBP)
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((url) => (
                <div key={url} className="relative group">
                  <LazyLoadImage
                    effect="blur"
                    src={url}
                    alt="Uploaded preview"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(url)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || isUploading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoading ? "Creating..." : "Create Blog Post"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlogPage;
