<script>
	import { onMount } from 'svelte';

	import RainbowLink from '$lib/RainbowLink.svelte';
	import ChainLink from '../lib/ChainLink.svelte';
	import Footnote from '../lib/footnote/Footnote.svelte';
	import SuperScript from '../lib/footnote/SuperScript.svelte';
	import footnoteInit from '../lib/footnote/footnoteInit';

	import horseweed from '../assets/images/horseweed.jpeg';
	import my_pretty from '../assets/images/my_pretty.jpeg';
	import slf from '../assets/images/stompme.png';
	import ariana from '../assets/images/ariana.jpg';
	import dicksize from '../assets/images/dicksize.png';

	onMount(() => {
		footnoteInit('a.footnote', 'a.bottom');
	});
</script>

<h1>grief on land</h1>
<h3>16 June 2023</h3>
<h6>note on originality</h6>
<p>
	there's an existent critique of many aspects of the white plant world that i am building on and
	engaging with here. exactly none of this is my original contribution, not least of which because
	if there's any knowledge that does not belong or originate with the indiviual, it's relationship
	to the (natural) world at large. but most of the critiques i read while writing this piece missed
	the mark for me in some way. this piece is an attempt to fill in those gaps. i'll do my best to
	provide a list of folks i'm thinking with and alongside, folks whose work i'm indebted to, at the
	end.
</p>
<h2>part I: loss</h2>

<p>
	i've recently gone back to freelancing / part-timing / desperately-cobbling-together land-based
	work. gardening, farming, landscaping, etc. i joked to one of my bosses the other day that i
	should be adding "mugwort murderer" and "precision mulch sweeper" to my resume, to give you a
	sense of the full miscellany of what i end up doing for pay.
</p>
<p>
	this form of work has been a mainstay and a fallback for me for about as long as i've had my
	current form, as long as i've been transitioning, as long as i've been moving away from my natal
	family and towards a different sort of home and family and way of life.
</p>
<p>
	i think i've always found this work sad, though the contents of that sadness have varied
	significantly. i started off when my current form was young and terrified; burned out and betrayed
	by a world i had dreamed of spending my life in, and unsure how i would survive beyond the next
	day, week, year. i knew very little about plants, but that was fine by the people I worked for;
	mostly, they needed someone to pull weeds out of their overgrown, poorly tended properties and
	didn't want to pay much. i needed a job i could pay rent on, and a flexible schedule that i could
	bail on if i had a bad disability day. so, it worked out. <SuperScript id="privilege" />
</p>
<h3>healing</h3>
<p>
	when i started this work, i would pull weeds for about 8 hours a day, listening to podcasts and
	music and trying to find the resources i needed to change who i was in the world. i was going
	through an intense healing process at the time, relearning how to be with other people and how to
	care for myself. in the moment healing felt like long, slow death. i was about 4 months on T, and
	my clients for the most part decided i was a cis guy, which was the first time I had passed
	consistently or even been read as GNC. <SuperScript id="gnc" /> i felt bonedead grief, ache in my chest,
	terror and anxiety, and all the other early transition symptoms that never quite go away but eventually
	are made banal -- become colorlessly humorous -- with time and love and knowledge. and through it all,
	i pulled those weeds, learning each one's name: mugwort, thistle, nettle, chickweed, purslane, creeping
	charlie. I went home and spent hours researching plants, learning (to my food-insecure, underinsured
	and sick delight and gratitude) that many of the plants I pulled were edible and medicinal.
</p>
<figure class="center-flex">
	<img src={horseweed} class="plant image" alt="horseweed" />
	<figcaption>a picture of horseweed i took on a plant identification app</figcaption>
</figure>
<p>
	i would walk to class and try to spend 5 seconds, 10 seconds just noticing what and who was around
	me. on the concrete sidewalk of montgomery avenue, listening to the regional rail line roar past a
	few dozen feet away, i would try to stretch my presence and my gratitude a little further, being
	in grief with the white pine on the corner, or a blooming flowerbed of yarrow, or a patch of
	concrete crack purslane. i'd go to lab, get on transit, confront a friend, make dinner alone, and
	try to maintain some smidge of that presence, some hairfine constancy to keep me. i experimented
	with the plants i met. i failed to make a white pine hydrosol (it was just water) with a downed
	bough, learned the hard way that mugwort gives me flashback-nightmares, took skullcap for acute
	anxiety nearly daily. eventually, it all worked, or close enough. the plants healed me, working
	with plants healed me, continues to heal me when i do it for work or for sustenance. but the work
	itself never stopped feeling full of grief.
</p>
<h2>part II : the aesthetic and the moral</h2>
<p>
	most of the plants that i work with directly as food and as medicine are pulled out of suburban
	garden beds for mostly aesthetic though purportedly moral reasons.
</p>
<p>
	as a sidebar, it is hard to over-emphasize how much the aesthetic (taste, desire, pleasure, ease)
	produces the moral in the american suburb. i've got more to say on that subject, but for now i'll
	constrain myself to commenting on how it affects suburban land management among liberal white
	people, who are the majority of the people I work for/with.
</p>
<p>
	the language used to instruct landscapers/gardeners is explicit in making aesthetic preferences
	(for nativity, for naturalness, for health, for a tasteful and safe amount of wildness) into a
	holy war against the state of things-as-they-are. i get instructed to "clean" a bed of mugwort,
	because it is such an "evil, invasive" plant that "wants to take over the world." i'm asked to
	remove "invasive" plants that "threaten the native landscape," "prolific" plants that "reproduce
	aggressively," and even regulate "abundance" in certain species "threatening endangered
	populations" of native plants. "Is that a <b>bad</b> plant?" people love to ask.
</p>
<p>
	As you hopefully have picked out, the language people use for common plants is famously xenophobic
	and eugenicist. If all this sounds straight from original Nazi propoganda, that's because it quite
	literally is. The Nazis had a native plant movement. In fact the first organic farming movement<SuperScript
		id="first"
	/>
	was led by Rudolf Steiner, an occultist and possible-Nazi-but-certain-racist-antisemite whose works
	were influential among the fascist right. The German Nazis and their offshoots and collaborators had
	all sorts of eco-feminist, queer masculinist, pagan, and cultural heritage programmes and philosophies.
	Much of what passes for Western/European modern paganism is borrowing from the research and aesthetics
	of this early reactionary fascism and occultism, not directly from some mythical-yet-easily-accessible-to-modern-subjects
	pre-capitalist literature. It's history I think many communists and jewish ppl are aware of, but the
	general green and woo left is woefully ignorant of. but that's again another story.
</p>
<p>
	The fetishism of ecological nativity ("native=good, non-native=bad") obscures and confuses the
	real crises facing the world as we know it. It creates a simple binary solution to the problem of
	ecosystem collapse: plants and animals from here are good, diasporic species are bad. Then, it
	attempts to provide a solution: nuke the diasporic species using whatever strategies you can. It's
	not the only obfuscating fetishism I want to discuss here, but it's one of the more garishly
	clothed.
</p>
<p>
	I want to make my way here through, among other things, the "problem" of the existence of
	diasporic plants. i want to move slowly, take a bit of a winding path, so bear with me if you
	will. i think a lot of what i want to convey in this piece is the feeling of working in the dirt,
	not a critique of specific behaviors. so come, wriggle around in the mulch with me for a bit.
</p>

<h3>a brief note on approach and influence</h3>
<p>
	a lot of the critiques of the white eco plant world (permaculture, biodynamic farming, white
	settler herbalists, etc) frame it as stealing indigenous knowledge<SuperScript id="definitions" />
	directly or indirectly and then turning around and profiting off it directly (by selling knowledge)
	or indirectly (by selling the products of that knowledge applied). this is a critique that i think
	is probably accurate in many ways, but it is not the critique i'm making here.
</p>
<p>
	i'm not making it here because it doesn't feel like the critique i can personally make well, as a
	white settler with no close ties to indigenous land stewards. while i fully believe that most of
	what passes for land stewardship and plant medicine knowledge on this continent continues to be
	learned from and/or taken forcibly from indigenous and African heritage people, i'm not situated
	well for litigating which knowledge was stolen from whom and how. that's like, numerous whole ass
	research projects, and generally people getting "who does this thing belong to" info wrong on the
	internet<SuperScript id="research" /> has had pretty terrible repercussions for indigenous communities
	and particularly indigenous land stewardship.<SuperScript id="nativeland" /> and besides -- i'm skeptical
	of the projects themselves, regardless of the source of parts of their knowledge, and i think it's
	probably a safe bet that the parts of the white plant world i am skeptical about +/ hostile to did
	not originate with indigenous knowledge systems, because to me they seem to be coming directly from
	the racist-imperial-scientific methodology complex i
	<i>am</i> quite well versed in.
</p>
<p>
	i'm also focusing mostly on plants, which is an artificial and stupid approach to this subject on
	a "let's write an essay about land" level, but is a side effect of "it's much easier to get paid
	to tend plants in private homes than it is to get paid to do literally any stewarding of
	animals/fungi/etc."
</p>
<h3>ignorance</h3>
<p>
	you'll notice in the previous section that i said people use eugenicist language for <i>common</i>
	plants, not <i>invasive</i> ones. that was intentional. many of the white suburbanites i do work
	for -- some of whom have years of experience in plant based work -- describe
	<i>any</i> plant that grows well enough or spreads quick enough as "invasive," even plants like poke
	and monarda and virginia creeper that are not only native to the region but usually regarded as ecologically
	important species.
