import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/services/blogs";
import { updateBlog } from "@/services/blogs";
import Loader from "@/components/Loader";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function EditBlogPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (data?.data) {
      setTitle(data.data.title);
      setContent(data.data.content);
      setImages(data.data.imageSrc || []);
    }
  }, [data]);

  const cloudName = import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloudUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const uploadPreset = import.meta.env.VITE_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setIsUploading(true);
      const uploaded: string[] = [];
      try {
        for (const file of acceptedFiles) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", uploadPreset);
          const res = await fetch(cloudUrl, { method: "POST", body: formData });
          if (!res.ok) throw new Error("Upload failed");
          const json = await res.json();
          uploaded.push(json.secure_url);
        }
        setImages((prev) => [...prev, ...uploaded]);
      } catch (e) {
        toast.error("Error uploading image");
      } finally {
        setIsUploading(false);
      }
    },
    [cloudUrl, uploadPreset]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".webp"] },
    multiple: true,
  });

  const removeImage = (url: string) => {
    setImages(images.filter((img) => img !== url));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setIsSaving(true);
    try {
      await updateBlog(id, { title, content, images });
      toast.success("Blog updated");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update blog");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Edit Blog Post</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Content</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={content}
              rows={10}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Images</label>
            <div
              {...getRootProps()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer mb-4"
            >
              <input {...getInputProps()} />
              {isUploading ? (
                <p>Uploading...</p>
              ) : isDragActive ? (
                <p>Drop images here</p>
              ) : (
                <p>Drag & drop images here, or click to select files</p>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((url) => (
                <div key={url} className="relative group">
                  <LazyLoadImage effect="blur" src={url} className="w-full h-32 object-cover rounded-lg" />
                  <button
                    type="button"
                    onClick={() => removeImage(url)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            disabled={isSaving || isUploading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}
