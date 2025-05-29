import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const validationSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append("access_key", "1799ad1f-c8b9-44bb-8a05-c28b70cacf1c");
    formData.append("subject", data.subject);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phoneNumber);
    formData.append("message", data.message);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-[#c9c9ff]/70 shadow-md rounded-lg"
    >
      <input
        type="hidden"
        name="access_key"
        value="YOUR_WEB3FORMS_ACCESS_KEY"
      />
      <div className="mb-6">
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="w-full border-2 border-blue-300 px-4 py-2 rounded-md text-black"
        />
        {errors.name && (
          <div className="text-red-500 text-sm mt-1">{errors.name.message}</div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="mb-6 w-full">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full border-2 border-blue-300 px-4 py-2 rounded-md text-black"
          />
          {errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </div>
          )}
        </div>

        <div className="mb-6 w-full">
          <input
            type="tel"
            placeholder="Phone Number"
            {...register("phoneNumber")}
            className="w-full border-2 border-blue-300 px-4 py-2 rounded-md text-black"
          />
          {errors.phoneNumber && (
            <div className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Subject"
          {...register("subject")}
          className="w-full border-2 border-blue-300 px-4 py-2 rounded-md text-black"
        />
        {errors.subject && (
          <div className="text-red-500 text-sm mt-1">
            {errors.subject.message}
          </div>
        )}
      </div>

      <div className="mb-6">
        <textarea
          placeholder="Message"
          {...register("message")}
          className="w-full border-2 border-blue-300 px-4 py-2 rounded-md resize-none h-32 text-black"
        ></textarea>
        {errors.message && (
          <div className="text-red-500 text-sm mt-1">
            {errors.message.message}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>

      {isSubmitSuccessful && (
        <p className="text-green-600 text-sm mt-4 text-center">
          Message sent successfully!
        </p>
      )}
    </form>
  );
};

export default ContactForm;