</p>
<p>
	the message is clear: nativity is fragile, broken, in need of paternalist protection. if a plant
	is doing well or adapting to new situations under the conditions of capitalism, that means it is a
	threat to the <i>truly</i>
	native plants and ecosystems, which are always vulnerable and never able to fend for themselves. anything
	flourishing must be a threat to the naturalized order of things; nature itself must be produced in
	relation to its own (definitely real and not made up) established, prior, and stable order. and of
	course you've got to get the
	<i>true</i>
	native ecosystem the
	<i>right kind of help -- </i> white, educated help. never mind that many parks full of edible,
	medicinal, abundant plants are within spitting distance of working class neighborhoods
	experiencing structural abandonment and accumulation by dispossession who could very much use
	them. make sure to criminalize foraging. and then make sure the people tending your quaint,
	toothless impersonation of nativity are educated in the <i>right</i>
	way to wage war against the undesirables, and above all this means educated in
	<i>whiteness.</i>
</p>
<p>
	there's another message here too that i want to draw attention to. the plants that are desirable
	are plants that are <i>easy to control.</i> the plants most likely to get dubbed "native" (therefore
	morally upright) by my clients are plants like milkweed, sedum, tiarella -- things that have pretty
	foliage, pretty blooms, and stay right where you put them without spreading quickly. the plants that
	fall over (if they're not cut back by humans or grazed by critters), the plants that spread well by
	seed, the plants that send out runners to different parts of beds -- they pose a threat to human control
	and curation (not to mention building foundations and concrete paths etc) and are less beloved or even
	tolerated.
</p>
<h3>knowledge</h3>
<p>
	this season i'm working for and with people who do know their shit (unlike most of the clients
	i've worked for the longest). they know their shit much, much better than i do. i bullshat my way
	into horticulture work; they've mostly done it for years in this exact area, many have
	professional degrees and certifications.
</p>
<h4>and yet</h4>
<p>
	every time i work with or for a new set of people i get to learn each person's mythology
	surrounding nativity and ecology and morality. no two mythologies are alike, and most are somewhat
	incompatible in the details. unraveling each person's commitments and understanding, just like
	building any relational knowledgebase, takes time. because of the nature of the work (removing
	some plants and putting in others) it often feels like the mythology for each person is picked up
	plant-by-plant. "Do you keep this, or pull it out?" "What's your take on virginia creeper?"
</p>
<p>
	i'll use a couple cases of my own plant storybindings as an example of what this plant-by-plant,
	person-by-person mythology looks like.
</p>
<h3>mythologies</h3>
<h5>violets</h5>
<p>
	we leave them in if we can get away with it wherever i've worked with ecologically minded people;
	generally i've heard them referred to as native and important pollinator plants.
</p>
<p>
	in actuality there are many, many different violets, originating from most of the temperate parts
	of the earth. there are some species whose origin in europe vs n america has been under heavy
	debate (<i>viola rafinesquei</i>). others have been introduced to the eastern us from europe
	relatively recently, in the last half century (<i>viola epipsila</i>). there's also
	<i>viola riviniana</i>, which is sold by nurseries under the name <i>viola labradorica</i>; the
	former is originally from eurasia and africa, whereas the latter is originally from this
	continent. all of these species, it bears mentioning, Look Like Violets, and therefore are pretty
	hard to distinguish between unless you're looking real close and they're in bloom (generally only
	in spring). violets also hybridize extremely easily, meaning the distinctions between species
	<i>itself</i> enters into "professional botanist argument" territory.
</p>
<p>
	while i fucking love violets (so sweet! so sexy! we love a resilient demulcent bb!), the violets
	that grow here certainly aren't exclusively native to this part of the world, though I've mostly
	heard them spoken of as such.
</p>
<h5>strawbs</h5>
<p>there are many different plants called strawberry. a non-exhaustive list:</p>
<div class="container">
	<h6>garden strawberry (hybrid, fragaria x ananassa)</h6>
	<p>
		grown on farms and garden plots and the like. a hybrid (crossed for fruit size and flavor), so
		its seeds aren't true but its runners are. people love to say this one is european, which it is.
		that is to say, it was bred in brittany circa 1750 from a variety native to present-day chile (<i
			>fragaria chiloensis</i
		>) and a variety native to present day eastern US (<i>fragaria virginiana</i>), varieties that
		were presumably cultivated and bred by indigenous peoples for thousands of years before bein
		mashed together. <span class="white">white</span> flowers.
	</p>
	<h6>wild strawberry (fragaria virginiana) and wild strawberry (fragaria vesca)</h6>
	<p>
		strawberries from around here (so called eastern n. america) that have yummy fruits. <span
			class="white">white</span
		> flowers. mostly seen these growing where intentionally planted here in the mid atlantic, though
		my partner tells me they grow all around in wild parts of upstate ny.
	</p>
	<h6>barren strawberry (potentilla sterilis)</h6>
	<p>
		is not a real strawberry. originally from europe. not sure if it's around in the US actually,
		not sure if i've seen this one. does not have noticeable fruit, thus the name. <span
			class="white">white</span
		>
		flowers.
	</p>
	<h6>barren strawberry II (waldsteinia fragarioides)</h6>
	<p>
		is not a real strawberry. lacks runners. often planted ornamentally. originally from north
		america. <span class="yellow">yellow</span> flowers. named after some austrian guy, not walden pond
		as i originally thought. (if i were a plant and someone named me after walden pond id fuckin riot,
		tho some hapsburg soldier turned naturalist is not exactly better)
	</p>
	<h6>mock strawberry (potentilla indica)</h6>
	<p>
		is not a real strawberry. originally from south asia. not very tasty but still edible berry. <span
			class="yellow">yellow</span
		>
		flowers. grows around here really prolifically -- really likes a good stale mulched bed or lawn in
		my experience. originally brought here as a medicinal and ornamental.<SuperScript
			id="potentilla"
		/>
		famously a "lawn pest" according to the lawn industry.
	</p>
	<p>
		statement from the missouri dept of conservation<SuperScript id="missouri" />
		on this plant, emphasis mine:
	</p>
	<blockquote>
		A <i>line is crossed</i> when introduced plants move into wild areas and threaten to outcompete
		native plants, which are the <i>rightful heirs</i> of the territory they grow upon. This plant is
		invasive in many locations across America.
	</blockquote>
</div>
<p>
	so, there are things in the rose family, that vaguely look like strawberries, that are originally
	from all sorts of places, many of which crop up in lawns and yards and gardens around these parts,
	and all of which look fairly similar on first sight. <SuperScript id="cinquefoil" />
</p>
<p>
	on one of the teams I'm working on right now, volunteer plants we see that look like a strawberry
	are considered beneficial to pollinators/insects and left in beds when we find them and can get
	away with it. on another team i'm working on, we plant wild strawberries with white flowers, but
	pull all the mock strawberries with yellow flowers as they're considered invasive.
</p>
<p>
	these plants are hard to tell apart in many states of growth. even the most obvious difference,
	flower color, is not helpful in determining nativity; there are from-here strawbish things with
	yellow flowers, and diasporic strawbish things with white flowers. the cultivated/garden
	strawberry <i>itself</i> is a technology native to this continent, before its pit stop in europe.
</p>
<p>
	moreover, i couldn't really find any research on whether the mock strawberry i <b>think</b> i've
	been mostly seeing (<i>potentilla indica</i>) is harmful to anything other than the monoculture
	lawn aesthetic. nor can i find much information on how it integrates with local ecosystems, other
	than its frequent appearance on 'noxious pests' lists.
</p>
<p>
	i see it listed as "birds eat it but don't prefer it" on a couple lists, but I also see that it's
	theorized to have entered the state of Utah via the robin shit dispersal method. this doesn't
	match up. if robins will eat it and shit it out in quantities large enough to make researchers
	hypothesize that that was the <i>main</i> way it recently started cropping up in Utah, clearly
	robins are "preferring" it under current conditions.<SuperScript id="robinshit" />
</p>
<p>
	i see many places listing various diasporic potentilla species as "early colonizers of disturbed
	systems", which is code for "does really well on land that has been fucked by industry halfway to
	hell and where nothing else can grow," which is consistent with my experience of where I've seen
	it cropping up. But "does well on fucked land" is a distinct and different ecosystem function from
	"does really well in mostly undisturbed, less-industrially-fucked, established ecosystems and
	crowds the species there out."
</p>
<p>
	i also see many places saying various diasporic potentilla species are a threat to livestock; if a
	grazing area becomes dominated by the less/non-edible potentillas, livestock capacity and
	wellbeing is impacted.<SuperScript id="colonizer" /> it's my understanding that cows eating too much
	of less-edible species and making themselves sick is largely a side effect of fenced-in grazing areas
	where there's a finite quantity of plant matter available and so more of a less-edible plant means
	less of the more-edible ones, thus lowering the productivity of the land. unfenced cattle (cattle are,
	of course, not a native species) do not have as much of an issue, because they can simply range out
	further to get their nutritional needs met. but again, "makes industrial farmers unable to tend livestock
	for profit in enclosures" is a far cry from "damaging native ecosystems and/or biodiversity." and
	<i>potentilla indica</i>
	is not one of the species mentioned as dangerous to livestock anyway.
</p>
<p>
	so, I really couldn't find much actual specific information on the impact any potentilla had on
	wildlife or plant communities besides the suburban lawn or the enclosed cattle ecosystems, or
	potentially the american robin.
</p>
<h3>applied mythologies</h3>
<p>
	so you've heard my stories of violets and (many) strawbs. any other plant person would likely have
	another set of stories. ask two different plant people about a few different plants and you're
	likely to get differing information as to harm, benefit, nativity, desirability, best time to
	prune, etc. look it up online, you'll see even more information. all of it with intense moral
	stakes over being a "good" steward or tender of land, which of course are all tied up in
	aesthetics (<i>looking</i> like a good tender of land, tending land that <i>looks</i> well kept). most
	of this information is contradictory, often self-contradictory, even/especially when it's coming from
	invasion biologists and university ag departments and other professional plant people (who are supposedly
	the source of truth for "real/reliable" plant knowledge).
</p>
<p>
	i'd like to take a moment, step back from the actual specific plants themselves, and walk through
	what it takes to have a cultivated garden or stand of land look "well-kept" in a "native plants"
	or "permaculture" way, under current conditions.<SuperScript id="currentconditions" /> I'll be discussing
	this in the context of "amount of land one person could potentially own and want tended," whether that's
	a tiny rowhome front bed or dozens of acres in the suburbs or country.
</p>
<h4>nativity</h4>
<p>
	The concept of a plant being "native" to anywhere is not stable. In a settler colonial context,
	it's usually taken to mean "before white people arrived and started fucking shit up." But plant
	species migrate over time; native peoples have traded and bred plants intentionally across massive
	trade routes from the dawn of history to the present day; climate catastrophe has struck before
	and changed the ecosystem overnight. Even if you set an arbitrary date (say. . . 1492), and decide
	before <i>that</i> date plants living there were <i>native</i> and <i>after</i> they're
	<i>non native</i>, what about the plants that were in the process of moving into new areas at that
	point? How do you define "new" and "areas"? What about the plants that would have made their way
	over to new spots eventually due to the migration of other species, but were accelerated in their
	journeys by globalizing trade?
</p>
<p>
	Already we've got problems; determining ~true nativity~ is a fool's errand. But if you <i>do</i>
	manage to decide on a metric by which things are native or not, the question then becomes which species
	are "model" migrants and which ones are "harmful" migrants.
	<SuperScript id="migrants" /> The native plant movement generally desires the ecosystem that existed
	in whatever place before the changes associated with global, industrial capitalism-colonialism took
	place. Their rationality as to<i>why</i> these plants are desirable is generally that they comprise
	a whole ecosystem. Because these beings evolved together for thousands of years, they help stabilize
	the conditions for life on earth and mitigate some of the worst effects of industrial extraction.
</p>
<p>
	There's some rationale to this. If a plant has hung out in a desert for 3,000 years, it probably
	has some drought tolerance mechanisms figured out; a water-loving annual in someone's front garden
	bed does not.
</p>

<p>
	Aand there's also some problems with this theory. Namely: why are diasporic plants thriving in
	places where native plants are supposedly evolved perfectly for? There are many answers to this
	question that all boil down to <i>the growing conditions have changed.</i> Plants which are labeled
	"highly invasive" often do very well in areas where almost all other plants struggle to grow. And "areas
	where almost all other plants struggle to grow" describes increasing amounts of the landmass of the
	world. This land has soil full of heavy metals; there are exhaust fumes; the soil has been disturbed
	or tilled; garbage has been mixed in or dumped on top; there's contamination from various industrial
	processes, including heavy metals and herbicides and pesticides and debris; species that were in relationship
	to these plants no longer exist, and new species (including diseases) that thrive under the new conditions
	have grown up in their place; the n. american deer population explosion makes getting most plants established
	quite difficult without a deer fence +/ cages due to browsing (eating the plant); the heating of the
	earth; in other words, the massive ecosystem changes that have happened to the earth as a result of
	capitalism.
</p>
<figure class="center-flex">
	<img
		src={dicksize}
		alt="diagram with random native plants on the left and nonnative plants on the right, showing that native plants (supposedly) have root systems that go a lot deeper"
		class="image"
	/>
	<figcaption class="caption">
		as we all know, just as skull shape can identify race and therefore mark intelligence, so can
		root depth identify plants originally from wherever you currently are and therefore mark
		ecological value. from the national wildlife federation website
	</figcaption>
</figure>
<p>
	I'd like to quote an essay I read while writing this piece at length, because it fucks and says it
	better than I can. In "The Discord of Invasion Ecology," author Calyx is talking about the
	American Chestnut's tenure on this contintent:
</p>
<blockquote>
	<p>
		If we look at the pollen record for the post-glacial period starting from about 20,000 years
		ago, the trees that began to move into the northeast [US] and cover the landscape included Ash,
		Oak, Birch, and Ironwood arrived first. Maples moved in shortly thereafter, followed by Beech,
		and then Hickory at around 8,000-6,000 years ago. As the climate and habitat continued to
		change, the last major tree appeared, around 2,000 years ago: the American chestnut. The tree
		thrived and soon made up a substantial portion of the canopy. While some debate exists about how
		much of the population it made up (ranging from 3% to 25% on average, with some landscapes
		reaching upwards of 45% dominance (areas, I hypothesize, where indigenous populations stewarded
		their stands)), there is no debate about the profundity of the tree.
	</p>
	<p>...</p>
	<p>
		It is difficult to follow this summarization of the history of the American chestnut while
		ascribing to the strict definitions set out by invasion and conservation biologists without
		scratching your head. Under the modern definitions, imagine if a tree species moved from the
		south into our north eastern forests and spread so vigorously as to make up nearly 25% of tree
		populations of many forested regions. Would we not call it an “invasive species?” Well, it takes
		a long time for a species to move into an area and coevolve with the other species there in a
		way that is mutually beneficial (this may be true, but evidence is now demonstrating it may not
		always take as much time as we thought). So, how then is this different from any other
		aggressive non-native species we encounter today? If we give it enough time, who's to say [that
		species today] won’t naturalize, just at a different rate than say, dandelions? <SuperScript
			id="discordinvasion"
		/>
	</p>
