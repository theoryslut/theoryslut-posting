<script>
	import { onMount } from 'svelte';

	import Footnote from '../lib/footnote/Footnote.svelte';
	import SuperScript from '../lib/footnote/SuperScript.svelte';
	import footnoteInit from '../lib/footnote/footnoteInit';

	import sue_meme from '../assets/images/glee.png';
	import go_piss_girl from '../assets/images/gopissgirl.jpg';

	onMount(() => {
		footnoteInit('a.footnote', 'a.bottom');
	});
</script>

<h1>Sexual Hegemony and Mastodon</h1>
<h2>15 March 2023</h2>
<h5>CW politics around public space and (queer) people's behavior in it. also urinals</h5>
<h3>urinal politics but make it social media</h3>
<p>
	ok really it's about sodomites' behavior in public space but i figured the word 'sodomites' should
	probably not be in my content warning even if it's funnier And more accurate
</p>
<p>
	Some very good friends and I have been making our way through Christopher Chitty's <a
		href="https://www.dukeupress.edu/sexual-hegemony">Sexual Hegemony</a
	>. The jury is out on my take on the actual contents of the book, BUT the section we read last
	week has been marinating in the back of my mind and finally bubbled up alongside some thoughts
	I've been having on social media more generally the past few months.
</p>
<p>Note: footnotes are clickable both ways! Navigate with ease.</p>
<h4>(Early) Public Urinal Politics</h4>

<p>
	In the section I'm ruminating with, Chitty is talking about the rise in the modern policing of
	sodomy in Europe in the late 18th to late 19th centuries in Europe, using Paris as an illustrative
	example. Smack dab in the middle of this range, in 1841, is when the first public urinals are
	introduced in Paris.
</p>
<p>
	For Chitty, public urinals pose fundamental contradictions to the great modern, urban quest to
	police public space. Most straightforwardly, they're invented as a means of controlling and
	sanitizing public space: piss here, not there. Yet not only does the first round of urinal
	installations fail to "break Parisian men's habit of relieving themselves wherever they saw fit,"
	their original architecture seems designed to draw attention to this practice. The original
	urinals are "incredibly phallic structures, towering twelve feet above the street, capped with a
	glans-like finial. . .[and are essentially] iron slabs with no drainage." The lack of partitions
	and the stench of the urine cause complaints in Paris's <i>Gazette Municipale</i> of 1843 that "bourgeois
	women and children could no longer look out their windows or leave their houses without suffering 'outrages
	against morals.'" (p. 124) Read: without witnessing a penis.
</p>
<p>
	So a new design is dreamt up by Paris's social reformers, and partitions are introduced.
	Partitions block out the view of the pissing (and penises) from street onlookers. Yet they
	heighten the other obvious problem with urinals for bourgeois social reformers: they are "temples
	of urethral eroticism" (Chitty's language, p. 125). They're cruising grounds, and incredibly
	optimized ones at that: in the center of public space, convenient and well-trafficked, yet
	creating a "semi-private, same-sex" space for hookups to take place without an immediate concern
	over prying eyes. Also, they're literally giant dicks that you're encouraged to piss upon.
</p>
<p>
	Chitty argues that it is the "entrance" of middle class women onto Parisian streets that
	instigates this entire drama over men and where they piss (and therefore, where they fuck). I'll
	just quote him at length here-- he's pretty to the point:
</p>
<blockquote>
	This nineteenth-century sexual struggle over the phallus can be sketched in broad strokes thus:
	the entry and influence of middle-class women into the public sphere is the decisive factor in
	changing norms of urban policing around public displays of sexuality — namely, prostitution and
	homosexuality. Middle-class women extended the domestic norms of sexual consent — consent to
	copresence with sexual acts — from their own households into the public spaces they circulated
	within.
</blockquote>
<h4>ok what does this have to do with mastodon tho</h4>
<p>I'll get there! First, some notes on Chitty's thesis.</p>
<p>
	The above thesis will likely sound very familiar to anyone who's lived in a city recently <strike
		>or been on Twitter long enough to see "kink at Pride" discourse, which is to say about 20
		minutes.</strike
	>
	There are competing visions here of what a public space should look like, whose desires should be prioritised,
	and how that prioritization should be enforced. Banally, the historical answer to the question of priority
	has been "whoever's interest lines up with the interest of capital," of course, and thus "whoever's
	desires can be mobilized for policing and monetization." Since approximately the invention of the public
	urinal, pursuing the supposed "protection"<SuperScript id="abuse" /> of white middle class women and
	children has dovetailed quite nicely with the interests of capital in modern cities.
</p>
<p>
	Without putting that very real distinction in power aside-- no, for real, we'll come back here-- I
	think there are questions here that cannot be summed up as <i
		>Karen and the US Bank vs the Pride Pups.</i
	>
</p>
<h4>actually really about mastodon</h4>
<p>
	To stage these questions, I'd like to move to somewhere a bit more familiar to my audience (of I
	assume at this point in the post, exclusively extremely online humanities fags). That's right,
	baybee: we're headed into the cesspit that is Online Content Moderation Discourse. Even better,
	it's inspired by my move from Twitter to Mastodon! (cue boos)
</p>
<p>
	Okay but actually, it's more inspired by my move from Twitter to. . . nothing, at the moment,
	because the Mastodon instance I'm on isn't really <i>social</i> like Twitter is -- that is to say,
	it's not structured to be <i>public space</i> the way Twitter is so deeply (for better or worse).
</p>
<h5>a note before i embark</h5>
<p>
	I'm using the mastodon instance I'm on as my case study, but I think this trend is somewhat
	generalizable to other places gay people hang out on the internet. Read: this is about fandom
	culture, Tumblr, and community discords fairly transparently; it also has implications for other
	platforms because platforms are platforms, people are people, and the constant and violent
	negotiation of the boundary between public and private in terminally capitalist societies is,
	well, just that. I'm focusing on mastodon to make my argument manageable in scale.
