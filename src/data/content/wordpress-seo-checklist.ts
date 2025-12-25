export const content = `
<p>WordPress powers over 40% of the web, but having a WordPress site doesn't automatically mean good SEO. Proper optimization requires attention to settings, plugins, content, and technical factors. This comprehensive checklist walks you through everything needed to optimize your WordPress site for search engines.</p>

<h2>Initial Setup Checklist</h2>

<h3>Site Settings</h3>

<ul>
<li>☐ Set site title and tagline in Settings → General</li>
<li>☐ Ensure "Search engine visibility" is NOT checked in Settings → Reading</li>
<li>☐ Set permalink structure to Post name (Settings → Permalinks)</li>
<li>☐ Configure timezone correctly</li>
<li>☐ Set homepage display preference (static page vs. latest posts)</li>
</ul>

<h3>SSL and Security</h3>

<ul>
<li>☐ SSL certificate installed (HTTPS enabled)</li>
<li>☐ Site URL updated to https:// in Settings → General</li>
<li>☐ HTTP to HTTPS redirects working</li>
<li>☐ Security plugin installed (Wordfence, Sucuri, or similar)</li>
</ul>

<h2>SEO Plugin Setup</h2>

<p>An SEO plugin is essential for WordPress optimization. Yoast SEO and Rank Math are the most popular options.</p>

<h3>Core SEO Plugin Configuration</h3>

<ul>
<li>☐ Install and activate chosen SEO plugin</li>
<li>☐ Complete the setup wizard</li>
<li>☐ Connect to Google Search Console through plugin</li>
<li>☐ Set default title and meta description templates</li>
<li>☐ Configure social media profiles</li>
<li>☐ Enable XML sitemap functionality</li>
<li>☐ Configure breadcrumb settings</li>
</ul>

<h3>Content Type Settings</h3>

<ul>
<li>☐ Decide which content types should be indexed (posts, pages, custom types)</li>
<li>☐ Set archive pages to noindex if not needed</li>
<li>☐ Configure author archive settings</li>
<li>☐ Set up taxonomy (category/tag) indexing preferences</li>
</ul>

<h2>Google Search Console Setup</h2>

<p>Google Search Console for SEO is essential—it's free and provides invaluable data.</p>

<ul>
<li>☐ Create Search Console account if needed</li>
<li>☐ Verify site ownership (multiple methods available)</li>
<li>☐ Submit XML sitemap</li>
<li>☐ Set preferred domain (www or non-www)</li>
<li>☐ Check for crawl errors and fix any found</li>
<li>☐ Set up email alerts for critical issues</li>
<li>☐ Review Index Coverage report</li>
</ul>

<h2>Technical SEO Checklist</h2>

<h3>Site Speed Optimization</h3>

<ul>
<li>☐ Install caching plugin (WP Rocket, W3 Total Cache, or LiteSpeed Cache)</li>
<li>☐ Configure browser caching</li>
<li>☐> Enable GZIP compression</li>
<li>☐ Optimize images (install Smush, ShortPixel, or similar)</li>
<li>☐ Enable lazy loading for images</li>
<li>☐ Minify CSS and JavaScript</li>
<li>☐ Use a CDN for static assets</li>
<li>☐ Test site speed with Google PageSpeed Insights</li>
<li>☐ Core Web Vitals passing on key pages</li>
</ul>

<h3>Mobile Optimization</h3>

<ul>
<li>☐ Use responsive theme</li>
<li>☐ Test mobile rendering in Google Mobile-Friendly Test</li>
<li>☐ Verify tap targets are appropriately sized</li>
<li>☐ Check mobile page speed separately</li>
<li>☐> Ensure mobile menu is functional</li>
</ul>

<h3>XML Sitemap</h3>

<ul>
<li>☐ Sitemap is generated (usually by SEO plugin)</li>
<li>☐ Sitemap submitted to Search Console</li>
<li>☐ Sitemap submitted to Bing Webmaster Tools</li>
<li>☐ Sitemap includes only indexable pages</li>
<li>☐ Sitemap updates automatically when content changes</li>
</ul>

<h3>Robots.txt</h3>

<ul>
<li>☐ Robots.txt file exists (yoursite.com/robots.txt)</li>
<li>☐ Not blocking important resources</li>
<li>☐ Sitemap location specified</li>
<li>☐ wp-admin and wp-includes directories appropriately handled</li>
</ul>

<h3>Structured Data</h3>

<ul>
<li>☐ Organization schema implemented</li>
<li>☐ Article schema on blog posts</li>
<li>☐ LocalBusiness schema if applicable</li>
<li>☐ FAQ schema where appropriate</li>
<li>☐ Breadcrumb schema enabled</li>
<li>☐ Test with Google Rich Results Test</li>
</ul>

<h2>On-Page SEO Checklist</h2>

<h3>Homepage</h3>

<ul>
<li>☐ Custom title tag with primary keyword</li>
<li>☐ Compelling meta description</li>
<li>☐ H1 heading present and optimized</li>
<li>☐ Clear value proposition above the fold</li>
<li>☐ Internal links to important pages</li>
</ul>

<h3>All Pages</h3>

<ul>
<li>☐ Unique title tag (55-60 characters)</li>
<li>☐ Unique meta description (150-155 characters)</li>
<li>☐ Single H1 tag per page</li>
<li>☐ Logical header hierarchy (H1 → H2 → H3)</li>
<li>☐ Target keyword in URL slug</li>
<li>☐ Images have descriptive alt text</li>
<li>☐ Internal links to related content</li>
<li>☐> External links to authoritative sources where appropriate</li>
</ul>

<h3>Blog Posts</h3>

<ul>
<li>☐ Keyword research completed before writing</li>
<li>☐ Target keyword in title, URL, H1</li>
<li>☐ Keyword appears naturally in first paragraph</li>
<li>☐ Related keywords used throughout</li>
<li>☐ Comprehensive coverage of topic</li>
<li>☐ Featured image with optimized alt text</li>
<li>☐ Category assigned</li>
<li>☐> Author bio with schema</li>
</ul>

<h2>Content Organization</h2>

<h3>Categories and Tags</h3>

<ul>
<li>☐ Logical category structure (not too many)</li>
<li>☐ Categories have descriptions</li>
<li>☐> Tags used sparingly and purposefully</li>
<li>☐ No orphan tags (tags with single posts)</li>
<li>☐ Decide indexation settings for archives</li>
</ul>

<h3>Internal Linking</h3>

<ul>
<li>☐ Important pages accessible within 3 clicks from homepage</li>
<li>☐ Related posts linked within content</li>
<li>☐ Cornerstone content linked frequently</li>
<li>☐> No broken internal links</li>
<li>☐ Anchor text is descriptive (not "click here")</li>
</ul>

<h2>User Experience Factors</h2>

<ul>
<li>☐ Clear navigation structure</li>
<li>☐ Search functionality works</li>
<li>☐ 404 page is helpful (not generic)</li>
<li>☐ Contact information easily accessible</li>
<li>☐> No intrusive popups on mobile</li>
<li>☐ Readable typography and adequate contrast</li>
</ul>

<h2>Website SEO Tools</h2>

<p>Install these essential tools for ongoing optimization:</p>

<h3>Required</h3>
<ul>
<li>☐ Google Analytics (or privacy-friendly alternative)</li>
<li>☐ Google Search Console</li>
<li>☐ SEO plugin (Yoast or Rank Math)</li>
</ul>

<h3>Recommended</h3>
<ul>
<li>☐ Caching plugin</li>
<li>☐ Image optimization plugin</li>
<li>☐ Broken link checker</li>
<li>☐ Security plugin</li>
<li>☐ Backup solution</li>
</ul>

<h2>Ongoing Maintenance</h2>

<h3>Weekly</h3>
<ul>
<li>☐ Check Search Console for errors</li>
<li>☐ Review site functionality</li>
<li>☐ Respond to comments (if enabled)</li>
</ul>

<h3>Monthly</h3>
<ul>
<li>☐ Review analytics for trends</li>
<li>☐ Update WordPress core</li>
<li>☐> Update plugins and themes</li>
<li>☐> Check for broken links</li>
<li>☐ Review top-performing content for update opportunities</li>
</ul>

<h3>Quarterly</h3>
<ul>
<li>☐> Full site speed audit</li>
<li>☐ Content audit for outdated posts</li>
<li>☐> Security scan</li>
<li>☐> Database optimization</li>
<li>☐> Review and clean unused plugins/themes</li>
</ul>

<h2>Using This Checklist</h2>

<p>Don't try to complete everything at once. Prioritize:</p>

<ol>
<li><strong>Foundation:</strong> SSL, permalinks, SEO plugin, Search Console</li>
<li><strong>Technical:</strong> Speed optimization, mobile-friendliness, sitemap</li>
<li><strong>Content:</strong> On-page optimization for existing important pages</li>
<li><strong>Ongoing:</strong> New content, monitoring, regular maintenance</li>
</ol>

<p>WordPress provides an excellent SEO foundation when properly configured. This checklist ensures you're covering all essential elements while building sustainable search visibility over time.</p>
`;

