import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lzxjkuvzxrwqlgzwanhm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6eGprdXZ6eHJ3cWxnendhbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MDE4NzIsImV4cCI6MjA0ODE3Nzg3Mn0.qG39nYL12fdHYvgffZY6zZWmxd2U7WZ8f6qExtSVokg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;