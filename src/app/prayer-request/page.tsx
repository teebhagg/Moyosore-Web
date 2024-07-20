"use client";

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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { getPrayerRequest } from "@/utils/data/prayer_request";
import { PrayerRequestInterface } from "@/utils/interface/prayer_request";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React, { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import Image from "next/image";
import { urlFor } from "../../../sanity/client";
import { Skeleton } from "@/components/ui/skeleton";

const formSchema = zod.object({
  fullName: zod.string().min(1, {
    message: "Please enter your full name.",
  }),
  email: zod.string().min(1, { message: "Please enter your email." }).email({
    message: "Please enter a valid email.",
  }),
  subject: zod.string().min(1, {
    message: "Please enter a subject.",
  }),
  message: zod.string().min(1, {
    message: "Please enter a message.",
  }),
});

export default function PrayerPoints() {
  const [loading, setLoading] = useState(false);
  const [prayerRequest, setPrayerRequest] =
    useState<PrayerRequestInterface | null>(null);
  const defaultValues = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleSubmit = async (values: zod.infer<typeof formSchema>) => {
    console.log(values);
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
      });
      // throw new Error("Something went wrong");
    }
    let data = await res.json();
    console.log(data);
    setLoading(false);
    toast({
      title: "Success",
      description: "Prayer request sent successfully",
      duration: 5000,
    });

    console.log(values);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { prayerRequest } = await getPrayerRequest();
      setPrayerRequest(prayerRequest);
    };
    fetchData();
  }, []);

  const loader = (<Skeleton className="aspect-[16/9] w-full max-w-7xl max-h-[400px] px-10 rounded-[8px]" />);

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-10 py-10 w-full flex flex-col items-center ">
          {prayerRequest && (
            <p className="text-3xl font-medium">{prayerRequest.title}</p>
            )}
          {prayerRequest && (
            <Suspense fallback={loader}>
              <Image
                src={urlFor(prayerRequest.coverImage).url()}
                alt="Moyosore"
                width={400}
                height={400}
                className="aspect-[16/9] w-full max-w-7xl max-h-[400px] px-10 rounded-[8px] object-cover"
                />
              </Suspense>
          )}
          {!prayerRequest && (loader)}
          {prayerRequest && (
            <p className="text font-medium">{prayerRequest.description}</p>
          )}
          <div className="space-y-5 w-full max-w-[500px] px-10">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your full name"
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Your subject" {...field} />
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
                    <Textarea placeholder="Your message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-center">
              <Button type="submit">
                {loading ? (
                  <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                ) : (
                  "Send Prayer Request"
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
