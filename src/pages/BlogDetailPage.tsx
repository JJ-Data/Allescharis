import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/services/blogs";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Loader from "@/components/Loader";
import { format } from "date-fns";

function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery({
    queryKey: ["getBlogById", id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <p className="p-4 text-red-500">Failed to load blog.</p>;

  const blog = data?.data;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <button
        onClick={() => navigate("/blog")}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back to all blogs
      </button>

      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">{blog.title}</h1>

        <p className="text-sm text-gray-500 mb-6">
          By <strong>{blog.authorId?.name}</strong> on{" "}
          {format(new Date(blog.createdAt), "do MMMM yyyy")}
        </p>

        {blog.imageSrc?.length > 0 && (
          <div className="grid gap-4 mb-8">
            {blog.imageSrc.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`blog image ${index}`}
                className="w-full rounded-lg object-cover"
              />
            ))}
          </div>
        )}

        <div className="prose max-w-none text-gray-800">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailPage;
