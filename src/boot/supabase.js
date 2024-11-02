import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eezxycjexrjtfmpkarjc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlenh5Y2pleHJqdGZtcGthcmpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4ODcxNTgsImV4cCI6MjA0MzQ2MzE1OH0.6z-eQKkcodtF1tUqXXWWwYr-8lFSw2Hv7EVBvGWBYv8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function useSupabase() {
  return { supabase }
}