</p>
<h5>ok! finally! onto mastodon! i promise!</h5>
<p>
	The Mastodon instance I am currently on (which shall go nameless, as I do not wish to shame this
	instance or its tireless maintainers) is frequented by almost exclusively queer people, and my
	guess would be mostly trans adults. It's got a server block list that is in the high dozens and
	includes most of the more popular instances for listed reasons of mostly transphobia, bigotry,
	racism, and nazis (I assume mostly deserved). What this means in practice is that most of the
	posts I see, even on the Federated timeline,<SuperScript id="mastodon" /> are on other small instances
	run mostly by queer individuals with strong moderation policies.
</p>
<p>
	These moderation policies are, to put it mildly, Quite Different from Twitter or Instagram or
	Tumblr or even Reddit's moderation policies. Because they're written up and enforced by
	individuals or small groups, rather than massive corporations, they differ in several rather
	obvious structural ways.
</p>
<h5>
	Some preliminary suggestions as to why small gay Mastodon is different than corporate social media
</h5>
<ol>
	<li>
		there's incentive for mastodon hosts to discourage commercial and bot accounts/posts, as these
		rarely contribute much culturewise to the vibes of a community versus increasing its spam.
	</li>
	<li>
		related, because instances are not monetized, there is no incentive for the mastodon host to try
		to increase the amount of content or interaction on an instance
	</li>
	<li>
		meaning there is generally also no algorithm. posts happen, they're in a feed, that's that
	</li>
	<li>
		it's literally not a space where anyone should be able to get an account. it is not a commons.
		it is an exclusive social club. you're generally vetted more or less thoroughly. instance
		moderators want to know your vibes before you even get the privilege of engaging/contributing.
		there is more or less a giant "no heteros allowed" posted on the tree house door of gay
		instances
	</li>
	<li>
		because of this, the moderation has no burden of pleasing "everyone." You don't like how things
		are run on a given instance? you're welcome to hop to another that suits you better.
	</li>
	<li>
		crucially, because there's no burden of pleasing everyone; and because such instances are often
		hosted by an individual; and because gay people are gay people: <i>nudes (and porn) abound</i>.
		CP and other stuff that's illegal in the country where the server is hosted is generally banned,
		but beyond that, instances have a lot more control over what they <i>do</i> allow versus corporate
		social media.
	</li>
</ol>
<p>
	In addition to all of these differences in structural incentives for people running these
	platforms, there are a few other, less baked-in cultural quirks that impact the culture. biggest
	among them
</p>
<h5>content warnings, DNI lists, and <strike>arguments</strike> discussions, oh my</h5>
<p>you knew it was coming!</p>
<p>
	the instance I'm on may be stricter about some of these compared to others, but there is no
	internet corner immune to <strike>flame wars</strike> heated engagement about all three of these moderation
	strategies.
</p>
<p>let's attend to these matters in reverse order.</p>
<h6>arguments</h6>
<p>
	my instance doesn't allow them. lol. okay, those aren't the words it uses. i'll paraphrase so as
	not to negate anonymity, but before disagreeing with someone ("starting an argument") you are
	encouraged to politely ask the person whether they'd like to be argued with.
</p>
<p>
	out of the three, this is the policy i am most neutral about personally. does this policy come out
	of direct and traumatic experience (collectively if not individually) with internet flame wars and
	nazis targeting trans people? absolutely. does it have the side effect of making instances likely
	much, much easier to moderate? very probably! do gay people love to argue about the stupidest shit
	and then cry to the moderators to Exile the Offenders outside the Pale of Intentional Community? <i
		>you <b>know</b> we do</i
	>
</p>
<p>
	and also. i'm an arguments apologist! i like disagreements! i think they're fun! i think there is
	something lost when i have to politely request to dunk on a shit take! your take is shit! the
	wonderful thing about the internet is i can tell you your take is shit without leaving my bed, you
	can engage with that from your own bed or just ignore it, and it doesn't Have to be a whole thing!
	there is a genuine, honest to god difference between an argument and a harrassment campaign. a
	moderation policy can ban the latter without banning the former.
</p>
<p>
	i'd like to draw particular attention to the language of consent<SuperScript id="consent" /> here,
	because it so closely parallels Chitty's language in the block quote above. The suggestion of asking
	for consent before a disagreement is a transparent mirroring of "the domestic norms of sexual consent"
	to a space which is neither properly sexual nor properly domestic.
</p>
<h6>DNI (or you WILL be BLOCKED)</h6>
<p>
	if you've somehow escaped the growth of DNI lists, it's an acronym for Do Not Interact lists,
	often seen in profiles of gay people's personal accounts. Anecdotally I first saw these cropping
	up on Tumblr (eg, nazis DNI) and on the profiles of SWers on Twitter (mostly, minors DNI).
</p>
<p>
	I really, really do not get the point of DNI lists. To my knowledge no 4chan fash has ever been
	prevented from harrassing someone by being politely asked <i
		>hey, would you mind not harrassing me, I don't like it when you do that.</i
	>
	I can extend a little more sympathy towards the minors-DNI ask. if i put my ass on the public internet
	regularly, i'd be very uncomfortable with recieving comments about it from 12 year olds. and Yet. .
	. did
	<i>you</i>
	abide by the
	<b>YOU MUST BE OVER THE AGE OF 18 TO SEE THESE TITTIES</b> banners on porn sites? of fucking course
	not, you were 11 and wanted to see titties. if i wanted to have an adult conversation on reddit as
	a teen, i simply . . . didn't disclose my age. & for the reccord I'd list hanging out on sex reddit
	talking to adults rather than my peer group at age 13 as the major contributor towards me going into
	the having-of-sex with a relatively robust pro-consent, pro-kink, pro-SW politics.
</p>
<p>
	so if DNI lists are not, broadly, effective in preventing interactions, what are they for?
	transparently-- they're for flagging, but make it politics. and the pure length of gay mastodon
	profiles makes this pretty explicit. there is often a long list of "types" of people which are not
	allowed to interact with a given account (eg, white vegans, people who base their identity on
	parenthood, state-happy communists, etc etc)<SuperScript id="get-it" /> Some accounts take this further
	and ask that before favoriting, boosting, replying, or (hEaven forbid) following, potential "interacters"
	essentially apply to be allowed to interact. many accounts will block you or deny your follow request
	if you don't have a pfp, a lengthy bio, an established canon of Politically Fine Posts, and/or if (gasp)
	you follow or are followed by one of the above types of people.
