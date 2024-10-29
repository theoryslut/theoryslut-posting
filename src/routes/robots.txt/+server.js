
export function GET() {
	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Type': 'text/plain'
	};

	return new Response(body, {
		headers: headers
	});
}
//  from https://maya.land/robots.txt
let body = `User-agent: Googlebot
Allow: /
Allow: /$

User - agent: AdsBot - Google
Allow: /index.html
Allow: /$
Disallow: /

User - agent: Google - Extended
Disallow: /

User - agent: GoogleOther
Disallow: /

User - agent: msnbot - media
Allow: /index.html
Allow: /$
Disallow: /

User - agent: Bingbot
Allow: /index.html
Allow: /$
Disallow: /

User - Agent: ImagesiftBot
Disallow: /

User - agent: ChatGPT - User
Disallow: /

User - agent: GPTBot
Disallow: /

User - agent: msnbot - media
Disallow: /

User - agent: anthropic - ai
Disallow: /

User - agent: cohere - ai
Disallow: /

User - agent: Twitterbot
Allow: /index.html
Allow: /$
Disallow: /

User - agent: AhrefsBot
Allow: /index.html
Allow: /$
Disallow: /

User - agent: CCBot
Allow: /index.html
Allow: /$
Disallow: /

User - agent: Mastodon
Allow: /

User - agent: Lieu
Allow: /

User - agent: Wiby
Allow: /

User - agent: Applebot
Allow: /

User - Agent: search.marginalia.nu
Allow: /

User - agent: ia_archiver
Allow: /

User - agent: *
    Allow: /feed.xml
Allow: /feed/responses.xml
Allow: /feed/monologues.xml
Allow: /feed/updates.xml
Allow: /index.html
Allow: /$
Disallow: /
`