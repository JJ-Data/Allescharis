import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/services/blogs";
import Loader from "@/components/Loader";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { format } from "date-fns";

interface Blog {
  id: string;
  title: string;
  content: string;
  imageSrc: string[];
  authorId: {
    id: string;
    name: string;
    imageSrc: string;
  };
  createdAt: string;
  updatedAt: string;
}

interface BlogApiResponse {
  data: Blog;
  success: boolean;
  message: string;
}

function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery<BlogApiResponse>({
    queryKey: ["getBlogById", id],
    queryFn: () => getBlogById(id as string),
    enabled: !!id,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-64 flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Error: {error.message}</p>
      </div>
    );
  }

  const blog = data?.data;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4 md:px-16">
      <button
        onClick={() => navigate("/blog")}
        className="text-blue-600 hover:underline mb-8"
      >
        ← Back to all blogs
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-10">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            {blog?.title}
          </h1>

          <div className="flex items-center mb-6 text-sm text-gray-600">
            <img
              src={blog?.authorId.imageSrc}
              alt={blog?.authorId.name}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              By <span className="font-medium">{blog?.authorId.name}</span> •{" "}
              {blog?.createdAt &&
                format(new Date(blog.createdAt), "do MMMM yyyy")}
            </div>
          </div>

          {blog?.imageSrc?.length ? (
            <div className="grid gap-4 mb-6">
              {blog.imageSrc.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Blog image ${index + 1}`}
                  className="w-full max-h-[500px] object-cover rounded-lg"
                />
              ))}
            </div>
          ) : (
            <div className="mb-6 text-gray-400 italic">No images available</div>
          )}

          <div className="prose max-w-none prose-lg text-gray-800">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blog?.content || ""}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailPage;
