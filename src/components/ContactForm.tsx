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
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data: FormValues) => {
    // Create the email body with form data
    const emailBody = `
Name: ${data.name}
Email: ${data.email}
Phone Number: ${data.phoneNumber}
Subject: ${data.subject}
Message: ${data.message}
    `.trim();

    // Encode the subject and body for the mailto URL
    const encodedSubject = encodeURIComponent(data.subject);
    const encodedBody = encodeURIComponent(emailBody);

    // Create the mailto URL with prefilled information
    const mailtoUrl = `mailto:contact@allescharis.com?subject=${encodedSubject}&body=${encodedBody}`;

    // Open the default mail client
    window.location.href = mailtoUrl;

    console.log(data);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-2 blue-text-glow">
            Contact Us
          </h2>
          <p className="text-blue-700 text-center mb-8">
            We'd love to hear from you. Please fill out this form.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-blue-800 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                {...register("name")}
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 
                  focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white/50 blue-glass"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-blue-800 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 
                  focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white/50 blue-glass"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-blue-800 font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phoneNumber")}
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 
                  focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white/50 blue-glass"
                placeholder="Your phone number"
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-red-500">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-blue-800 font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                {...register("subject")}
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 
                  focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white/50 blue-glass"
                placeholder="Message subject"
              />
              {errors.subject && (
                <p className="mt-1 text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-blue-800 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                {...register("message")}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 
                  focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white/50 blue-glass"
                placeholder="Your message"
              />
              {errors.message && (
                <p className="mt-1 text-red-500">{errors.message.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg 
                  transition-all duration-300 transform hover:scale-[1.02] blue-glow hover:blue-glow"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
