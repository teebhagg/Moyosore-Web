"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/use-toast";
import React from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(1, {
    message: "Please enter your full name.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  subject: z.string().min(1, {
    message: "Please enter a subject.",
  }),
  message: z.string().min(1, {
    message: "Please enter a message.",
  }),
});

export function ContactForm() {
    // Load state
    const [loading, setLoading] = React.useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    let res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
        setLoading(false);
        toast({
            title: "Error",
            variant: "destructive",
            description: "Something went wrong",
            duration: 5000,
        })
      throw new Error("Something went wrong");
    }
    let data = await res.json();
    console.log(data);
    setLoading(false);
    toast({
        title: "Success",
        description: "Message sent successfully",
        duration: 5000,
    })

    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-6 pb-6 grid grid-cols-2 gap-5">
        <div className="grid col-span-2 md:col-span-1">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid col-span-2 md:col-span-1">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="sender@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid col-span-2">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Email subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid col-span-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="col-span-2">
          {loading ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : "Send"}
        </Button>
      </form>
    </Form>
  );
}
