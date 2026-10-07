"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type FavouriteButtonProps = {
  movieId: number;
  title: string;
  posterPath: string | null;
  initialIsFavourite: boolean;
};

export default function FavouriteButton({
  movieId,
  title,
  posterPath,
  initialIsFavourite,
}: FavouriteButtonProps) {
  const supabase = createClient();

  const [isFavourite, setIsFavourite] = useState(initialIsFavourite);
  const [isLoading, setIsLoading] = useState(false);

  async function handleFavourite() {
    setIsLoading(true);
  
    const {
      data: { user },
    } = await supabase.auth.getUser();
  
    if (!user) {
      setIsLoading(false);
      return;
    }
  
    if (isFavourite) {
      const { error } = await supabase
        .from("favourites")
        .delete()
        .eq("user_id", user.id)
        .eq("movie_id", movieId);
  
      if (error) {
        console.error("Failed to remove favourite:", error);
        setIsLoading(false);
        return;
      }
  
      setIsFavourite(false);
    } else {
      const { error } = await supabase.from("favourites").insert({
        user_id: user.id,
        movie_id: movieId,
        title,
        poster_path: posterPath,
      });
  
      if (error) {
        console.error("Failed to add favourite:", error);
        setIsLoading(false);
        return;
      }
  
      setIsFavourite(true);
    }
  
    setIsLoading(false);
  }

  return (
    <button
      type="button"
      onClick={handleFavourite}
      disabled={isLoading}
      aria-pressed={isFavourite}
    >
      {isFavourite ? "♥ Remove from favourites" : "♡ Add to favourites"}
    </button>
  );
}