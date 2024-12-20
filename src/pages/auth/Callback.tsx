import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rlpjwvpqwxjxvxqvxdxe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscGp3dnBxd3hqeHZ4cXZ4ZHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjI0NzAsImV4cCI6MjAyNTM5ODQ3MH0.Pu_zyKrBpE4_LvjUOHB7FT2KuPWwCPvqYo7IZHUgUJc"
);

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      navigate("/", { replace: true });
    });
  }, [navigate]);

  return <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
  </div>;
};

export default Callback;