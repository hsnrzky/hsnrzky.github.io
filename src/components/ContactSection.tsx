"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

// 1. Define the schema for the form
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // NOTE: We are using Formspree (or similar service) for submission.
  // The form submission is handled by the HTML 'action' attribute.
  // We still use handleSubmit for client-side validation before submission.
  function handleValidationSuccess(data: ContactFormValues) {
    console.log("Client-side validation successful:", data);
    // The form will submit via the action attribute after validation passes.
    toast.info("Submitting message...");
  }

  const contactEmail = "hasanrizzky20@gmail.com";
  
  // IMPORTANT: Replace this placeholder with your actual Formspree endpoint URL.
  // Example: "https://formspree.io/f/yourformhash"
  const formspreeEndpoint = "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT"; 

  return (
    <section id="contact" className="container py-16 md:py-24 space-y-12">
      <div className="text-center space-y-4 opacity-0 animate-fade-in-up">
        <Mail className="h-10 w-10 text-primary mx-auto" />
        <h2 className="text-4xl font-bold text-foreground">Get In Touch</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I am currently open to new opportunities and collaborations. Feel free to reach out!
        </p>
        
        <div className="flex justify-center items-center space-x-2 text-lg font-medium text-foreground pt-2">
          <Mail className="h-5 w-5 text-primary" />
          <a 
            href={`mailto:${contactEmail}`} 
            className="hover:text-primary transition-colors underline underline-offset-4"
          >
            {contactEmail}
          </a>
        </div>
      </div>

      <div className="max-w-lg mx-auto opacity-0 animate-fade-in-up [animation-delay:200ms]">
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(handleValidationSuccess)} 
            action={formspreeEndpoint} 
            method="POST" 
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    {/* Formspree requires 'name' attribute for fields */}
                    <Input placeholder="Your Name" {...field} name="name" />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    {/* Formspree requires 'name' attribute for fields */}
                    <Input placeholder="your.email@example.com" type="email" {...field} name="_replyto" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    {/* Formspree requires 'name' attribute for fields */}
                    <Textarea
                      placeholder="Let's discuss a project or opportunity..."
                      rows={5}
                      {...field}
                      name="message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full group">
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;