</blockquote>
<p>
	Really you should just go <RainbowLink
		href="https://www.northernappalachiaschool.com/post/discord-of-invasion-ecology"
		>read the whole post.</RainbowLink
	> But what Calyx is getting at is that not only is non-native/native a false binary, the
	<i>desire to distinguish between the two itself</i> in terms of harm/help to ecosystem stability or
	biodiversity doesn't necessarily make sense historically, let alone on an ecological scale.
</p>
<p>
	Okay, so we're not sure which species are from here. Nor are we sure that those ("native") species
	will do well under the current conditions that the diasporic plants are thriving in. Nor do we
	really understand the long-scale implications of them being here. But! I want my gddm tree of
	heaven gone! and the lantern flies with it!
</p>
<div class="center-flex">
	<img
		src={my_pretty}
		alt="the wizard of oz witch with caption ill get you my ailanthus and your little spotted landternfly too"
		class="image"
	/>
</div>
<h4>so, what would it take to get them gone?</h4>
<p>
	Most of the plants that are thriving in impossibly damaged ecosystems are <i>tough</i>. The only
	ways to effectively remove diasporic species altogether and replace them with other, currently
	less prolific species are expending an incredible amount of manual labor for a very small amount
	of reward, using a ton of glyphosate (roundup), or using industrial tractors in an attempt to do a
	"scorched earth" strat and plant into freshly tilled soil. None of these, in my experience, are
	very practical or economically feasible for anything bigger than a large garden bed in the current
	economic reality. Let's take them one-by-one.
</p>
<h5>manually</h5>
<p>
	Manually removing things and putting something else in their place that has half a chance of
	success takes an <i>incredible</i> amount of labor and upkeep. Even in small garden beds on small properties
	(quarter acre or less), you're probably looking at weekly maintenance for the first season. Scaled
	up, for properties larger than an acre or so, you'd need a whole team of workers working part to full
	time during the growing season. For smaller organizations with more grassroots budgets, or for organizations
	such as landscaping businesses operating under market constraints, doing stuff purely via manual labor
	is largely financially unviable due to the amount of paid labor necessary.
</p>
<p>
	While many private individuals are willing to fund some part time work, fewer are willing/able to
	fund a full-time team of staff due to the amount of money and organizational overhead involved.
	There are certainly huge philanthropic grants +/ public money going to multi-million (billion?)
	dollar conservation projects that could afford to choose manual labor over other strats.
	<SuperScript id="doubt" /> But uhhhhh, philanthropy money and public money only come from one place
	under capitalism, and that's the exploitation of the earth and the species that live on it. Essentially
	decimating one part of the earth to put in a vanity project in another area. A vanity project that
	also conveniently serves as PR and coverup for the massive exploitation necessary to fund it, and serves
	to deflate activism against that exploitation.
	<SuperScript id="deflate" /> Not exactly a solution.<SuperScript id="prisonlabor" />
</p>
<h5>friendship ended with manual labor now glyphosate is my</h5>

