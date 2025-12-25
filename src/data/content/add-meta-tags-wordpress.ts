export const content = `
<p>Meta tags help search engines understand your content and influence how your pages appear in search results. In WordPress, adding and optimizing meta tags is straightforward with the right approach. This guide covers everything you need to know about implementing effective meta tags.</p>

<h2>What Are Meta Tags?</h2>

<p>Meta tags are snippets of HTML code that provide information about your web pages to search engines and browsers. They don't appear on the page itself but live in the page's code.</p>

<p>The two most important meta tags for SEO:</p>

<p><strong>Title Tag:</strong> Defines the page title shown in search results and browser tabs. While technically not a meta tag (it's a separate HTML element), it functions similarly and is often discussed alongside meta tags.</p>

<p><strong>Meta Description:</strong> A brief summary of page content displayed below the title in search results. It doesn't directly affect rankings but significantly impacts click-through rates.</p>

<h2>Adding Meta Tags with SEO Plugins</h2>

<p>The easiest and most recommended way to add meta tags in WordPress is through an SEO plugin. These plugins add simple fields where you can enter your tags without touching code.</p>

<h3>Using Yoast SEO</h3>

<ol>
<li>Install and activate Yoast SEO from Plugins → Add New</li>
<li>Edit any page or post</li>
<li>Scroll down to the "Yoast SEO" meta box</li>
<li>Click "Edit snippet" to modify title and meta description</li>
<li>Enter your optimized title (keep under 60 characters)</li>
<li>Enter your meta description (keep under 155 characters)</li>
<li>The preview shows how it will appear in search results</li>
<li>Update or publish the page</li>
</ol>

<h3>Using Rank Math</h3>

<ol>
<li>Install and activate Rank Math</li>
<li>Edit any page or post</li>
<li>Find the Rank Math meta box in the editor</li>
<li>Click "Edit Snippet"</li>
<li>Enter your title and description</li>
<li>Preview the search appearance</li>
<li>Save your changes</li>
</ol>

<h3>Using All in One SEO</h3>

<ol>
<li>Install and activate AIOSEO</li>
<li>Edit your page or post</li>
<li>Scroll to the AIOSEO Settings section</li>
<li>Enter your title and meta description in the provided fields</li>
<li>Check the snippet preview</li>
<li>Publish or update</li>
</ol>

<h2>Writing Effective Title Tags</h2>

<h3>Best Practices</h3>

<ul>
<li><strong>Length:</strong> Keep under 60 characters to avoid truncation in search results</li>
<li><strong>Primary keyword:</strong> Include your target keyword, preferably near the beginning</li>
<li><strong>Brand name:</strong> Add your brand at the end when space permits (e.g., "Page Title | Brand Name")</li>
<li><strong>Unique:</strong> Every page should have a distinct title</li>
<li><strong>Compelling:</strong> Make it interesting enough to earn clicks</li>
</ul>

<h3>Title Tag Examples</h3>

<p><strong>Poor:</strong> "Home"</p>
<p><strong>Better:</strong> "Austin Plumbing Services | 24/7 Emergency Repairs | ABC Plumbing"</p>

<p><strong>Poor:</strong> "Blog Post"</p>
<p><strong>Better:</strong> "How to Fix a Leaky Faucet in 5 Easy Steps"</p>

<h2>Writing Effective Meta Descriptions</h2>

<h3>Best Practices</h3>

<ul>
<li><strong>Length:</strong> 150-155 characters maximum</li>
<li><strong>Include keywords:</strong> Google bolds matching search terms, catching user attention</li>
<li><strong>Action-oriented:</strong> Use active language that encourages clicks</li>
<li><strong>Accurate:</strong> Honestly describe page content—misleading descriptions hurt user experience</li>
<li><strong>Unique:</strong> Each page needs its own description</li>
</ul>

<h3>Meta Description Examples</h3>

<p><strong>Poor:</strong> "Welcome to our website. We offer many services. Contact us today."</p>

<p><strong>Better:</strong> "Need a plumber in Austin? We offer 24/7 emergency service with upfront pricing. Licensed, insured, and rated 4.9 stars. Call for same-day service."</p>

<h2>Setting Default Meta Tag Templates</h2>

<p>SEO plugins let you create templates for meta tags, automatically generating them when you don't write custom ones.</p>

<h3>In Yoast SEO</h3>

<ol>
<li>Go to SEO → Search Appearance</li>
<li>Select content type (Posts, Pages, etc.)</li>
<li>Edit the "SEO title" and "Meta description" templates</li>
<li>Use variables like %%title%%, %%sitename%%, %%excerpt%%</li>
</ol>

<h3>Common Template Variables</h3>

<ul>
<li><strong>%%title%%:</strong> The page/post title</li>
<li><strong>%%sitename%%:</strong> Your site name</li>
<li><strong>%%excerpt%%:</strong> The post excerpt</li>
<li><strong>%%category%%:</strong> Primary category</li>
<li><strong>%%currentyear%%:</strong> Current year</li>
</ul>

<h2>Other Important Meta Tags</h2>

<h3>Open Graph Tags (Social Media)</h3>

<p>Control how your content appears when shared on Facebook, LinkedIn, and other platforms. SEO plugins typically handle these:</p>

<ul>
<li>og:title - Social share title</li>
<li>og:description - Social share description</li>
<li>og:image - Image displayed in shares</li>
</ul>

<h3>Twitter Cards</h3>

<p>Similar to Open Graph but specific to Twitter. Most SEO plugins configure these alongside Open Graph tags.</p>

<h3>Robots Meta Tag</h3>

<p>Controls search engine behavior:</p>

<ul>
<li><strong>index/noindex:</strong> Whether to show the page in search results</li>
<li><strong>follow/nofollow:</strong> Whether to follow links on the page</li>
</ul>

<p>SEO plugins provide simple checkboxes for these settings on each page.</p>

<h2>Adding Meta Tags Without a Plugin</h2>

<p>While plugins are recommended, you can add meta tags manually in your theme:</p>

<h3>In Theme header.php</h3>

<p>Add meta tags inside the &lt;head&gt; section:</p>

<pre>
&lt;meta name="description" content="Your page description here"&gt;
</pre>

<p>This approach is inflexible since it applies to all pages. Theme customization is better left to developers.</p>

<h3>Using Functions.php</h3>

<p>You can hook into wp_head to add dynamic meta tags, but this requires PHP knowledge and is more complex than using a plugin.</p>

<h2>Checking Your Meta Tags</h2>

<h3>View Page Source</h3>

<ol>
<li>Visit your page in a browser</li>
<li>Right-click and select "View Page Source"</li>
<li>Look in the &lt;head&gt; section for your meta tags</li>
</ol>

<h3>Browser Extensions</h3>

<p>SEO extensions like SEO Meta in 1 Click or MozBar display meta tags without viewing source code.</p>

<h3>Google Search Console</h3>

<p>Use the URL Inspection tool to see how Google reads your meta tags.</p>

<h2>Common Mistakes to Avoid</h2>

<ul>
<li><strong>Duplicate meta descriptions:</strong> Every page needs unique descriptions</li>
<li><strong>Keyword stuffing:</strong> Cramming keywords looks spammy and hurts clicks</li>
<li><strong>Too long:</strong> Truncated tags look incomplete in search results</li>
<li><strong>Missing tags:</strong> Not having meta descriptions leaves Google to auto-generate (often poorly)</li>
<li><strong>Misleading content:</strong> Tags that don't match page content hurt user trust</li>
</ul>

<h2>Quick Reference</h2>

<p><strong>Title Tags:</strong> Under 60 characters, include keyword, make compelling</p>
<p><strong>Meta Descriptions:</strong> Under 155 characters, include keywords, action-oriented</p>
<p><strong>Best Method:</strong> Use an SEO plugin (Yoast, Rank Math, or AIOSEO)</p>
<p><strong>Check Tags:</strong> View page source or use SEO browser extensions</p>

<p>Properly optimized meta tags improve your visibility in search results and increase the likelihood that searchers click through to your site. Take time to write unique, compelling tags for your most important pages.</p>
`;

