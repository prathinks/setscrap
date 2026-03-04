import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://irklkgrkfspandtokchg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlya2xrZ3JrZnNwYW5kdG9rY2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NDE1NzYsImV4cCI6MjA4NzQxNzU3Nn0.O_dz5QcrMDdeq9_wh_TR5SbNYhWuGtAqQBA012kvY18'
export const supabase = createClient(supabaseUrl, supabaseKey)

console.log("Supabase Connected")