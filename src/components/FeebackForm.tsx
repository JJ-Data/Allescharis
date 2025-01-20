import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FeedbackFormValues {
  name: string;
  email: string;
  rating: number;
  comments: string;
}

const FeedbackForm = () => {
  const validationSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    rating: z
      .number()
      .min(1, "Rating must be at least 1")
      .max(5, "Rating must be at most 5"),
    comments: z.string().min(10, "Comments must be at least 10 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: FeedbackFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <div className="mb-6">
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register("name")}
          className="w-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none px-4 py-2 rounded-md"
        />
        {errors.name && (
          <div className="text-red-500 text-sm mt-1">{errors.name.message}</div>
        )}
      </div>

      <div className="mb-6">
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email")}
          className="w-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none px-4 py-2 rounded-md"
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </div>
        )}
      </div>

      <div className="mb-6">
        <input
          type="number"
          id="rating"
          placeholder="Rating (1-5)"
          {...register("rating")}
          className="w-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none px-4 py-2 rounded-md"
        />
        {errors.rating && (
          <div className="text-red-500 text-sm mt-1">
            {errors.rating.message}
          </div>
        )}
      </div>

      <div className="mb-6">
        <textarea
          id="comments"
          {...register("comments")}
          placeholder="Comments"
          className="w-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none px-4 py-2 rounded-md resize-none h-32"
        ></textarea>
        {errors.comments && (
          <div className="text-red-500 text-sm mt-1">
            {errors.comments.message}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