</p>
<p>
	yeah, obviously i don't have a lot of time for this one. but i also think the proliferation of DNI
	lists and their sibling the "antis" has been pretty fully covered elsewhere at this point, and i
	don't think it's the most widespread even if it is the most immediately infuriating of the
	post-2016 developments in gay internet culture. so i am gonna move on to
</p>
<h6>par excellence: the Content Warning</h6>
<p>
	content warnings abound on gay mastodon in a way i've never seen on any other platform. scrolling
	through my 'home' feed just now, about half the posts had content warnings; most posts were coming
	from other instances, so it's definitely not a this-server cultural quirk. they're also integrated
	into the platform itself via spoiler headings.
</p>
<p>to demonstrate both the pleasures and the exasperations of this quirk, an example:</p>
<details>
	<summary> cw: vulgarity, body humor</summary>
	<p>haha balls</p>
</details>
<p>
	humorous, i'm sure you'll agree! as with many limits imposed by form, there's pleasure and humor
	offered in subverting the expectations that the spoiler imposes on the reader.
</p>
<p>it's also fucking infuriating.</p>
<p>
	i have to abandon any remaining austenesque faggish "how curious" tonal subtlety to make this
	point. i hate the content warnings on mastodon. i hate them. there are ~Wonderful~ uses for
	content warnings out there. CWs on long blog posts whose titles may not indicate all the potential
	places they may go? PERFECT use of content warnings. displayed before films which contain visual
	depictions of scenarios many people have trauma around (such as rape)? Perfect! That's a great way
	to take care of your audience and improve access.
</p>
<p>
	but content warnings for Every Single Post on a timeline, most of them well under two sentences in
	length? That simply forces me to click endlessly on individual headers, breaking up my experience
	of the site. Not to mention that for content where a warning <i>is</i> desirable, the warning is
	almost useless. seeing about 50
	<span class="hljs">anti-trans legal violence in the US</span> CWs in a row informs me exactly what
	is happening in the world, and feels worse because I frequently have to go digging elsewhere to
	find the actual news-- the alternative is clicking through dozens of individual despairposts
	trying to find one that mentions what everyone is in despair <i>about.</i><SuperScript
		id="inb4"
	/> Under other circumstances I might be forced to comment about how this structure might improve access
	for some people, but I'm not in this case, because the instance I'm on has a fork of mastodon which
	literally doesn't support image descriptions lmao so clearly these are not coming from a particularly
	robust analysis around access.
</p>
<p>
	From a horizontal mingling of ideas and people, into santized and hierarchical relations: content
	prefaced and subservient to the overdetermining meanings of its title. Gone is any semblance of a
	public assembly of posts; what is left is naught but the enclosure of the commons! Posts coming
	one by one, labeled, organized, ordered, each contained within its own semantic borders and unable
	to wander freely, thwarting the mixing of its fluid meanings visually and horizontally with other
	post-fluids. Is it a surprise that the prison resembles the Mastodon feed, which itself resembles
	a prison, each post in its carefully labeled cell?
</p>
<p>
	i am forced<SuperScript id="foucault" /> by internet law to clarify that the above was a shitpost.
	I am not actually suggesting that gay mastodon is a prison. it would make pretty shit politics to make
	such a comparison. which is why i'm not actually making the argument that gay mastodon is a prison.
	i wouldn't do such a thing.
</p>
<h5>but</h5>
<p>
	i <b>am</b> arguing gay mastodon is something potentially even more offensive to gays. It's
	boring!<SuperScript id="shitpost" /> And it is boring for <i>political reasons.</i>
</p>
<h5>tldr: mastodon boring</h5>
<p>
	so, the boredom. i can't casually interact with anyone. not only is there no drama, there's also
	no content. what content there is generally comes from an incredibly small subset of online
	humans. real person pfps aren't much of a thing so it's hard to do demographics, but the instance
	i'm on seems to lean heavily white 20something anglophone techie trans person. there is no Joyce
	Carol Oates valiantly beating down the TERFs and posting feet. there are no 🧵 12/345 posts about
	like, manatees or the inner workings of a major company's fucked up tech stack. it's just gay
	people mentalhealthposting and complaining about c++ headers. and even that you have to opt in to
	see!
</p>
<div class="center-flex">
	<img src={sue_meme} alt="the sue sylvester meme" class="meme" />
</div>

<p>
	at this point i think i've established where i'm going with this. gay mastodon, for some
	immediately economically determined reasons and other, perhaps more culturally determined reasons,<SuperScript
		id="superstructure"
	/> has developed to resemble the bedroom more than it has a public space in its politics. honestly,
	i've brought <i>into</i> my bedroom and fucked many people with less vetting and consent discourse
	than many people require of their mastodon "interactors." and i'm a picky bitch!
</p>
<p>
	gay mastodon isn't public. it has neither the danger nor the excitement nor the unexpected
	pleasures of public space. To borrow from Sam Delany talking about urban life, what makes public
	spaces vital is the chance of <i>contact</i> -- the encounter with something that might be unexpected
	or unfamiliar, especially social contact across lines of class, race, ethnicity, and gender.
</p>
<p>
	ok i'm just gonna quote him, it's worth the full quote. really, just go read times square red
	times square blue and come back. it's that good.
</p>
<blockquote>
	If the range of heterosexist homophobic society as a system wants to ally itself to an
	architecture, a lifestyle, and a range of social practices that eschew contact out of an ever
	inflating fear of the alliance between pleasure and chaos, then I think it is in for a sad time,
	far more restrictive, unpleasant, and impoverishing than the strictures of monogamy could ever be.
	(p. 194)
</blockquote>
<h4>gendered space</h4>
<p>
	while i've touched on it some, I think it's worth emphasizing how much "the battle over public
	space" is, and always has been, cast through the politics of <i>gendered space</i>.
	<SuperScript id="is-it" /> the enclosing of public space until it resembles something more private
	is, for the bourgeois social reformers of 19th century Paris as for trans internet users today, an
	attempt to protect certain forms of peace and comfort against a perceived onslaught of largely male
	indecency and refuse.<SuperScript id="alsoo" />
</p>
<p>
	perhaps unlike Chitty (and Samuel Delany<SuperScript id="delany" /> ), I think there's sometimes genuine
	merit in the concerns expressed by such attempts, well hidden underneath the often ridiculous rhetoric
	they're deployed with.
