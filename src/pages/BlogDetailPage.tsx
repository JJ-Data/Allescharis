import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/services/blogs";
import Loader from "@/components/Loader";
import ImageSlider from "@/components/ImageSlider";
import { motion } from "framer-motion";

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

function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: blog,
    isLoading,
    isError,
    error,
  } = useQuery<Blog>({
    queryKey: ["getBlogById", id],
    queryFn: async () => {
      const res = await getBlogById(id!);
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center p-8 text-red-600">
        {(error as Error).message || "Failed to load blog"}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-10 px-4 md:px-8 lg:px-20"
    >
      <button
        onClick={() => navigate("/blog")}
        className="mb-6 text-blue-700 hover:underline"
      >
        ← Back to Blogs
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">{blog?.title}</h1>

        <div className="mb-6">
          <ImageSlider images={blog?.imageSrc || []} />
        </div>

        <div className="prose prose-lg text-gray-800 max-w-none mb-8">
          {blog?.content.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <img
            src={blog?.authorId.imageSrc}
            alt={blog?.authorId.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-600">
              {blog?.authorId.name}
            </p>
            <p className="text-xs text-gray-500">
              {blog?.createdAt && new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogDetailPage;
