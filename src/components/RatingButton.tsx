"use client";

import styles from "./RatingButton.module.css";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type RatingButtonProps = {
  movieId: number;
  initialRating: number | null;
};

export default function RatingButton({
  movieId,
  initialRating,
}: RatingButtonProps) {
  const supabase = createClient();

  const [rating, setRating] = useState<number | null>(initialRating);
  const [isLoading, setIsLoading] = useState(false);

  async function handleRating(newRating: number) {
    setIsLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setIsLoading(false);
      return;
    }

    const { error } = await supabase.from("ratings").upsert(
      {
        user_id: user.id,
        movie_id: movieId,
        rating: newRating,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "user_id,movie_id",
      }
    );

    if (error) {
      console.error("Failed to save rating:", error);
      setIsLoading(false);
      return;
    }

    setRating(newRating);
    setIsLoading(false);
  }

  return (
  <div className={styles.rating}>
    <p className={styles.label}>Your rating</p>

    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`${styles.star} ${
            rating !== null && star <= rating
              ? styles.selected
              : ""
          }`}
          onClick={() => handleRating(star)}
          disabled={isLoading}
          aria-label={`Rate ${star} out of 5`}
          aria-pressed={rating === star}
        >
          {rating !== null && star <= rating ? "★" : "☆"}
        </button>
      ))}
    </div>

    {rating !== null && (
      <p className={styles.ratingText}>
        You rated this {rating}/5
      </p>
    )}
  </div>
);
}