<p>
	What about herbicides? It's a <i>hell</i> of a lot more feasible to mass kill unwanted plants with
	roundup (monsanto-branded glyphosate) and other herbicides than it is to manually pull them. What
	would take weeks of work for a large crew to do by hand can be done in a day or two using
	glyphosate. The problem, of course, is that roundup is bad for the ecosystems it's used to manage
	and the people who manage it alike. Herbicide companies are busy pumping out evidence that
	glyphosate is nothing to worry about. They're also busy funding the native plant industry,
	<i>because</i>
	one of the only ways to scalably introduce native plants is to nuke the diasporic species with glyphosate.
	Damages to soil health, pollinator and animal health, and laborers' health aside, unwanted plants are
	also developing resistance to glyphosate, requiring more and more production and application of an
	incredibly damaging-to-produce and damaging-to-apply susbtance. Not to mention that the damage to the
	broader ecosystem by production and application of herbicides makes the conditions even
	<i>more</i>
	hospitable to prolific diasporic plants.
</p>
<p>
	there's a certain irony in it all. when i started working on an organic farm full-time, it wasn't
	even out of a desire to escape capitalism,<SuperScript id="escape" /> it was out of a desire to learn
	how to grow food outside of industrial ag. <SuperScript id="collapse" /> what i <i>actually</i>
	learned was that small/organic/natural farms are just as reliant on industrialization, and especially
	the petrochemical industry, as conventional farms. they need cheap quick mulch (plastic and compostable
	plastic), seed trays (plastic), tractors (burn gas/diesel), hand tools (plastic&metal), rain gear (acrylic),
	greenhouse materials (plastic/vinyl), market displays (plastic bags for lettuce) etc etc. the pesticides
	that make organic farming for a surplus aka for market even possible (BT, spinosad, etc) are industrially
	produced. even soil testing is sent off to a lab. there's a reason it took to the late 20th century
	in the US specifically for organic/small farming to take off as financially viable,<SuperScript
		id="not"
	/> and it's because it's (shocker) just as reliant on the technologic advancements and beholden to
	the markets of capitalism as conventional ag. the only difference is the consumer class, as natural-grown
	food is almost universally a luxury good.
</p>
<p>
	this same bargain with industry appears in the natural landscaping world. people who would fight
	(okay, i mean i hope they would) if a factory making glyphosate were stationed down the street
	next to their water supply are happy to use it as consumers to create their little utopias.
	roundup, the Monsanto brand of glyphosate, is supposedly manufactured in just two factories in the
	US. one of them is in Luling, Louisiana, in the middle of what is called Cancer Alley due to the
	density of chemical plants in the corridor pumping out carcinogenics into the air/soil/water. most
	of the residents of the most polluted sections of cancer alley are black +/ poor people who can't
	afford to sell their houses and move away because nobody will buy a house built in a hazardous
	area. there are many new petrochemical plants being built in cancer alley as this piece is being
	written, despite massive organizing efforts by the people who live there to fight them. <SuperScript
		id="roundupstats"
	/>
</p>
<p>
	the main problem, of course, is still <i>scale</i>. more diasporic species removal = more need for
	roundup = more production of roundup = more areas that only hardy diasporic species can survive
	in. monsanto cracked this all the way back in the 90s when it started massively funding native
	plant conferences. the rest of the herbicide industry and conventional ag industry followed suit.<SuperScript
		id="funding"
	/>
</p>

<p>
	Regardless of the harm or lack thereof of roundup <b>application</b>, the harm of
	<b>producing</b> it continues to be felt.
</p>
<h5>yea okay that doesn't sound great.....how bout we rip it all out</h5>
<p>
	Okay, so what about razed earth? Cut everything down, pull em out with a massive tractor, till the
	whole zone and start anew. This is a more expensive option than roundup but probably less
	expensive than manual labor; you've gotta rent the equipment but it's a hell of a lot quicker to
	till an acre than it is to manually weed it. probably you could do something bonkers and rig your
	truck up to remove stumps or something cool like that idk. Even if you find a sexy hack, the
	problem with this solution is that <i>so-called invasives thrive in disturbed soil</i>. As with
	roundup, by razing everything to the earth and then zhushing it all around for good measure, you
	are essentially creating the perfect conditions for plants that thrive in industrial conditions,
	not plants that thrive(d) under noncapitalist conditions. Your plot may look delightful the first
	day after planting, but is unlikely to remain that way without significant amounts of manual labor
	+/ herbicide application.
</p>
<h4>dont ask me how but it's been done</h4>
<p>
	Alright fine. So you managed to get some plants established via one of the aforementioned methods.
	Now what?
</p>
<p>
	It's time to meet the neighbors, of course! Because the property line is a human concept that seed
	dispersal and root systems don't respect, you're looking at a <i>ton</i> of upkeep even if you
	exhaust the seedbank and rhizomes of the property you're on (which will certainly take a fucking
	while.) <i>Heaven</i> forbid there's a fenceline; there's a little set of plants I like to call "the
	fence ecosystem" that will be an eternal timesink. It's worth noting that most seeded meadows and other
	wilder plantings kinda look like shit for the first little while they're coming in; if the landowner
	doesn't fire you about this, the neighbors might not be too happy. Especially if your seeds start making
	their way over to their pristinely mulched beds. But even if you've got land galore and chill neighbors,
	you'll definitely meet the deer that are so very grateful for their new snacks, and the birds distributing
	diasporic plant seeds right back into your beautiful new beds, and the paper mulberry and ailanthus
	trees your neighbor chopped down last week and swore they fckin killed for sure this time (and did
	not).
</p>
<p>
	And of course -- unless you want to start anew, your options for diasporic species control are now
	manual labor or selective roundup. If the neighbor's mugwort stand or phragmites stand or heAven
	forbid goutweed (perish the thought!) starts coming over your way, you're looking at a ton of
	fidgety weeding +/ roundup application to keep it at bay.
</p>
<h4>the "problem" is ongoing, too</h4>
<p>
	Worth noting that species are becoming diasporic and cropping up on this continent all the time;
	it didn't end in 1990 or whatever year "we" supposedly discovered the <strike
		>pristine purity and beauty</strike
	> moral importance of native species. Diasporic species got here and continue to get here a few different
	ways. Either they were planted for ornamental/medicinal/desirable properties by humans; they were brought
	here accidentally by humans as seeds/root fragments via international trade (ship/train/boat/plane);
	other species like birds brought them here as a result of changes in population/migration; or the government
	introduced them in an attempt to control issues (eg erosion) or other diasporic species. none of the
	aforementioned methods of migration have stopped or slowed; new species will continue cropping up and
	presenting unique challenges to cultivated and wild spaces.
</p>
<h4>so</h4>
<p>
	If all this sounds like a really fantastic model for ensuring job security and client retention,
	you've figured out how native landscaping operates; it's a lot of billable work to try and
	establish these sorts of plantings. Perhaps contrary to the impression I'm giving here, it's not
	that creating these plant communities is <i>impossible</i>. It's very doable; it just requires the
	input of a significant amount of raw inputs (plugs, seeds, soil additives) and a heavy amount of
	labor to keep intact. it's a strat that reaches its limit in the suburban meadow in terms of
	practicality.
</p>
<p>
	and that's the thing, right? it's not scalable. if the suburban meadow is about as grand of a
	scheme as can be reasonably executed with these tools, it's not really a viable strategy in terms
	of ecological change. putting enough of the land in the US into cultivation to have an actual
	impact on the proliferation of diasporic species would probably require the labor and efforts of a
	significant portion of the population. it goes w/out saying capitalism can't sustain that in the
	US because it does not produce value (money). without an actual impact, it's essentially a visual
	deflection, a comforting sleight of hand. look here, not there. look at this beautiful "native"
	pollinator garden, not at the people tending it who can barely afford to eat. look at this little
	wetland rain garden that's helping with drainage and habitat, not at the ghost swamps<SuperScript
		id="ghosts"
	/>
	surrounding the factory where the glyphosate gets produced.
</p>
<h3>
	so after all this. why do we even want them gone? why are people, including/specifically left
	people, fighting this hard to try and turn back the natural world's response to global capitalism?
</h3>
<p>
	the easy answer, i think, has already been given. "we" want them gone as a byproduct of the
	interests of big ag and industry, managed through the state and university research depts, as the
	impacts of many diasporic plants to industrial ag can be ruinous. "we" want them gone as a result
	of the interests of herbicide and pesticide industries, which have poured much of the funding into
	native plant conferences and invasion biology research since its beginnings in the 90s. look here,
	not there. eradicate this plant, not the conditions of its being there in the first place.
</p>
<h4>case study time: the spotted lantern fly</h4>
<p>
	the above explanation isn't where i'm landing, to be clear. but i think it's part of the answer,
	so i'm going to slow down a bit to make the stakes a little more explicit.
</p>
<p>
	the spotted lantern fly is a planthopper indigenous to parts of eastern asia (china, vietnam).
	they started showing up in the area i currently live in summer of 2020, and though i was not here
	at the time, i heard it was the talk of the town that year. there are wild pictures of them
	blanketing trees, porches covered in them, etc etc from around this time.
</p>
<p>
	they feed pretty indiscriminantly on woody host plants, sucking out juices (which can be harmful
	to the host plant) and excreting honeydew, which can cause sooty mold (also potentially harmful to
	the host plant). because the slf is not a picky eater, having a significant number of them
	thriving in a small area poses a risk to industrialized agriculture (especially vineyards) and, of
	course, ornamental plants. sooty moldy plants aren't a good look.
</p>
<p>
	the PA state department has responded accordingly to these threats. here's their website on the
	SLF:
