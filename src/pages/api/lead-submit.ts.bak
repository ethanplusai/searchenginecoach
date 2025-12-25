import type { APIRoute } from 'astro';
import { submitLead } from '../../lib/supabase';

// This route should not be prerendered - it needs to run on the server
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse form data
    const formData = await request.formData();
    
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim() || undefined;
    const website = formData.get('website')?.toString().trim() || undefined;
    const location = formData.get('location')?.toString().trim() || undefined;
    const sourcePage = formData.get('source_page')?.toString() || undefined;

    // Validation
    if (!name || !email) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name and email are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get client info
    const ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
      || request.headers.get('x-real-ip') 
      || 'unknown';
    const userAgent = request.headers.get('user-agent') || undefined;
    
    // Get site domain from environment variable
    const siteDomain = import.meta.env.SITE_DOMAIN || 'searchenginecoach.com';

    // Submit to Supabase
    const result = await submitLead({
      name,
      email,
      phone,
      website,
      location,
      source_page: sourcePage,
      ip_address: ipAddress,
      user_agent: userAgent,
      site_domain: siteDomain,
    });

    if (!result.success) {
      return new Response(
        JSON.stringify({ success: false, error: result.error }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Return success with redirect URL
    return new Response(
      JSON.stringify({ success: true, redirect: '/thank-you/' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('API error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
