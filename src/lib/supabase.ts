import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. Form submissions will not be saved.');
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface LeadSubmission {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  location?: string;
  source_page?: string;
  ip_address?: string;
  user_agent?: string;
  site_domain?: string;
}

export async function submitLead(data: LeadSubmission): Promise<{ success: boolean; error?: string }> {
  if (!supabase) {
    console.error('Supabase not configured');
    return { success: false, error: 'Database not configured' };
  }

  try {
    const { error } = await supabase
      .from('leads')
      .insert([data]);

    if (error) {
      console.error('Supabase insert error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Lead submission error:', err);
    return { success: false, error: 'Failed to submit lead' };
  }
}