</p>
<blockquote>
	<p>
		The Spotted Lanternfly or SLF, Lycorma delicatula (White), is an invasive planthopper native to
		Asia first discovered in PA in Berks County in 2014.
	</p>
	<p>
		SLF feeds on sap from a myriad of plants but has a strong preference for plants important to
		PA's economy including grapevines, maples, black walnut, birch and willow. SLF's feeding damage
		stresses plants which can decrease their health and in some cases cause death.
	</p>
	<p><b>It's not just our plants at risk, it's our economy.</b></p>
	<p>
		The SLF can impact the viticulture (grape), fruit tree, plant nursery and timber industries,
		which contribute billions of dollars each year to PA's economy. A 2019 economic impact study
		estimates that, uncontrolled, this insect could cost the state $324 million annually and more
		than 2,800 jobs.
	</p>
	<p>...</p>
	<p>Report SLF sightings: <b>1-888-4BAD-FLY</b><SuperScript id="padept" /></p>
</blockquote>
<p>
	cool haha. so that's pretty explicit. not much mention at all even of native plant communities,
	except insofar as they form a part of pa's vital extraction industries and agriculture.
</p>
<p>
	it's also like, super not true that they have "a strong preference for plants important to PA's
	economy" lol. they really like ailanthus or tree of heaven as a host plant, which is also a
	diasporic species often regarded as a pest, and they feed pretty widely on other species as well.
	it would be shocking if any animal had a preference for like, solely plants of economic worth?
	anyway. so that's the pa state department takes
</p>
<p>here's penn state (farm) extension's take:</p>
<blockquote>
	If not contained, spotted lanternfly potentially could drain Pennsylvania’s economy of at least
	$324 million annually, according to a study carried out by economists at Penn State. The spotted
	lanternfly uses its piercing-sucking mouthpart to feed on sap from over 70 different plant
	species. It has a strong preference for economically important plants including grapevines, maple
	trees, black walnut, birch, willow, and other trees. The feeding damage significantly stresses the
	plants which can lead to decreased health and potentially death. As SLF feeds, the insect excretes
	honeydew (a sugary substance) which can attract bees, wasps, and other insects. The honeydew also
	builds up and promotes the growth for sooty mold (fungi), which can cover the plant, forest
	understories, patio furniture, cars, and anything else found below SLF feeding.<SuperScript
		id="penn"
	/>
</blockquote>
<p>
	guess we know exactly where the state dept got its information and phrasing. again, no mention of
	ecological impact and a heavy focus on the impacts to industry and leisure (not the patio
	furniture!). also, this study? on planthoppers? was done by the <i>economists?</i>
</p>
<div class="center-flex">
	<img
		src={ariana}
		alt="meme 3 pixel wide jpg of ariana grandes face w text 'rlly' on top"
		class="image"
	/>
</div>
<p>
	as a result of these very noticeable new bugs combined with the propoganda put out by the
	government & university ag depts and amplified by local news,<SuperScript id="bloodthirsty" /> there's
	been a relatively widespread understanding that these bugs are "bad" and should be killed on sight.
	here's a collage i made of a bunch of stickers i found on the internet (mostly on etsy)
</p>
<div class="center-flex">
	<img
		src={slf}
		class="image"
		alt="collage of stickers saying things such as 'kill me' and 'see it stomp it' and 'die you beautiful bitch' superimposed on illustrations of spotted lantern flies"
	/>
</div>
<p>yeah.</p>
<p>
	this isn't to like demonize people stomping on SLFs lol. ive stomped em too. just....yeah. i think
	(white) people see things that someone at a university put out saying "this is how you save the
	planet" and are like "cool I'm going to take that at face value and produce incredibly kitschy
	commercial art about it that i sell for a profit, about how much we should be trying to mass kill
	this species of bug specifically because it ain't from around here and it's threatening my patio
	furniture and my local wine, in ways kinda resembling the way people make kitcschy commerical art
	about <b>people</b> who aren't from around here that they feel are threatening their local-wine-and-patio-furniture
	way of life." and that's perhaps not great
</p>
<p>
	ANYWAY. inflamatory anti-wine-mom sentiments aside. . . it's three years later, and while i still
	see SLFs<SuperScript id="wellactually" />around, I don't see them in nearly the quantities I did
	in 2021 when I moved up here -- which was significantly less dramatic than 2020 already. the
	hypotheses i've seen as to why they've been so much less prolific in this area are
</p>
<ol>
	<li>
		that they've got more natural predators, or rather natural predators have figured out they're
		good eating<SuperScript id="predators" />
	</li>
	<li>
		there's a local soil bacteria that is possibly toxic to them,<SuperScript id="soilbac" /> and/or
	</li>
	<li>
		that they're a bit of a traveling species--- in one area one year, off to the next the year
		after.
	</li>
</ol>

<p>
	either way -- this is <i>so much change</i> in an ecosystem in so little time. within 5yrs they arrived
	en masse and then the population leveled out. and while they've decreased in southeastern pa, they're
	being seen in new places every year. the change is ongoing.
</p>
<p>
	there's massive evidence that they pose threat to commercial industry. but how could you <i
		>possibly</i
	> figure out ecosystem impact in as short a time as 5yrs?
</p>
<p>
	the campaigns against SLF are self-consciously posing themselves as specifically a war to save
	industry and commercial agriculture. but the discourse i've seen anecdotally amongst green libs
	and lefts has been with the language "invasive species" and "damage to native ecosystems." this
	is, i think, how this generally works. research gets funded for economists to throw a fuckin fit
	about xyz diasporic species' threat to $$$. the ag depts and state depts go cwazy with BAD BUG
	propoganda to try to mitigate this threat, using pre-existing cultural narratives about the "evil"
	of invasive species being impact on "native ecosystems" to do the work of "why is this bad"
	despite having no such proof. and then people uptake this as the truth of the matter and backfill
	their own reasoning and assumptions about why something is "bad" if it's been labeled "invasive."
</p>
<h4>so that's one answer. and it's compelling.</h4>
<p>
	but the answer that it's ~all a big ag conspiracy~ doesn't satisfy me, not fully. it's partly
	correct; i doubt native restoration would be as big of a thing particularly in the academic world<SuperScript
		id="uwu"
	/>
	without glyphosate and without monsanto pumping massive amounts of money into both research and propaganda
	regarding native species restoration. but white plant people are like, famously libertarians? they
	like, really love a conspiracy theory? particularly if big ag and big industry and the government are
	conspiring against ~nature~?
</p>
<p>
	the demographics are wrong for the above explanation to be the entire picture, the psychology is
	off for the target demographic buying what big ag is selling hook line and sinker. so here's my
	preliminary thoughts on why the above can be true and <i>still</i> white environmental types often
	buy into the importance of mass killing diasporic species.
</p>
<h3>control, ignorance, knowledge, suffering</h3>
<h4>ignorance</h4>
<h5>it's enforced</h5>
<p>
	most white people have no clue what the hell well tended land looks like. i sure as hell don't,
	and i do this shit for a living. i've seen <i>cultivated</i>
	land, i've seen pristine gardens and highly productive farms, but that's different from ecologically
	tended land. the remaining land i've seen has been tended by the national or state park service. national/state
	parks exist because the government forcibly evacuated these areas of indigenous people and people in
	general so they could be used for mostly:
</p>
<ul>
	<li>white leisure (this first and foremost)</li>
	<li>
		fun little experiments with controlling diasporic species with other diasporic species that end
		up wreaking <i>more</i>
		economic havoc/quick changes to ecosystems
	</li>
	<li>
		managing fire-dependent ecosystems so poorly that half the west now burns down each summer;
	</li>
	<li>etc etc</li>
</ul>
<p>
	<i>we have no clue what we're doing.</i> and that's not a personal failure, it's enforced economically.
</p>
<h5>economically</h5>
<p>
	in late capitalist countries, time outdoors is far and wide either a luxury or a part of work.
	there's not really a lifeway in existence in the US which involves spending a lot of time building
	relationships with the natural world outside either an agenda (to make a living) or a marked
	non-agenda (this time is leisure).
</p>
<p>
	as work it is usually very low paid and hazardous. even my work at a "high end" gardening business
	is paid significantly below cost-of-living and seasonally, forcing most of its employees to go
	into living expenses debt for two months in order to stay employed for the rest of the year. and
	we're the labor aristocracy of the plant world! my guess would be that the vast majority of people
	who work outdoors / with plants in the US are undocumented and/or paid criminally low wages.<SuperScript
		id="criminally"
	/> ag and seasonal workers in the US are excluded from most labor protections including overtime and
	minimum wage law due to those industries being predominantly Black at the passage of the original Farm
	Bill and National Labor Relations Act of 1935, which ensures that the average working conditions are
	incredibly exploitative and the opportunities for organizing slim.
</p>
<p>
	in terms of jobs on the more ecological side versus commercial crop production, there are people
	working in landscaping/farming/nonprofits/other non-higher-ed economies, whose knowledge comes
	mostly from the internet and hearsay. the plant stories i mention, the mythologies, they get
	handed down geneologically just like other belief systems. I've picked up my opinions mostly from
	working under and alongside people and either taking them at their word or doing my own research
	-- mostly based on how much i liked their politics and trusted their knowledge, lol. this essay so
	far has largely been focusing on the limits and shortfalls of this sort of knowledgemaking in the
	industry. it's not deep knowledge, and most of it is picked up as a side effect of trying to make
	a profit or get the next grant.