</p>
<p>
	To put it bluntly: men often have an easier time of it in public. The bodies of men are understood
	(hegemonically) as essentially of their own possession, separate and self-contained from their
	environment and other bodies; the furor over public sodomy is partially a furor over the perceived
	violation of this assumption (see Kristeva et al). gendered bodies, especially those marked as
	well by racialization and class, are not understood this way. when you enter public space as a
	body marked by gender,<SuperScript id="hollow" />
	be it the subway or twitter dot com, your body and being is understood as available for consumption---
	through comments, through harrassment, through assault, through abstract discussion, through displays
	of desire and disgust. gendered bodies do not move through public space neutrally and naturally. and
	i'd argue the policing of sodomy is an extension of this logic, not its opposite-- sodomy marking a
	failure of adherence to the atomized contract expected of
	<i>public</i>
	masculinity. After all, gay bourgeois rights, insofar as they have been granted, have allied themselves
	closely to the legal fiction of private space and its supposed freedom from the state, not to public
	gay cruising.
</p>
<h5>tying it back to digital life</h5>
<p>
	The internet dramatizes and particularizes some of these conflicts from urban meatspace. Though
	this is yet another essay of its own, I'll toss out some highlights for digestion:
</p>
<ol>
	<li>
		Once something is on the public internet, it has the capacity to be "public" forever. In person,
		by pissing in the street or being visibly trans you're opening yourself up to whoever's
		physically around you taking offense, for the duration of your piss +/ outdoors existence. By
		posting online you're opening yourself up to anyone with an internet connection viewing your
		content for as long as it's hosted, and then making it your problem. revenge porn is the most
		dramatic example of this.
	</li>
	<li>
		Similarly, physical publics are limited in ways the internet is not. you want to beat up on a
		particular person in person as a group, you've gotta coordinate people to show up in one place,
		at a certain time, and act in coordination. online? all you've gotta do is share a link in a
		groupchat and people can make someone's life hell at their leisure, from the comfort and
		convenience of their own homes, indefinitely. it can even be (and often is) automated. are there
		obvious analogies here between internet harrassment and physical state-sponsored harrassment
		campaigns? absolutely. does your average bitcoin miner have access to those kind of resources?
		fuck no. the internet democratizes (in all the gloriously liberal meanings of that word) a
		particular form of social warfare.
	</li>
	<li>
		the internet as an infrastructure is encountered in physical spaces both private (eg your bed at
		night) and public (at work or on the subway). Social media is habitual and woven into our daily
		rhythms in all spaces and times of day. Its intimacy is bound up as much in <i>how</i> it is encountered
		as in what content it contains. Whatever dangers are encountered online are emotionally woven into
		physical space and time almost homogenously, compared to the separate habitual locations of daily
		life (work, home, the street) and their distinctive pleasures and dangers. (Work-from-home, obviously,
		being the exception that proves the rule.)
	</li>
	<li>
		the infrastructure of the internet itself, while often concealed, plays an enourmous role in
		what-can-be-said. sometimes what content we upload is available to anyone with an internet
		connection, sometimes open to a select few, sometimes solely to ourselves--- but unless it's
		hosted by a raspberry pi in someone's basement, chances are the data is living on a cloud
		server, usually at this point a series of abstractions on hard metal owned by amazon, google, or
		microsoft. wherever that data lives, it is subject to the laws of its resident country regarding
		its content and use. while the level of surveillance of public space has also drastically
		increased since paris 1841, it's also kinda leveled off in comparison to the absolute explosion
		of digital surveillance. additionally, with the rise of ML, the chances these days of content on
		the public internet being safe from being scraped or mined behind the scenes by one actor or
		another for various purposes is slim. <b
			>nothing is ever truly private in the sense of control or scope.</b
		>
	</li>
</ol>
<h5>the cop virus</h5>
<p>
	so to make it explicit: the public sphere has dangers! the public internet has dangers! and these
	dangers, like all dangers under capitalism, are unevenly allocated along lines of power.
</p>
<p>
	this is a really politically relevant and touchy point so I'm going to pause here and clarify some
	things. in making these comparisons, I hope my reader understands I am <i>not</i>
	arguing that seeing a penis when one does not wish to universally constitutes "harm."<SuperScript
		id="bad-faith"
	/>
	Neither am I suggesting that bourgeois white women actually <i>do</i> represent some absolute peak
	of victimhood, to which all other grievances pale and whose "protection" by the state outweighs all
	violence done in its name. jesus! rather, i'm suggesting that the hypervigilant victim strategy --
	often but not exclusively the domain of bourgeois, cisgender white women -- is just that, one of many
	strategies to deal with a very real experience of disautonomy and violence under capitalism. it simply
	happens to be one heavily informed by the logics and reliant upon the power of white supremacy and
	capitalist enclosure for any actual protections it might afford.
</p>
<p>
	dickshock is TERF logic, obviously, but it's also strikingly similar to the sorts of logics being
	used to structure the spaces gay people gather online in this moment. this kind of "safety" and
	comfort are always reliant on a sort of social hypervigilance of sanitation. if we can keep the
	bad sort "out," the thinking goes, we'll be able to maintain a community free of the social
	contagion that otherness entails. sound familiar? that's right baby this is just nationalism lol
	it's not that deep
</p>
<p>
	i'm going to borrow from Never Angeline North's excellent sea witch books and label this strategy
	of social hypervigilance as "catching the cops virus." i like this framing--- it emphasizes the
	episodic nature of freakouts about external "dangers", their social nature and transmission, and
	is entirely neutral about what "types" of people can be caught up in them. the cops virus is
	endemic to capitalism, not to particular sorts of people. it can name how queer people who want to
	post pussy--- the very behavior that our own generation of bourgeois white women are so desperate
	to get out of their line of sight--- end up using the exact same logics as as the state to police
	their own spaces.
</p>
<p>
	The cops virus, I think, also forecloses any emphasis on the potential pleasures and satisfactions
	in 'dirtiness'. The best a woman can hope for, under the bourgeois conception, is to get home to
	her husband and children unmolested. That she might <i>take pleasure</i>
	in some of the chaos of the street-- well, she wouldn't properly be a woman, would she? Gee, this sure
	does resemble a certain contemporary argument about who is and is not the natural resident of "queer"
	spaces, now, doesn't it?
