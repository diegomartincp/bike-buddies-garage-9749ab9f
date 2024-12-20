import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabase = createClient(
  "https://rlpjwvpqwxjxvxqvxdxe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscGp3dnBxd3hqeHZ4cXZ4ZHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjI0NzAsImV4cCI6MjAyNTM5ODQ3MH0.Pu_zyKrBpE4_LvjUOHB7FT2KuPWwCPvqYo7IZHUgUJc"
);

export const AuthButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Authentication Error",
          description: error.message,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Authentication Error",
        description: "Failed to sign in with Google",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={signInWithGoogle}
      disabled={isLoading}
      className="w-full sm:w-auto"
    >
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-4 h-4 mr-2"
          />
          Sign in with Google
        </>
      )}
    </Button>
  );
};