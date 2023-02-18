import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('https://ymyoeibdnreqxpyakdha.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlteW9laWJkbnJlcXhweWFrZGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY2NzIzNTksImV4cCI6MTk5MjI0ODM1OX0.ilHu-gCwuY1-F-5RvpNGSx2NPMbpzTBAVOjqUl2mrYo');