</p>
<p>
	the formal plant world in the academies and institutions, on the other hand, is rife with all the
	usual problems of bourgeois science: mistaking the symptom for the disease, inability to see
	beyond a very short time span due to the practicalities of research, funding by extractive
	industries, abysmal literacy regarding social reality, and often general ignorance of actually
	tending plants (the job is research, not spending time tending plants).<SuperScript
		id="braiding"
	/> the big lists of INVASIVE PLANTS that federal and state governments list are driven by concern for
	industry (crops, livestock, drainage and pests in cities), not large scale ecosystem knowledge, as
	is the funding for natural sciences in general. there is a reason the war against diasporic species
	is framed as a war, framed as a matter of national security, and that's because the National Invasive
	Species Council is part of the
	<i>department of the interior.</i> the exact department tasked with the genocide of native peoples
	over the past couple centuries. none of this is a mistake.
</p>
<p>
	and then there's leisure. in terms of significant non-work time spent outdoors, i suppose there's
	the independently wealthy eccentrist or retired permaculture types. but even they have to hire
	people if they want to scale at all.<SuperScript id="ideological" />
	there's herbalists, and indigenous communities that have managed to retain connection and relationship
	to land and lifeways. but you see what i mean-- they're exceptions to the general rule of alienation
	from surrounding ecosystems. <SuperScript id="alienation" />
</p>
<p>
	it also bears mentioning that the natural world is largely inaccessible even if you
	<i>do</i> have the leisure time. what's not enclosed in private property is generally public parks
	where you're encouraged to "leave no trace," aka "build no relationships and do not see yourself as
	part of the ecosystem." if they allow camping, it's generally with a 10-30 day time limit so there's
	no risk of people being able to legally find a semi/permanent place to squat. even if you own half
	a forest, you don't own the forest across the street. you can trespass relatively freely if you're
	a white hunter with the time and skills and inclination to do so, but that's less of an option for
	most other people.
</p>
<p>
	the basis for a real and widespread knowledge, a grounded and relational knowledge, of the natural
	world we are a part of, and changing and being changed by every moment, does not really exist in
	the US right now for most people. the arrogance and righteousness of the white plant world is a
	symptom of this, not its cause.
</p>
<h4>knowledge</h4>
<h5>it's just not possible to obtain!</h5>
<p>
	i'm a physics school dropout so take all this with a heavy dose of talking-out-of-ass about
	field-i'm-not-actually-in. but it seems to me that we do not, in fact, have many sciencey tools at
	our disposal to determine long-scale, large-scale ecological impact of diasporic species. we have
	endless data about what's causing the life-on-earth crisis (capitalism) and what its effects are
	(massive ecological collapse of intact human, plant, critter communities) and what the risks are
	(annhilation of life on earth). But I don't know how the scientific method -- whose main tools are
	fucking around, finding out, and seeing if the same results occur from fucking around and finding
	out a few more times -- could <i>possibly</i>
	determine the longrange effects of plants and species who have only been on this continent since the
	1990s, 1890s, 1790s, <i>especially</i> when so many other drastic changes have happened to the ecosystems
	in that time.
</p>
<p>
	the world of what gets called western knowledge or science is very comfortable with
	categorization. it's even somewhat comfortable with ignorance; today's <b>~idk~</b> is tomorrow's grant
	proposal is next year's publication. but it is very, very bad with the unknowable.
</p>
<p>
	& there is simply no knowing what all this looks like in the long term, on an ecological scale.
	and that makes categorizing the behavior of other beings as "bad" or "good", "desirable" or
	"undesirable", "healing" or "ruining," simply impossible.
</p>
<h4>control</h4>
<h2>WORK ON ME</h2>
<p>
	the white "knowledge" response to widespread and un"solveable" ignorance is not to stay humble. it
	is to try and maintain control.
</p>
<p>it's painful to witness change.</p>

<h4>suffering, or the protestant ethic she strike again</h4>
<p>
	the last note i want to hit here is a delicate one. there's a relationship to suffering and hard
	work that i think plays a part here, though it's not quite as straightforward as the other
	sentiments.
</p>
<p>
	first, there's a commitment to suffering, doing things that seem hard, and defeatism in the us
	left in general. the left response to "trying to change xyz didn't work" is, IME, often "fucking
	try harder then," not "maybe it wasn't the right moment for change xyz to occur, and we should
	wait and watch." the list of things-that-are-wrong is unimaginably long and urgent, and culturally
	there's a demand to <i>look like you're doing something.</i><SuperScript id="pet" />
</p>
<p>
	secondly, i think people who go into plant work <i>like doing work</i> for the most part. compared
	to many desk jobs in the us, working with plants generally requires a ton of hard work. there are
	people who really like doing a little task and seeing the impact of that little task, and there
	are also people who can stare into space or browse amazon for 8 hours happily. i am part of the
	former group quite distinctly, and i think this is true of many/most people who work with plants
	for a living by choice.<SuperScript id="coercion" />
</p>
<p>
	thirdly, you can make a living for yourself doing any sort of work as long as you convince someone
	to pay you. you can't make a living <i>not</i> doing any work whatsoever for the most part, at least
	not under a completely dismantled welfare state. nobody pays for no work to occur. there's a real sense
	that there's a climate crisis on the left, and a desire for people to be doing full-time work that
	addresses this, and extractive industries ready to improve their PR by funding that work that supposedly
	addresses the crisis but really does no such thing.
</p>
<p>
	all of this combines i think to make people predisposed to think that "being good to the earth"
	involves a shit ton of very difficult manual labor with very little payoff. the desire is to
	immediately intervene in ways that are absolutely destined to fail; you get the twofold
	psychosocial benefit of having done something about it, while not having succeeded, because
	success of course is a symptom of having sold out to capital. the idea that we might want to wait
	and see how ecosystems respond to massive climate change --- might want to look at natural systems
	and figure out how to gently shape them rather than doing bloody fucking battle with their
	fundamental workings --- is not attractive under this worldview. there's a layer of the protestant
	ethic here that's wildly out of context and yet perfectly in context. there's some irony here that
	a movement that is supposedly looking to dismantle capitalism for the sake of life on earth has
	doubled down on the very spirit of industriousness that was famously produced with capitalism
	itself.
</p>
<h2>pt III: grief</h2>
<p>
	when i started writing this piece, i was feeling angry and prickly. there are so many opinions on
	plants I find moderately xenophobic at best and genocidally eugenicist at worst, as you have
	hopefully picked up. i encounter many of these opinions daily, with great emotion and moral
	anxiety underneath them. but after spending more time with this piece, mostly I feel saddened.
</p>

<p>
	most days in the week I get out of bed painfully early and pull out "undesirable" plants and put
	desirable ones in their place. the categories of desire shift with time and with the client and
	with the working crew. we all want to be doing whatever we can for this world we're in. and yet,
	the tools we have for determining what that is, let alone sticking to that knowledge, are <i
		>so fucking scarce</i
	>.
</p>
<p>
	and i feel so much grief and twistedness at this reality. i feel so much appreciation for the
	beautiful, diseased, disordered, damaged, thriving, resourceful, full and surprising life i am
	able to witness. as i labor on wealthy white people's private estates for barely enough money to
	feed myself.
</p>
<h3>buffy soundtrack where do we go from here</h3>
<p>
	I think something I'm worried about in this piece is coming off as a non-interventionist. As the
	sort of person who either says "nature is self-healing, so we shouldn't intervene," or who says
	"well, we can't know everything, so the best thing is to do nothing at all." if there is one
	takeaway i had from reading capital volume one lol, it is that we are a part of the natural world.
	capitalism is a natural phenomenon. it's a natural system, currently on the boom part of its boom
	bust curve. the ways we can fight it, too, are natural, part of the natural world. and those
	fights <i>generally aren't won</i> in separating ourselves from our communities and contexts and
	trying to make it all out from a safe distance. all that you touch you change. all that you change
	changes you. there is no safe "outside" from which to watch the climate catastrophe occur. we are
	part of the great open wound of industrialization. and we will be part of its self-healing.<SuperScript
		id="death"
	/>
</p>

<p>
	i was first put onto skepticism about the native plant industry by the plant medicine world, as i
	think many people have been. plant medicine people have a natural, some might say a structural,
	interest in finding out which plant species are so abundant that large harvests are safe for the
	ecosystem, and then figuring out what all the little uses for those plants are.<SuperScript
		id="herbworld"
	/>compared to biologists or landscapers or farmers, plant medicine people generally appreciate
	"weeds" and other unwanted plants for each's unique and current use to humans, rather than
	primarily their impacts on crops or livestock or aesthetics-morality or even ecology. because
	like, without abundant stands of plants, there IS no plant medicine people. there's a vested
	interest in keeping those mugwort and japanese knotweed stands around for a bit. and because of
	this, there's a general skepticism of saying xyz plant is "bad" or "invasive" versus figuring out
	why it's growing somewhere and how it can be of medicine to the life it grows around, and vice
	versa.
