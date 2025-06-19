import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  itsNumber: z.string().min(1, "ITS Number is required"),
  hofItsNumber: z.string().min(1, "HOF ITS Number is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  whatsappNumber: z.string().min(10, "Please enter a valid mobile number"),
  jamaat: z.string().min(1, "Jamaat is required"),
  category: z.enum(["Accommodation", "Zone", "Others"], {
    required_error: "Please select a category",
  }),
  subject: z.string().min(1, "Subject is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function QueryForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itsNumber: "",
      hofItsNumber: "",
      name: "",
      email: "",
      whatsappNumber: "",
      jamaat: "",
      category: undefined,
      subject: "",
      description: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      // Google Apps Script Web App URL
      const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzLd2mjlb0y8KmcoewNFcCSkZe8XdaEY2u-smICPl9BX55U22YQ_c1B_XjcJPK06D6r/exec";
      
      // Create form data
      const formData = new FormData();
      formData.append('itsNumber', data.itsNumber);
      formData.append('hofItsNumber', data.hofItsNumber);
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('whatsappNumber', data.whatsappNumber);
      formData.append('jamaat', data.jamaat);
      formData.append('category', data.category);
      formData.append('subject', data.subject);
      formData.append('description', data.description);

      try {
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: "POST",
          body: formData,
        });

        const result = await response.text();
        
        if (result.includes('SUCCESS') || result.includes('success')) {
          return { success: true, result };
        } else {
          throw new Error('Google Sheets submission failed');
        }
      } catch (error) {
        console.error("Form submission error:", error);
        throw error;
      }
    },
    onSuccess: () => {
      toast({
        title: "Query Submitted Successfully!",
        description: "Your query has been saved to the database. You will receive a response shortly.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit query. Please try again or contact support.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await submitMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="submit-query" className="bg-white rounded-lg material-shadow-2 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit Your Query</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Please fill out the form below with your query details. All submissions will be processed and you will receive a response shortly.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            <span className="material-icons text-sm mr-2">info</span>
            Form connected to Google Sheets for automatic data collection
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="itsNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ITS Number *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your ITS Number"
                        className="form-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hofItsNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>HOF ITS Number (Head Of Family) *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter HOF ITS Number"
                        className="form-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        className="form-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="form-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="whatsappNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp Number *</FormLabel>
                    <FormControl>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-sm">
                          +91
                        </span>
                        <Input
                          type="tel"
                          placeholder="Enter your mobile number"
                          className="rounded-l-none form-input"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="jamaat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Jamaat *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Jamaat name"
                        className="form-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Accommodation">Accommodation</SelectItem>
                      <SelectItem value="Zone">Zone</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Brief subject of your query"
                      className="form-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description *</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Please provide detailed description of your query or issue..."
                      className="form-input resize-vertical"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors material-shadow-1 hover:material-shadow-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="material-icons mr-2 animate-spin">refresh</span>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <span className="material-icons mr-2">send</span>
                    Submit Query
                  </span>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
