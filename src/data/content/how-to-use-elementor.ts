export const content = `
<p>Elementor transforms WordPress website building into a visual, drag-and-drop experience. Whether you're building your first website or transitioning from another platform, this guide walks you through everything from installation to creating professional pages.</p>

<h2>Getting Started with Elementor</h2>

<h3>How to Install Elementor in WordPress</h3>

<p>Installing Elementor takes just a few minutes:</p>

<ol>
<li>Log into your WordPress dashboard</li>
<li>Navigate to Plugins → Add New</li>
<li>Search for "Elementor"</li>
<li>Click "Install Now" on Elementor Website Builder</li>
<li>Click "Activate" once installation completes</li>
</ol>

<p>Elementor is now ready to use. You'll see new "Elementor" and "Templates" menu items in your dashboard.</p>

<h3>Creating Your First Page</h3>

<ol>
<li>Go to Pages → Add New</li>
<li>Give your page a title</li>
<li>Click "Edit with Elementor"</li>
<li>The Elementor editor opens with a blank canvas</li>
</ol>

<h2>Understanding the Elementor Interface</h2>

<h3>The Editor Layout</h3>

<p><strong>Left Panel:</strong> Contains widgets, settings, and navigation. This is your toolbox for building pages.</p>

<p><strong>Canvas Area:</strong> The main editing area showing your page exactly as visitors will see it.</p>

<p><strong>Bottom Bar:</strong> Quick access to settings, responsive mode, history, and preview options.</p>

<h3>Key Panel Sections</h3>

<p><strong>Elements Tab:</strong> All available widgets organized by category—Basic, Pro, General, Site, WooCommerce.</p>

<p><strong>Global Tab:</strong> Saved templates, colors, and fonts you can reuse across your site.</p>

<p><strong>Settings Tab:</strong> Page-level options like title, status, featured image, and layout.</p>

<h2>Building Blocks: Structure</h2>

<p>Elementor pages are built with three structural levels:</p>

<h3>Sections</h3>
<p>The largest building blocks—full-width horizontal areas. Think of sections as rows that span your page. Each section can have its own background, spacing, and layout settings.</p>

<h3>Columns</h3>
<p>Sections contain columns (1-10). Columns determine horizontal layout within sections. A two-column section might have 50/50 split, 70/30, or any custom ratio.</p>

<h3>Widgets</h3>
<p>The actual content elements—headings, text, images, buttons, forms. Widgets live inside columns.</p>

<h3>Adding Structure</h3>
<ol>
<li>Click the "+" icon in the canvas to add a new section</li>
<li>Choose a column structure (or customize later)</li>
<li>Drag widgets from the left panel into columns</li>
</ol>

<h2>Essential Widgets</h2>

<h3>Basic Widgets (Free)</h3>

<p><strong>Heading:</strong> Titles and headlines with complete typography control. Set H1-H6 tags, colors, and effects.</p>

<p><strong>Text Editor:</strong> Rich text areas for paragraphs and formatted content. Similar to WordPress's classic editor.</p>

<p><strong>Image:</strong> Add images with caption, link, and lightbox options. Control size, alignment, and effects.</p>

<p><strong>Button:</strong> Clickable buttons with extensive styling—colors, borders, icons, hover effects.</p>

<p><strong>Spacer:</strong> Add vertical spacing between elements. Essential for controlling layout flow.</p>

<p><strong>Divider:</strong> Horizontal lines or decorative separators.</p>

<p><strong>Icon:</strong> Choose from thousands of icons with full styling control.</p>

<h3>Advanced Widgets (Free)</h3>

<p><strong>Image Box:</strong> Image with heading and text—perfect for features or services.</p>

<p><strong>Icon Box:</strong> Icon with heading and text for feature highlights.</p>

<p><strong>Testimonial:</strong> Customer quotes with author info and image.</p>

<p><strong>Accordion:</strong> Collapsible content sections for FAQs.</p>

<p><strong>Tabs:</strong> Tabbed content organization.</p>

<h2>Styling Elements</h2>

<p>Every widget has three tabs of settings:</p>

<h3>Content Tab</h3>
<p>Controls what the widget displays—text, images, links, alignment.</p>

<h3>Style Tab</h3>
<p>Controls appearance—colors, typography, borders, shadows, spacing.</p>

<h3>Advanced Tab</h3>
<p>Layout controls—margin, padding, motion effects, responsive settings, custom CSS.</p>

<h3>Common Styling Options</h3>

<p><strong>Typography:</strong> Font family, size, weight, style, line height, letter spacing.</p>

<p><strong>Colors:</strong> Text color, background color, border color. Use hex codes, RGB, or pick from palette.</p>

<p><strong>Spacing:</strong> Margin (outside space) and padding (inside space) with per-side control.</p>

<p><strong>Borders:</strong> Type, width, color, and radius for rounded corners.</p>

<p><strong>Shadow:</strong> Box shadows and text shadows with position, blur, and color control.</p>

<h2>Working with Templates</h2>

<h3>Using Pre-Made Templates</h3>

<ol>
<li>Click the folder icon in the canvas</li>
<li>Browse templates by category or search</li>
<li>Preview templates before inserting</li>
<li>Click "Insert" to add to your page</li>
<li>Customize text, images, and colors to match your brand</li>
</ol>

<h3>Saving Your Own Templates</h3>

<ol>
<li>Build a section or page you want to reuse</li>
<li>Right-click the section handle</li>
<li>Select "Save as Template"</li>
<li>Name it descriptively</li>
<li>Access later from Templates → Saved Templates</li>
</ol>

<h2>Responsive Design</h2>

<h3>Responsive Mode</h3>

<p>Click the responsive icon in the bottom bar to switch between:</p>
<ul>
<li><strong>Desktop:</strong> Default editing view</li>
<li><strong>Tablet:</strong> Medium screen preview</li>
<li><strong>Mobile:</strong> Small screen preview</li>
</ul>

<h3>Device-Specific Settings</h3>

<p>Many settings show device icons. Clicking these lets you set different values per device:</p>
<ul>
<li>Different font sizes on mobile vs. desktop</li>
<li>Hide elements on specific devices</li>
<li>Adjust spacing for smaller screens</li>
<li>Change column order on mobile</li>
</ul>

<h2>Troubleshooting Common Issues</h2>

<h3>Elementor Editor Not Loading</h3>

<p>If the editor shows a blank screen or loading wheel:</p>
<ul>
<li>Clear browser cache and cookies</li>
<li>Disable other plugins temporarily to find conflicts</li>
<li>Switch to a default theme temporarily</li>
<li>Check PHP memory limit (256MB recommended)</li>
<li>Ensure WordPress and Elementor are updated</li>
</ul>

<h3>Elementor Transparent Header</h3>

<p>To make your header transparent over hero sections:</p>
<ul>
<li>In Elementor Pro Theme Builder, edit your header</li>
<li>Set section background to transparent</li>
<li>In section Layout settings, enable "Stretch Section"</li>
<li>Set Position to "Absolute"</li>
<li>Adjust page content to account for transparent header overlap</li>
</ul>

<h3>Changes Not Showing</h3>
<ul>
<li>Clear any caching plugins</li>
<li>Check that changes are published (not just saved as draft)</li>
<li>View in incognito/private window to bypass browser cache</li>
</ul>

<h2>Best Practices</h2>

<h3>Performance</h3>
<ul>
<li>Don't overuse sections—combine when possible</li>
<li>Optimize images before uploading</li>
<li>Use lazy loading for images</li>
<li>Avoid excessive animations</li>
</ul>

<h3>Organization</h3>
<ul>
<li>Name your sections and columns descriptively</li>
<li>Use Navigator panel (right-click → Navigator) for complex pages</li>
<li>Save reusable elements as templates</li>
<li>Set up Global Colors and Fonts for consistency</li>
</ul>

<h3>SEO</h3>
<ul>
<li>Use proper heading hierarchy (H1 → H2 → H3)</li>
<li>Add alt text to all images</li>
<li>Keep important content high in page structure</li>
<li>Don't hide critical content in tabs or accordions</li>
</ul>

<h2>Next Steps</h2>

<p>Once comfortable with basics:</p>
<ul>
<li>Explore the full widget library</li>
<li>Learn motion effects and animations</li>
<li>Try Theme Builder (Pro) for headers and footers</li>
<li>Build a template library for your common layouts</li>
<li>Experiment with custom CSS for advanced effects</li>
</ul>

<p>Elementor's learning curve is gentler than most professional design tools. With practice, you'll move from following tutorials to creating original designs efficiently. Start simple, build confidence, and expand your skills progressively.</p>
`;

