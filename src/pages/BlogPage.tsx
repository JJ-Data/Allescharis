import Loader from "@/components/Loader";
import { useAuth } from "@/context/AuthContext";
import { getAllBlogs } from "@/services/blogs";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";


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

export interface ApiResponse {
  data: {
    blogs: Blog[];
    hasMore: boolean;
    limit: number;
    page: number;
    total: number;
    message: string;
    success: boolean;
  };
}

function BlogPage() {
  const { ref, inView } = useInView();
  const { user } = useAuth();
  const isAdmin = user?.role === "ADMIN";

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<ApiResponse>({
    queryKey: ["getAllBlogs"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await getAllBlogs(pageParam as number);
      console.log("API Response:", response);
      return response;
    },
    getNextPageParam: (lastPage) => {
      return lastPage.data.hasMore ? lastPage.data.page + 1 : undefined;
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const allBlogs = data?.pages.flatMap((page) => page.data.blogs) || [];

  console.log("All blogs:", allBlogs);
  console.log("Data:", data);
  console.log("Has next page:", hasNextPage);
  console.log("Is loading:", isLoading);

  if (isLoading && !data) {
    return (
      <div className="min-h-64 flex flex-col justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="p-4">Error: {error.message}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-auto container p-5 sm:p-8 md:p-12 lg:p-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
            Blog
          </h1>
          {isAdmin && (
            <Link
              to="/admin/blogs/create"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Blog
            </Link>
          )}
        </div>

        {allBlogs.length === 0 ? (
          <div className="text-center py-8">No blogs to show yet!</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blogs/${blog.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  <LazyLoadImage
                    effect="blur"
                    src={
                      blog.imageSrc[0] || "https://via.placeholder.com/300x200"
                    }
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-blue-900 mb-2">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3">
                      {blog.content.split("\n")[0]}
                    </p>
                    <div className="mt-4 flex items-center">
                      <LazyLoadImage
                        effect="blur"
                        src={blog.authorId.imageSrc}
                        alt={blog.authorId.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-sm text-gray-500">
                        {blog.authorId.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div ref={ref} className="flex justify-center p-8">
              {isFetchingNextPage ? (
                <Loader />
              ) : hasNextPage ? (
                <button
                  onClick={() => fetchNextPage()}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  disabled={isFetchingNextPage}
                >
                  Load More
                </button>
              ) : (
                <p className="text-gray-500">You've reached the end</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
