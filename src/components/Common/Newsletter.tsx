"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/lib/schemas";

const Newsletter = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setSubmitting(true);
    setError(null);
    setSuccess(false);
    try {
      const formData = new FormData();
      formData.append("formType", "newsletter");
      formData.append("email", data.email);
      const res = await fetch("/api/submit.php", { method: "POST", body: formData });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to subscribe");
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="overflow-hidden border-t border-gray-3/80 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[640px] px-4 text-center sm:px-6">
        <span className="mb-2 inline-block h-0.5 w-12 bg-[var(--color-primary)]" />
        <h2 className="font-zodiak text-2xl font-semibold text-dark sm:text-3xl">
          Stay in the loop
        </h2>
        <p className="mt-3 text-dark-4">
          Get the latest offers and new arrivals. No spam.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              {...register("email")}
              placeholder="Your email"
              className={`w-full rounded-full border bg-gray-1 px-5 py-3.5 text-dark placeholder:text-dark-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                errors.email ? "border-red" : "border-gray-3"
              }`}
            />
            <button
              type="submit"
              disabled={submitting}
              className="shrink-0 rounded-full bg-[var(--color-dark)] px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "…" : success ? "Subscribed" : "Subscribe"}
            </button>
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red">{errors.email.message}</p>
          )}
          {error && <p className="mt-2 text-sm text-red">{error}</p>}
          {success && (
            <p className="mt-2 text-sm text-green">Thanks for subscribing.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