</p>
<p>
	so, this all begs the question of course. if the cops virus
	(i'm-gonna-make-a-public-space-so-private) isn't an effective means of structuring collective
	space towards community and social pleasure, while limiting and discouraging the sorts of behavior
	that make public space quite hostile to many of its occupants. . . what is?
</p>
<h4>
	times square red, times square <span class="red">R</span><span class="green">G</span><span
		class="blue">B</span
	>
</h4>
<p>
	all right. you're somehow still here with me, so we're going to jump over to the obvious
	interlocutor for any discussion of queer people's pleasure in public space: Samuel Delany's <i
		>Times Square Red, Times Square Blue</i
	>. I'll be working specifically with his concept of <b>networking</b> versus <b>contact</b> in public
	space. If this were an academic essay, I'd have to drop tantalizing little quotes and then expound
	upon them in my own words. this isn't, though. i think samuel delany says it better than i could ever
	attempt to summarize. and in fact, he has structured his definitions seemingly so as to prevent them
	being easily extracted and quoted as "this is what contact is" and "this is what networking is". their
	definitions span the entire second half of the book itself. so i'm going to quote him at length, drawing
	some connective tissue throughout the middle, and then bring it back around at the end.
</p>
<p>Two notes on that connective tissue.</p>
<p>
	One, Delany is talking pretty specifically about socioeconomic class in his analysis. I'm going to
	chance imprecision here by asking my reader to imagine inter-"class" contact of other forms as
	well. ("gay people as a class," "sex workers as a class," "furries as a class," etc.)<SuperScript
		id="vulgar"
	/>
</p>
<p>
	Two, Delany is mourning the loss of a public sex culture in Times Square in the years leading up
	to his book's publication. I'll be mourning the purchasing by Musk (and subsequent, in-process
	dismantling of infrastructure) of Twitter for convenience. It's far from the only such death in
	digital space (backpage, anyone? craigslist personals, anyone?), and to be entirely honest it's
	not one i'm personally mourning versus dancing on the grave of, but it's the one that's got the
	most relevance and familiarity for my intended readership and it provides the most obvious
	contrast to mastodon.
</p>
<h5>all right. onto quote-dropping</h5>

<blockquote>
	(I) <br />Given the mode of capitalism under which we live, life is at its most rewarding,
	productive, and pleasant when large numbers of people understand, appreciate, and seek out
	interclass contact and communication conducted in a mode of good will. <br /><br />
	The class war raging constantly and often silently in the comparatively stabilized societies of the
	developed world perpetually works for the erosion of the social practices through which interclass
	communication takes place and of the institutions holding those practices stable, so that new institutions
	must always be conceived and set in place to take over the jobs of those that are battered again and
	again till they are destroyed. (p. 121)
</blockquote>
<p>
	So, already we've got a pretty succinct argument that such publics as the public urinal and
	Twitter (which was, regardless of any of its other traits, truly public and relatively
	inter-class) are both desirable, pleasurable, and also always under attack.
</p>
<blockquote>
	(II) <br />So stated, these points appear harmless enough. Over the last decade and a half,
	however, a notion of <b>safety</b> has arisen, a notion that runs from safe sex . . . to safe
	neighborhoods, safe cities, and committed (i.e., safe) relationships, a notion that currently
	functions much the way the notion of “security” and “conformity” did in the fifties. As, in the
	name of “safety,”
	<b
		>society dismantles the various institutions that promote interclass communication, attempts to
		critique the way such institutions functioned in the past to promote their happier sides are
		often seen as, at best, nostalgia for an outmoded past and, at worst, a pernicious glorification
		of everything dangerous</b
	>: unsafe sex, neighborhoods filled with un- desirables (read “unsafe characters”), promiscuity,
	an attack on the family and the stable social structure, and dangerous, noncommitted, “unsafe”
	relationships— that is, <b>psychologically “dangerous” relations</b>, though the danger is rarely
	specified in any way other than to suggest its
	<b>failure to conform to the ideal bourgeois marriage</b>. (emphasis mine, parentheticals
	Delany's, p. 121-2)
</blockquote>
<p>
	I would argue (as, I believe, would Chitty, who I've realized in writing this piece was a very
	close reader of Delany) that the history of this formulation of "safety" dates back much further,
	at least to 1841 Paris if not earlier. But holy shit, right? As Twitter is in this ongoing process
	of dismantling, mourning or analysis of its better parts in posts just like these <i>have</i> been
	lambasted for glorifying "everything dangerous": the nazis, trump, misinformation, abusive/addictive
	algorithms, etc. And as we've already seen, gay Mastodon structures itself in strikingly similar ways
	to the bourgeous bedroom or marriage in terms of its perception of informal, unexpected cross-class
	interactions as potentially dangerous.
</p>
<blockquote>
	(III) <br />
	I have taken “contact,” both term and concept, from Jane Jacobs’s instructive 1961 study, The Death
	and Life of Great American Cities. Jacobs describes contact as a fundamentally urban phenomenon and
	finds it necessary for everything from neighborhood safety to a general sense of social well-being.
	She sees it supported by a strong sense of private and public in a field of socioeconomic diversity
	that mixes living spaces with a variety of commercial spaces, which in turn must provide a variety
	of human services if contact is to function in a pleasant and rewarding manner. <br /> . . .
	<br />
	<br /> When social forces menace the distinction between private and public, people are most
	likely to start distrusting contact relations. In The Death and Life of Great American Cities
	(98–111), Jacobs analyzes how limited socioeconomic re- sources in the area around a public park
	(lack of restaurants, bathrooms, drug- stores, and small shops) can make the mothers who use the
	playground and live near it feel that their
	<b
		>privacy within their home is threatened —thus markedly changing their public attitude to
		interclass contact.</b
	>
	Briefly, a park with no public eating spaces, restaurants, or small item shopping on its borders forces
	mothers who live adjacent to it, and who thus use it the most, to “share everything or nothing” in
	terms of offering facilities of bathroom use and the occasional cup of coffee to other mothers and
	their children who use the park but do not live so near. Because the local mothers feel they must offer
	these favors to whomever they are even civil with (since such services are not publicly available),
	<b>they soon become extremely choosy and cliquish about whom they will even speak to.</b> The feel
	of the park becomes exclusive and snobbish—and uncomfortable (and inconvenient) for mothers who,
	in carriage, dress, race, or class, do not fit a rigid social pattern. Similarly, if every sexual
	encounter involves bringing someone back to your house, the general sexual activity in a city
	becomes anxiety-filled, class-bound, and choosy. This is precisely why public rest rooms, peep
	shows, sex movies, bars with grope rooms, and parks with enough greenery are necessary for a
	relaxed and friendly sexual atmosphere in a democratic metropolis. <br /> <br />
	Astute as her analysis is, Jacobs still confuses contact with community. Urban contact is often at
	its most spectacularly beneficial when it occurs between members of different communities. That is
	why I maintain that interclass contact is even more important than intraclass contact. (p 126-127)
</blockquote>
<p>
	Pleasurable and safe public space is -- surprise surprise -- an <i>infrastructural</i> matter. Twitter's
	encouraged low-stakes engagement; gay Mastodon does not.
</p>
<blockquote>
	(IV) <br />
	There is, of course, another way to meet people. It is called networking. . . . But contemporary networking
	is notably different from contact. At first one is tempted to set contact and networking in opposition.
	Networking tends to be professional and motive-driven. Contact tends to be more broadly social and
	appears random. Networking crosses class lines only in the most vigilant manner. Contact regularly
	crosses class lines in those public spaces in which interclass encounters are at their most frequent.
	Networking is heavily dependent on institutions to promote the necessary propinquity (gyms, parties,
	twelve-step programs, conferences, reading groups, singing groups, social gatherings, workshops, tourist
	groups, and classes), where those with the requisite social skills can maneuver. Contact is associated
	with public space and the architecture and commerce that depend on and promote it. Thus contact is
	often an outdoor sport; networking tends to occur indoors. <br /><br />The benefits of networking
	are real and can look—especially from the out- side—quite glamorous. But I believe that, today,
	such benefits are fundamentally misunderstood. More and more people are depending on networking to
	provide benefits that are far more likely to occur in contact situations, and that network- ing is
	specifically prevented from providing for a variety of reasons. (p 128-9)
</blockquote>
<blockquote><b>We need contact.</b> (p 175)</blockquote>

<p>
	And here's the meat of it, right? Gay mastodon has a bad case of the cops virus because <i
		>Mastodon itself is set up, on an infrastructural level, as a networking space that avoids
		contact.</i
	>
	Because you have to join a specific instance, which are almost always special interest and/or class/identity-based
	groups "where [only] those with the requisite social skills can maneuver" to participate; and because
	that instance immediately identifies you as part of one particular group or another to all users; and
	because instances tend to cross class lines "only in the most vigilant of manners"-- Mastodon was never
	and could never be about contact or public space.
</p>
<h4>okayokay you've sold me. we need contact. but h0w</h4>

<h5>
	INB4: absolutely the real issue is not having built communism<SuperScript id="disco" />
</h5>
<p>
	So! elephant in the room time. there's a real limitation of any critique of "how public space is
	structured at the level of infrastructure" as one of people's individual politics rather than as a
	social-political failure. small gay mastodon instances are also private spaces for reasons I
	haven't even touched yet-- they're hosted by individuals, generally out of their own funds or that
	of a few supporters. they're maintained in whatever time and energy is not taken up by their
	maintainers' day jobs and commitments. & so they come from the same demographics of people who
	start small farms, form intentional communities, and engage in other attempts to escape the ills
	of capitalism through pure economic force. Obviously, ideally we'd have some sort of, uh,,,,
	public,,,, infrastructure in place for such things as social media. perhaps the means of producing
	it would be held by those who built it and use it? has anyone ever thought of this before?
</p>
<p>
	but in the meantime -- we-- as the sorts of people who frequent gay online space-- are not
	actually that limited in our play! mastodon is so interesting because it <i>does</i>
	shift some of the constraints posed by the gigantic walled gardens of the aughts to 10s. and yet, the
	platforms we're choosing to spend time on, and to often build significant community infrastructure
	on ourselves, often structurally encourage and disseminate the cops virus. the sanitary forces, the
	cops virus, the distrust of contact appears
	<i>even or especially when we're the ones running the platforms.</i> I think we can do better than
	that in what we're aiming for. are these attempts doomed, under capitalism, to fail eventually? almost
	certainly! but it's in experiencing these smaller failures that we discover what we're fighting for
	at all, and how we want to fight for it. personally, i am not fighting for the establishment of DNI
	list communism, and if you've made it this far with me I doubt you are either.
</p>

<h5>back to piss back to piss back to piss</h5>
<div class="center-flex">
	<img
		src={go_piss_girl}
		alt="the gossip girl meme with the text changed to 'go piss girl' meme"
		class="meme"
	/>
</div>

<p>
	okay, so we've established i think we can do better. we'll get there. but first: you came here for
	the important things. like debunking the concept of building communism through the creation of
	isolated interest-based social spaces. and <i>PISS.</i>
</p>
<p>to bring us back around, i'd like to dig into one of the aspects of mastodon that does fuck:</p>
<h6>
	<i
		>there's porn! or: i can post my gotdamn female presenting nipples any where i damn well please</i
	>
</h6>
<p>
	barring the US fash moving on from their current laser focus on making trans people socially dead
	to broadening porn regulations, it is still fucking legal in the US to post dick on the internet.
	it's even legal to post trans dick on the internet. and yet you would not know it from the
	policies of corporate social media. this is one area where mastodon shines.
</p>
<p>
	it's like, literally some girl in like st louis who is hosting any tittie pics I put up on
	mastodon. also, i can control who sees them pretty granularly. also, i can simply delete them and
	be pretty sure ms missouri isn't keeping backups just to fuck me over because like, she's got
	better things to do with her time. obviously someone on the instance i'm on could like, dox me and
	leak them? but that's a feature of "you send a nude to literally anyone" and not like, a platform
	moderation issue. i'm like, pretty confident ms missouri is not selling my "anonymized" but fully
	deanonymizable user data to whoever so they can can be aggregated with my credit score and
	displayed to potential employers as a risk factor. <a
		href="https://twitter.com/avidhalaby/status/1602127460677844993"
	>
		or like, giving it away for free to random government agents.</a
	> obviously ms missouri could do me dirty. but like, why? would she?
</p>
<p>
	as far as post public dick online (non-monetized -- wouldn't know about how it works for that),
	these are honestly pretty decent conditions.
</p>
<p>
	and they're made possible by the <i>exact</i> sorts of partitioning that made public urinal cruising
	a thing-- a nominally public space which is in fact, mostly private.
</p>
<p>
	i think this is a really funny and also telling convergence, right? you've got gay mastodon, which
	is functionally useless as a public space but optimized for posting pussy. formed out of the same
	clay as the attempt to make public urinals less public, which winds up making them primo cruising
	spots. dickposting finds a way! even these structures built to control and cleanse are full of
	potential. conditional, temporary, never truly free, but <i>real</i> all the same.
</p>
<h5>so what might we look for?</h5>
<p>
	perhaps something like twitter, yes. or perhaps something more encounter-focused: the anonymity
	and place-specificity (once) offered by backpage/craigslist personals/grindr come to mind.
	something that surprised me as i was writing this is that mastodon, with no algorithm, was
	infinitely more optimized to cordon people and communities off from one another than twitter, with
	its famous, expensive, and controversial algorithm(s); corporate social media is not, inherently,
	any more or less contact-oriented than other offerings.
</p>
<p>
	this post is already too long to explore this subject fully, and a host of other insightful
	commentary has already been made on similar subjects. i'll leave that to another day. instead, in
	true delanean style, I'd like to close out with an anecdote.
</p>
<h5>contact</h5>
<p>
	i grew up, as probably most of the readers of this post are aware, in a small, semi-rural,
	middle-class Oregon town. it was not a particularly pleasant place to grow up an intellectually
	ravenous trans fag, but neither was it a particularly brutal one to me, white and middle class and
	well-behaved as I was. mostly, it was boring, soul-suckingly boring, and largely free of spaces of
	networking <i>or</i> contact for youth. (Delany, of course, is discussing the city. When he discusses
	the country, it is to suggest that other social strategies are required.)
</p>
<p>
	so i was very lonely, like so many people living under terminal capitalism. by late in my junior
	year i had largely stopped socializing and had sunk into a fairly deep depression. but i was also
	desperate to prove to myself that there <i>was</i>, in fact, a world out there that might have
	something of interest to the person i was becoming. so, one night, i googled "penpal site" or
	something along those lines, and responded to a couple of personal ads on penpals.phk.
</p>
<p>
	this is exactly the sort of situation that never would have happened under cops-virus-inflected
	forms of social media, and is an excellent example of "unsafe" social behavior under those
	rubrics. a sixteen-year-old, fairly sheltered girl, responding to ads by random people around the
	world, mostly adult men, looking for companionship?
</p>
<p>
	but i didn't encounter any nastiness. my messages petered out quickly with most of the people I
	talked with. but one of the people who I had responded to became my close, close friend for a year
	or so. we talked every day, sometimes for hours at a time, over email and skype messenger. (ah,
	2015. . .) they were from the same city in Brazil that my father had spent time in in college. a
	few years later, when my dad got an unexpected influx of cash, the two of us visited---me, meeting
	my friend for the first time in person, my father, catching up with his old hosts after a 20+ year
	gap. they were one of the first (possibly the first?) queer peers i met. (this was several years
	before a third of my high school friend group came out as trans, of course.) we fell out of touch
	after a bit, though we're back in contact now. (i owe them a message, oops!) but our friendship,
	especially in that final year of high school, was life saving.
</p>
<p>
	I took a quick look at <a href="https://penpals.phk.at/view_nm.php">penpals.phk</a> today to see
	how it was doing. It's still up! And looks probably exactly the same as it did then. Funnily, it
	does seem to be a prime spot for gay cruising and/or sex work, if what you're after is more of a
	slow burn. there are posts from people of all ages and genders and parts of the world. it's been
	around since 2006, and there are plenty of recent posts; it's far from dead. I doubt I am the only
	person to meet a long-term friend on the site, and I <i>know</i> it's far from the only site that facilitates
	connections like this. but until I remembered this personal moment of "contact" while re-reading TSRTSB,
	I never would have thought to connect it to a broader experience of the social internet.
</p>
<p>
	the depth of my desperation and loneliness in high school is, of course, somewhat embarrassing to
	me now, as an adult. writing about it is embarrassing. it's tempting to laugh off these moments of
	vulnerability, to see them as personal, as personal failures. social desperation is uncomfortable
	to experience and uncomfortable to witness, as banally common as it is. and yet-- it <i>is</i> banally
	common, particularly for elders and children in the US. particularly for gay people. and if we are
	to take delany's word for it, it's common in part due to the perpetual dismantling by capitalism of
	structures that allow contact between people.
</p>
<p>
	if samuel delany were not so incredibly generous and dare I say shameless (unshameable?) about
	sharing the details of his public sex life, this essay would not exist. (would Chitty's book be
	the same without Delany's insights into public sodomy? doubtful.) if we're thinking about what we
	want out of the public internet, it might be worth talking about our own moments of social
	desperation, and where we have gone to quench them. moments caught up in shame, desire,
	loneliness, and the fear of displaying vulnerability in public-- and where we went to display it
	anyway.
</p>
<p>
	we need contact. in the words of tourmaline and cyrus dunham, "[5]0 years after no-touch laws,
	[5]0 years after wild bill parker, the vice squads, and the fruit tank, [we are all] just trying
	to figure out how to be outside, together, without so much fear and embarrassment."<SuperScript
		id="touch"
	/>
</p>
<p>anyway lol. fuck mastodon</p>
<h2>~</h2>
<div class="footnote">
	<Footnote id="abuse">
		or, the negotiation of who has the legal and extralegal right to abuse, coerce, control, and
		generally harm them inside the confines of the private nuclear family
	</Footnote>
	<Footnote id="mastodon">
		explaining how Mastodon works is outside the scope of this lol if you need a primer go find one</Footnote
	>
	<Footnote id="consent">
		it's not the literal word used in the policy. i'd like to be attentive to phrasing but i don't
		want to close read for anonymity reasons</Footnote
	>
	<Footnote id="get-it">i mean like. i get it. and also</Footnote>
	<Footnote id="inb4">
		INB4 the "this is also how Twitter works though": On Twitter this is not a thing. If there's
		violence happening, especially against trans people, Twitter makes damn well sure I as a trans
		person see that news no matter how many times I block their "suggested posts". Twitter, as a
		platform, wants me angry and nominally informed, though not necessarily of the truth-- that's a
		primary aspect of both its selling point to its userbase and its basis of monetization.
	</Footnote>
	<Footnote id="foucault">
		but the Panopticon was also a laboratory; it could be used as a machine to carry out
		experiments, to alter behaviour,
		<b>to train or correct individuals.</b>. . . I found this quote on
		<a href="https://genius.com/Michel-foucault-discipline-and-punish-panopticon-excerpt-annotated"
			>genius dot com</a
		> i kid you not. the kids are alright. yes, this is also a shitpost</Footnote
	>
	<Footnote id="shitpost">
		this is also a shitpost. i won't be marking them from here on out. i believe in you. you can
		figure it out
	</Footnote>
	<Footnote id="superstructure">
		are these reasons eventually boil-downable to economic reasons? perhaps. but they're, as Delany
		is so careful to point out, not <i>inevitable</i> cultural quirks; the quirks gay mastodon has
		developed are not the
		<i>only</i> way people could respond to and make meaning out of the structures conditioning its existence.
		is any cultural response rooted in bare economic reality? of course. does that economic reality shape
		what-can-be-said? who do you think i am! but it's also not totalizing. there are options among the
		what-can-be-saids. can't believe i've been caught making an argument for free will lol embarrassing</Footnote
	>
	<Footnote id="is-it">
		is it fundamentally-- for <i>us</i>-- a gender question? (internet) fash are generally *white,
		protestant, middle class* men, not just men. for many trans people, it's white *women* we are
		fleeing from as well. at the same time it does kinda seem to be a men in public space feeling
		the freedom to argue and harrass thing? there is a reason they are called reply Guys, though it
		goes without mentioning that there is an abundance of women reply guys. thinking about hoteps as
		another example of feminine/queer scenes being harangued by mostly cis men. i've seen jewish
		anti-Zionist twitter get lambasted by mostly jewish men informing them their judaism is fake
		and/or their antizionism a betrayal. i also think there's something about being a "public woman"
		(to cite Tourmaline) which makes the sort of spaces Delany frequents not relevant to
		non-cis-men. there are historical reasons why there is no modern lesbian public sex culture on a
		comparable scale to modern public sodomy culture, and it's infrastructural and hegemonic as much
		as it is cultural. (there isn't a complaint about working class women pissing in the street in
		1840s Paris, it's worth mentioning! but there are complaints against women sex workers). and
		yet, obviously, men who are not white and wealthy do not encounter public space neutrally
		either.</Footnote
	>
	<Footnote id="alsoo">
		OBVIOUSLY IT'S ALSO ABOUT ~1000 OTHER THINGS. Immediately-- for Chitty, it's also about class.
		Working class women in Paris in 1841 saw dicks regularly, because they lived in such cramped
		conditions that the middle class separation of what is done in the private space of the bedroom
		versus the public space of the parlor or the street simply did not apply if you have 4+ adults
		and potentially several children living out of the same room. So the complaints about
		dickspotting are largely coming from middle class women. While obviously this continues to be
		relevant today in the policing of public space, and digital space is not somehow "less classed"
		than in-person space, i think it's a little less relevant to specifically gay people not wanting
		to see nazi shit and be harrassed on the internet. Genitals are evenly distributed
		cross-class--- everyone has them, but middle class women see less and want to see less of
		others'. Fash shit is
		<i>not</i> evenly distributed across internet space, and IME encountering it more/less has less to
		do with class and more to do with where and who you hang out with, as well as whether you're targeted.
		there's currently no "pay to see less fash shit" tiers on popular platforms. internet spaces that
		the professional classes frequent often have a high nazi density because american fascism is currently
		a pretty middle class movement. if you're a target for nazis (non-white, non-cis, non-protestant),
		you're likely to see a lot more of it than anyone who isn't, period. hanging out on the internet
		itself is a classed activity (you have to have access to a device and a connection) and there's interesting
		dynamics in all of this so maybe i'll write another essay about that-- but for now, i'm focusing
		on other angles.</Footnote
	>
	<Footnote id="delany">
		worth mentioning Sam Delany is on both twitter and facebook and has a delightfully unexpected
		and idosyncratic posting style. go give him a follow</Footnote
	>

	<Footnote id="hollow">
		you can thank Hollow Knight calling Hornet the "gendered child" for this formulation of "women
		and trans people but make it less yucky." by marking i do not mean to reify the hegemonic
		subject as "unmarked" by the structures of gender and therefore somehow prior to gender, but to
		draw attention to exactly that formulation of whiteness and maleness as "unmarked," because it's
		exactly this structure at play in public space.</Footnote
	>
	<Footnote id="bad-faith">
		like, yeah. . . if you're getting dick pics or being flashed as a part of targeted harrassment
		then for sure. the broader politics of dick pics on dating apps are outside of the scope of this
		essay lmao because there's a Lot going on there purely in the differences structurally and
		culturally between ostensibly male and ostensibly female online dating cultures that cishet
		women (not having been on grindr) and cis gay people (not having been on Both grindr and lesbian
		tinder / lex) rarely appreciate. but i maintain simply witnessing a penis is generally not
		harmful lmao.
		<a href="https://twitter.com/JoyceCarolOates/status/1627049821470334977">joyce says it better</a
		></Footnote
	>
	<Footnote id="vulgar">vulgar marxists HATE this ONE SIMPLE TRICK!</Footnote>
	<Footnote id="disco">go play disco elysium</Footnote>
	<Footnote id="touch"
		><a
			href="https://web.archive.org/web/20180221104324/http://www.reinagossett.com/touch-one-another/"
			>Touch One Another, 2015</a
		></Footnote
	>
</div>

<style>
	.meme {
		max-height: 400px;
		max-width: 70vw;
	}

	.red {
		color: var(--red);
	}

	.green {
		color: var(--green);
	}

	.blue {
		color: var(--blue);
	}
</style>
