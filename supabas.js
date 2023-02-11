import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://peutsnrbxjjhcsaqrpyg.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBldXRzbnJieGpqaGNzYXFycHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI3NDMzNTQsImV4cCI6MTk4ODMxOTM1NH0.DYtAw7gmz6bt_RWOLaId9KKYPfNVHl73evJ01bTXsxo'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase