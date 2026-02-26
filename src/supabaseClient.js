import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sdeyulpaetyeceqlfdni.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkZXl1bHBhZXR5ZWNlcWxmZG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4MjY4MzYsImV4cCI6MjA4NzQwMjgzNn0.2VZi-LGbFCo0u7XiTMgHn54JTv1dttU5GavRn-5M-DU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);