</p>
<p>
	this perspective among plant people, a perspective whose insight has been really central to the
	writing of this piece, generally gets credited as part of traditional indigenous knowledgeways. i
	want to be clear about that the roots of this knowledge system, both in my own work and in the
	world at large, are found in traditional indigenous / ecologically integrated cultures, not the
	white, industrialized, professional plant world. but i also wanna be clear that everything i'm
	wondering about in the rest of this piece is just that -- my own uninformed wonderings, from the
	perspective of a person involved in the white, professionalized, industrialized plant world. what
	follows is things <i>i'm</i>
	wondering about as i do this work day to day, not information that should be relied upon blindly. i
	particularly don't want to make out my halfassed thoughts on all this to be coming from any storied
	indigenous tradition rather than me, and my well-storied ass.
</p>
<h4>curiousity and humility</h4>
<p>
	there's so much that plants can tell you if you know how to listen. i used to see this talked
	about by plant medicine people and my sorta-autistic ass thought they meant like, they were
	literally getting voices in their head or some such. and i've had experiences sorta like that, and
	i think some people do communicate with plants in this way. but there's like, tons of more
	concrete ways plants can communicate if you have the skills to listen.
</p>
<p>
	certain plants, such as pinellia, really like cultivated spaces. they're likely to crop up in
	horticultural beds that are well-tended, and their appearance tells you a plot has been getting
	regular attention. other plants, like mugwort, thrive in soil that has been disturbed, then sorta
	ignored for years; i'll often see stands of mugwort alongside the paths in public parks, for
	instance. there's japanese knotweed, which thrives more and more happily the harder you try to
	kill it to an almost alarming extent (aspirational). yellow dock really likes it kinda gross; i've
	seen dock looking especially abundant & happy in compost piles, where there's plenty of decaying
	matter about. blue vervain, a plant whose main indication for use as medicine in humans is "a
	person who is uptight as shit," often,, kinda looks like shit in the wild; its mildewey
	half-bloomed state is always a reminder to me to not be so hard on myself, not be so uptight about
	how i am in the world.
</p>
<p>
	above are some personal stories of plants, a strategy of close reading if you will. plants can
	also carry hints as to plot, themes, the trajectory of a story.
</p>

<p>
	just as the great mix of ethnicities present in the US traces the story of wars and conflict both
	local to this settler colony and global to its proxy wars and financial imperialism: so too might
	the presence of massive stands of phragmites and garlic mustard be used to tell us the histories
	of the land we're on, and signal the qualities and quantities of changes elsewhere. i'm thinking
	about <i>potentilla indica</i> entering the state of Utah via robin shit, thinking about the SLF
	beginning to be eaten by predators after only a year or so of presence in this part of the world.
	thinking about SLF that've been feeding on the bitter ailanthus trees being eaten as well,
	wondering what that says about the availability of food for birds and bugs. perhaps the birds have
	developed a taste for bitterness? perhaps they're excited by the new flavors and forms of life
	around them? perhaps they, too, have been circulating the KILL KILL KILL stickers around their
	neighborhoods?<SuperScript id="philly" />
</p>
<p>
	if a heavy thistle population is often an indicator of poorly tended or abandoned farmland, so too
	might the presence of abundant contaminated-soil-tolerant species indicate that an area's soil has
	been contaminated with heavy metals. the same plants that thrive in contaminated soil are often
	soil remediators -- through phytostabilization and phytoextraction, they can slowly work to
	contain or remove contaminants in the soil they are found in. thick thistle monocultures often
	simply disappear after a few seasons of more attentive farming; i wonder if the same would be true
	for plants like sunchoke and goldenrod.
</p>
<p>
	lyme disease is on the rise in n. america, a problem which has its roots in the explosion of the
	tick population; which itself is a symptom of the explosion of the deer population; which is
	itself a symptom of the decline of large predators on the continent. over the past couple
	centuries, as these conditions for prolific lyme were coming into their current shape, japanese
	knotweed has become a common sight on the edges of wetlands and in wooded areas over much of the
	us. knotweed is many useful things to many species,<SuperScript id="cockedtail" /> but it has a particular
	affinity for helping treat lyme disease, an affinity even conventional medicine has taken note of.
	there's a certain irony and beauty in this symmetry that several herb people i read have noted. it
	follows the classic plant medicine adage of the cure being found by the disease. often this phrase
	refers to pairs of plants like poison ivy and jewelweed (whose juices help neutralize urushiol), or
	stinging nettle and plantain/dock (whose juices help soothe nettle stings). it's almost a dialectic
	relationship here between disease, medicine, and cure.
</p>

<!-- <h1>content farm</h1>
<h2>~</h2> -->

<!-- <p> 
	in light of the dismal state of popular ecological knowledge, i wanna slow down and talk about
	what large scale ecosystem knowledge even <i>is</i>.
</p> -->
<!-- <p>
	(shame on you! you say. i, a probably white plant person, am a land steward on a public
	meadow/park/ecological reserve, not a private estate! and to that i say: tell me who it's
	literally named after and who the top 5 donors are and explain how that is not, in fact, a little
	embroidery over top of the same reality. and if you work directly for the state you're a glorified
	tree cop which is fine but don't @ me!)
</p> -->
<!-- Knowingly or unknowingly, gardeners participate in this process. Through their lifeways, all organisms
modify their environment and participate in the creation of the landscapes in which they live. Corals
build reefs, plants create soil, and animals transport seeds & nutrients long distances. Part of the
lifeways of bluejays & squirrels is to plant acorns far from the oak, helping the forest migrate or heal
burned or cleared areas. Our own lifeways of traveling about and admiring beauty cause us to gather useful
and beautiful plants to grow around our homes, initiating the process of diversification. Many primates
are key seed dispersal vectors in tropical ecosystems, and this is part of our evolutionary heritage. 1994 https://www.dtheo.org/NativesVs.Exotics.htm -->
<h2>~</h2>
<div class="footnote">
	<Footnote id="privilege"
		>it worked out ofc because of my whiteness and gender as well. at the time, i thought of my
		position as quite privileged -- being seen as just some college dude doing college dude work. in
		retrospect being paid $10/hr to be a joint therapist and weed puller in very hot weather was not
		under any rubric "privilege." but the ability to make that work financially through student loan
		debt was, which eventually allowed for me to get jobs in this field that pay slightly closer to
		living wage.</Footnote
	>
	<Footnote id="gnc"
		>i was a high femme child and land based work is approximately the only time i butch it up</Footnote
	>
	<Footnote id="first">in modernity, by white people</Footnote>
	<Footnote id="definitions"
		>since it's relevant and i don't want ppl to get it twisted, the working definition of
		indigeneity i'm using is "peoples who have a particular and persecuted
		cultural/political/social/national relationship to land and (settler) colonial empire," not
		"people who have lived in x area for y amount of time."</Footnote
	>
	<Footnote id="research"
		>usually these sorts of projects get it wrong by basing their own research on colonial records,
		and do so because those are easily accessible to white people with no meaningful ties to
		indigenous communities and knowledge systems. the irony here speaks for itself</Footnote
	>
	<Footnote id="nativeland">
		A good example is the native land map <ChainLink
			href="https://native-land.ca/"
			target="blank"
			rel="noreferrer"
		/> -- when you open it up it even has a disclaimer that
		<blockquote>
			<p>
				This map does not represent or intend to represent official or legal boundaries of any
				Indigenous nations. To learn about definitive boundaries, contact the nations in question.
			</p>
			<p>
				Also, this map is not perfect -- it is a work in progress with tons of contributions from
				the community. Please send us fixes if you find errors.
			</p>
		</blockquote>

		but as I understand it, it's still been the seed of some misunderstandings by people who want to
		give reparations, in land and otherwise, but decide the way to go about that is to type their
		zip code into the native land map and go "well these are the only people i owe reparations to
		then." to be clear this is not criticism of the folks running the native land map, but rather a
		cautionary tale about putting information out about indigenous cultures & histories if you don't
		know what the fuck you're talking about because people can end up echoing/amplifying it.
	</Footnote>
	<Footnote id="potentilla"
		>source for origin -
		<ChainLink
			href="https://www.phytoneuron.net/2019Phytoneuron/05PhytoN-PotentillaUtah.pdf"
			target="blank"
			rel="noreferrer"
		/></Footnote
	>
	<Footnote id="missouri">
		Missouri Dept of Conservation -
		<ChainLink
			href="https://mdc.mo.gov/discover-nature/field-guide/indian-strawberry-mock-strawberry"
			target="blank"
			rel="noreferrer"
		/></Footnote
	>
	<Footnote id="cinquefoil">
		there's also dwarf cinquefoil / potentilla canadensis, which is also potentilla sp., which also
		has yellow flowers and a similar habit and shows up in very similar conditions, but has
		five-pronged leaves rather than three. but i digress.</Footnote
	>
	<Footnote id="robinshit">
		Article on robin shit hypothesis
		<ChainLink
			href="https://www.phytoneuron.net/2019Phytoneuron/05PhytoN-PotentillaUtah.pdf"
			target="blank"
			rel="noreferrer"
		/></Footnote
	>
	<Footnote id="colonizer">
		A good example can be found <RainbowLink
			href="https://www.cal-ipc.org/plants/risk/potentilla-recta-risk/"
			>here at California Invasive Plant Council,</RainbowLink
		> though this is a different and rather non-strawbish potentilla</Footnote
	>
	<Footnote id="currentconditions">
		conditions of climate change, the presence of diasporic species, widespread contamination from
		industrial waste of various forms (industrial farming, exhaust fumes, chemical runoff, heavy
		metals), etc etc.</Footnote
	>
	<Footnote id="migrants">
		jfc, man. i mean you see what i'm working with here right. gd fckn</Footnote
	>
	<Footnote id="discordinvasion">
		Calyx - Discord of Invasion Ecology <ChainLink
			href="https://www.northernappalachiaschool.com/post/discord-of-invasion-ecology"
			target="blank"
			rel="noreferrer"
		/></Footnote
	>
	<Footnote id="doubt">
		though I doubt many of them do choose manual labor, usually these are the folks with glyphosate
		out the ass</Footnote
	>
	<Footnote id="deflate">
		the textbook example of this of course is carbon footprints and the concept of carbon neutrality
		through planting monocrop forests. but i'm also thinking of louisiana, where all the
		"conservation" work is funded by the oil industry. like they litterally are responsible for the
		majority of the destruction of the entire ecosystem and then throw pennies to joe liberal
		whoever to make a little park to "help with drainage" and "steward these important plant
		communities" horrendous and also humiliating that people (i am people) roll over and beg for
		that funding</Footnote
	>
	<Footnote id="prisonlabor">
		i found someone claiming that they were "seeing greater use of prison labor in anti-exotics
		extermination projects," dated November 1997. while i couldn't find any other people making this
		claim or any additional info, thus this being a footnote and not a Whole ass thing, it would
		check the fUck out wouldn't it. link to the essay making this claim - <ChainLink
			href="https://www.dtheo.org/NativesVs.Exotics.htm"
			target="blank"
			rel="noreferrer"
		/></Footnote
	>
	<Footnote id="escape">
		i'd been put through the american-utopic-thoreau-wendell berry philosophical complex enough
		times to know that was nothing lol</Footnote
	>
	<Footnote id="collapse">
		what can i say, it was mid-pandemic, i was feeling optimistic about industrial collapse</Footnote
	>

	<Footnote id="not">
		'financially viable' is an extremely generous term for an industry where the vast majority of
		businesses go into massive debt in order to not be able to turn a profit while paying their
		labor almost to literally nothing and relying on massively illegal working conditions. but ag in
		the us hasn't been market viable for a long, long time, even conventional ag farms do not turn
		profits and rely on government subsidies. i'll write on this sometime hopefully, it's kinda its
		own thing</Footnote
	>
	<Footnote id="roundupstats">
		i didn't put two and two together until researching for this piece, but the reason so many new
		plants are being proposed for louisiana's cancer alley (many by Chinese companies) is
		potentially related to increased regulatory pressure in china. china also happens to be by far
		the main producer of the world's unbranded/generic glyphosate (before it gets branded by
		individual companies as, say, roundup). i found numerous articles on conventional ag sites about
		shortages and price hikes in both generic glyphosate and roundup over the past 10 years,
		supposedly due to growing environmental regulations in China. i didn't do enough digging to
		figure out if these were due to actual factories shutting down and supply chain issues (as
		Monsanto claims) or due to Monsanto buying up a bunch of factories +/ generic glyphosate in
		order to corner the market (as some industry people were claiming lol). something to look into
		further.
		<br />
		following is a variety of links on this. warning for a heavy dosage of liberal economic theory lol
		<br />
		Chinese glyphosate manufacturers decrease production (2022) - <ChainLink
			href="https://news.agropages.com/News/NewsDetail---44736.htm"
			target="blank"
			rel="noreferrer"
		/> <br />
		Glyphosate production in China to decrease by 43% (2019) - <ChainLink
			href="https://news.agropages.com/News/NewsDetail---31824.htm"
			target="blank"
			rel="noreferrer"
		/> <br />
		Monsanto explains reasons for its Roundup price hikes (2008) - <ChainLink
			href="https://www.farmprogress.com/commentary/monsanto-explains-reasons-for-its-roundup-price-hikes"
			target="blank"
			rel="noreferrer"
		/></Footnote
	>
	<Footnote id="funding">
		essay from way back in 1990 (1990!) criticizing the growth of the field of invasion biology,
		with updates over the years as invasion biology grew into a whole ass thing. very
		1990-white-naturalist-guy-raw-html website in tone, but worth the read. <ChainLink
			href="https://www.dtheo.org/NativesVs.Exotics.htm"
			target="blank"
			rel="noreferrer"
		/></Footnote
	>
	<Footnote id="ghosts">
		you should read this. especially if you don't know what a ghost swamp is <ChainLink
			href="https://www.e-flux.com/architecture/accumulation/440704/ghost-forest-atlas-of-a-drowning-world/"
			target="blank"
			rel="noreferrer"
		/></Footnote
	>
	<Footnote id="padept">
		link to state dept on slf - <ChainLink
			href="https://www.agriculture.pa.gov/Plants_Land_Water/PlantIndustry/Entomology/spotted_lanternfly/Pages/default.aspx"
			target="blank"
			rel="noreferrer"
		/></Footnote
	>
	<Footnote id="penn">
		link to penn on slf - <ChainLink
			href="https://extension.psu.edu/spotted-lanternfly"
			target="blank"
			rel="noreferrer"
		/></Footnote
	>
	<Footnote id="bloodthirsty">
		philadelphians are also famously bloodthirsty and enjoy bonding over violence. couldn't neglect
		mentioning a clearly central factor</Footnote
	>
	<Footnote id="wellactually">their nymphs rather, at time of writing</Footnote>
	<Footnote id="predators">
		"From hundreds of responses, the No. 1 and 2 reports were of praying mantises seen eating adult
		lanternflies and garden spiders at least snaring lanternflies in their webs and killing them, if
		not eating them. Others reported yellow jackets, gray catbirds, wheel bugs, hornets, fishing
		spiders, green frogs, dogs, cats, goldfish, koi and ducks eating the invasive insects. Some
		chicken owners reported that their birds ate lanternflies, while others said the chickens
		avoided the insects after one taste." -
		<ChainLink
			href="https://www.pennlive.com/life/2020/09/what-eats-spotted-lanternflies.html"
			target="blank"
			rel="noreferrer"
		/></Footnote
	>
	<Footnote id="soilbac">
		reference for soil bacteria - <ChainLink
			href="https://www.phillyvoice.com/spotted-lanternfly-population-decline-pennsylvania-bug-invasive-species/"
			target="blank"
			rel="noreferrer"
		/></Footnote
	>
	<Footnote id="uwu">uwu chemical site prep as a good friend said</Footnote>
	<Footnote id="criminally">
		as in, workers being paid below minimum wage and illegally stipended work</Footnote
	>
	<Footnote id="braiding">
		there's this section of braiding sweetgrass where kimmerer talks about her and another
		researcher making the hypothesis that maybe sweetgrass stands would be more prolific with humans
		regularly harvesting from them, and basically they get laughed at because the other biologists
		think "less plant matter = less plant matter." that really stuck with me because anyone who has
		tended plants for longer than a week could tell you that many/most plants will send out more
		vigorous growth as a result of regular harvests. for fucks sake, they literally tell you at the
		garden store to harvest 1/3 of the herbs you buy each week so that it grows stronger roots &
		puts out more growth. the fact that a bunch of biologists didn't know this should be
		humiliating. tf y'all teaching in these programs!</Footnote
	>
	<Footnote id="ideological">
		IME, rich people's vanity projects do not pay well and are often just as bad or worse to work on
		than the straight production farms <i>because</i> of the ideological fervor and individual personalities
		involved</Footnote
	>
	<Footnote id="alienation">
		it's almost like the land was enclosed, or something? almost like general alienation could be
		said to be a condition economically forced upon much of humanity, the establishment of which has
		taken several centuries and continues to grow? nah it's definitely lack of individual
		responsibility that got us here. we all need to hike up our loins and rewild ourselves and learn
		to live simply with the land!</Footnote
	>
	<Footnote id="pet">
		i think parts of this are potentially exacerbated by the growth of the nonprofit industry and
		the desire for one's daily work as a left middle class person to be perceived as "for good," as
		a way to distinguish oneself from the rest of the laboring masses that have to do things "for
		money to reproduce themselves" (ew) but that's obviously a personal pet theory
	</Footnote>
	<Footnote id="coercion">vs by strict economic necessity or coercion</Footnote>
	<Footnote id="death">
		even if being a part of its healing means by dying off lol closed system farming is fake but
		closed system earth is not hope the fungi eat well</Footnote
	>
	<Footnote id="herbworld">
		i'm talking about the left-and-adjacent whole plant medicine world, not the herbal supplement
		world, though of course they're deeply and fuckedly intertwined.</Footnote
	>
	<Footnote id="philly">
		would bet money the wildlife in philly has picked up the vibes lol if there's any birds i would
		trust to duke it out en masse it is the se pa ones</Footnote
	>

	<Footnote id="cockedtail">
		young shoots make a great rhubarbey cocktail syrup for starters! make sure where you're
		harvesting hasn't been sprayed tho, it's one of those that many people are trying to do chemical
		warfare on</Footnote
	>
</div>

<style>
	figure {
		margin: 0;
		padding: 0;
	}

	.caption {
		max-width: 70%;
	}

	.image {
		max-height: 400px;
		max-width: 70vw;
	}
	.white {
		color: white;
		font-weight: bold;
	}

	.yellow {
		color: var(--yellow);
		font-weight: bold;
	}

	.container {
		margin: 0em 2em;
	}
</style>
