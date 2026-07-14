export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "u15-tournament-catholic-mission-school",
    title: "U15 Tournament at Catholic Mission School — Full Footstats Coverage",
    excerpt:
      "We set up our camera system at Catholic Mission School in Hong Kong to capture a full U15 youth tournament. Here's how Footstats transformed the footage into actionable insights — including every goal.",
    date: "2026-07-14",
    author: "Footstats Team",
    category: "Tournament Coverage",
    content: `
## Live from Catholic Mission School, Hong Kong

Last weekend, we had the privilege of setting up our computer vision pipeline at Catholic Mission School in Hong Kong for an action-packed U15 youth tournament. The energy on the pitch was electric — and our system was running from the first whistle to the last.

### What We Captured

Our setup consisted of two cameras covering the full pitch, feeding into Footstats' AI engine that automatically detected and classified every significant event:

- **Goals** — automatically detected and timestamped
- **Shots** — tracked with positional data
- **Passes** — recorded with accuracy rates
- **Player movements** — heatmapped across the full match

<<video:videos/9-goal-output.mp4>>

*The 9-goal output from the tournament — every strike automatically clipped and compiled by Footstats AI.*

### The 9-Goal Thriller

The tournament delivered **9 goals** across the matches we covered, all automatically captured and tagged by Footstats. Our AI didn't just record the goals — it classified each one by type:

| Goal Type | Count | Description |
|-----------|-------|-------------|
| Open play | 5 | Build-up through midfield |
| Counter-attack | 2 | Fast transition goals |
| Set piece | 1 | Corner kick finish |
| Long range | 1 | Strike from outside the box |

### Beyond the Goals

While the goals are the highlight, the real value for coaches came from the data behind them:

- **Pass networks** revealed which partnerships were most effective
- **Heatmaps** showed positional discipline and coverage gaps
- **Action timelines** helped identify when fatigue set in (more errors in the final 10 minutes of each half)

### About Catholic Mission School

Catholic Mission School (CMS) is a well-established Hong Kong school with a strong commitment to holistic education and youth development through sports. Located in the Mid-Levels district, CMS has been nurturing young talent for decades, with football playing a central role in their extracurricular programme.

**What makes CMS stand out:**

- **Dedicated football programme** — Structured training sessions run by qualified coaches year-round
- **Strong school spirit** — Students, parents, and teachers rally behind the teams at every match
- **Focus on character development** — CMS emphasises teamwork, discipline, and resilience alongside technical skills
- **Excellent facilities** — Well-maintained pitch and sports infrastructure in the heart of Hong Kong Island

We're proud to partner with Catholic Mission School and support their U15 programme with cutting-edge analytics. Their forward-thinking approach to integrating technology into youth football makes them a perfect fit for Footstats.

> "Having automatic video of every goal and key play means we can spend our coaching time on analysis, not clipping footage. The pass network data alone has changed how we think about our formation."
> — Head Coach, Catholic Mission School U15

### The Future

This tournament was a proof of concept for our Hong Kong operations. We're now in talks with several other schools and academies across the territory to provide similar coverage for their match days and training sessions.

If you're a school or academy in Hong Kong interested in bringing Footstats to your next tournament, reach out to us at **foostatsinfo@gmail.com** or on WhatsApp at **+852 5602 9830**.
    `,
  },
  {
    slug: "shenzhen-international-football-academy",
    title: "Inside the Shenzhen International Football Academy",
    excerpt:
      "A deep dive into one of Shenzhen's premier youth football academies — their training philosophy, facilities, and how Footstats is powering their data-driven development.",
    date: "2026-06-15",
    author: "Footstats Team",
    category: "Academy Spotlight",
    content: `
## A New Era for Youth Football in Shenzhen

The Shenzhen International Football Academy (SIFA) has quickly established itself as one of the most forward-thinking youth development programs in southern China. Located in the heart of Shenzhen's Nanshan district, the academy integrates modern training methodologies with cutting-edge technology.

### World-Class Facilities

SIFA boasts:

- **Two full-size FIFA-standard pitches** with floodlighting for evening sessions
- **Indoor training dome** for year-round conditioning
- **Video analysis room** equipped with multi-angle camera systems
- **GPS and LPS tracking infrastructure** covering all training areas
- **Recovery and sports science centre** with cryotherapy and hydrotherapy

### Training Philosophy

The academy follows a periodised training model designed by UEFA-licensed coaches. Their methodology focuses on three pillars:

1. **Technical mastery** — Repetition-based skill drills with progressive difficulty
2. **Tactical awareness** — Small-sided games that simulate match scenarios
3. **Athletic development** — Age-appropriate strength, speed, and agility work

### How Footstats Integrates

Since partnering with Footstats in early 2026, SIFA has been using our platform to:

- Automatically track every training session with sub-metre positioning accuracy
- Generate individual player reports with pass completion rates, distance covered, and heatmaps
- Produce AI-curated highlight reels for each player after every match
- Give parents and coaches access to real-time performance data via our mobile platform

> "Footstats has fundamentally changed how we evaluate player development. We're no longer relying on subjective opinions — we have concrete data for every decision." — Head Coach, SIFA

### Looking Ahead

SIFA is planning to expand its age-group programmes and is exploring partnerships with European clubs for exchange programmes. Footstats will continue to provide the analytical backbone for this growth.
    `,
  },
  {
    slug: "hong-kong-youth-academy-scene",
    title: "Hong Kong's Youth Academy Landscape: A Data Perspective",
    excerpt:
      "From the Hong Kong Football Association's elite pathway to grassroots clubs — we explore how data analytics is transforming youth development across the territory.",
    date: "2026-07-01",
    author: "Footstats Team",
    category: "Industry Insights",
    content: `
## Hong Kong's Football Renaissance

Hong Kong has long been a football-loving city, but the structured youth academy scene has seen remarkable growth over the past five years. With the HKFA's Project Phoenix initiative and increased investment from professional clubs, the territory is building a genuine pathway from grassroots to professional football.

### The Academy Ecosystem

Hong Kong's youth football ecosystem is diverse:

| Tier | Examples | Focus |
|------|----------|-------|
| **Professional club academies** | Kitchee, Eastern, Pegasus | Elite pathway to first team |
| **HKFA Elite Youth Programme** | Regional training centres | Talent identification |
| **Private academies** | JSSL, Mighty Lions, ESF | Grassroots to competitive |
| **School-based programmes** | International schools, DSS schools | Broad participation |

### The Data Gap

Despite the enthusiasm, most academies in Hong Kong have historically operated without systematic performance tracking. Coaches relied on visual observation and basic statistics like goals and assists. This is where Footstats bridges a critical gap.

### Footstats in Hong Kong

We've been working with several Hong Kong academies to implement:

- **Automated match analysis** — Camera-based event detection for goals, passes, tackles, and shots
- **Training load monitoring** — GPS tracking to manage player workload and reduce injury risk
- **Development benchmarking** — Comparing player metrics against age-group norms
- **Video highlights** — AI-curated clips for player development reviews and recruitment

### Case Study: A Local Academy's Transformation

One of our partner academies in Sai Kung saw a **23% improvement in passing accuracy** across their U15 squad within three months of implementing data-driven training adjustments. Coaches used Footstats reports to identify specific technical weaknesses in individual players and tailored their coaching accordingly.

### The Future

Hong Kong's football development is at an inflection point. With the upcoming Asian Youth Championships and increased investment in facilities, data analytics will be a key differentiator for academies that want to produce professional-level players.

Footstats is committed to supporting this journey by making professional-grade analytics accessible to every academy in Hong Kong, regardless of size or budget.
    `,
  },
  {
    slug: "shenzhen-vs-hong-kong-academy-comparison",
    title: "Shenzhen vs Hong Kong: A Tale of Two Football Cities",
    excerpt:
      "Two cities, one Greater Bay Area. How do the youth academy scenes compare? We break down the differences in infrastructure, coaching, competition, and data maturity.",
    date: "2026-07-10",
    author: "Footstats Team",
    category: "Comparison",
    content: `
## Football Development Across the Border

Shenzhen and Hong Kong sit just 30 kilometres apart, yet their youth football ecosystems have evolved along very different paths. With the Greater Bay Area initiative creating closer ties, there's growing interest in cross-border football development.

### Infrastructure Comparison

| Aspect | Shenzhen | Hong Kong |
|--------|----------|-----------|
| **Pitches per capita** | Higher — newer city with more available land | Lower — space constraints, shared facilities |
| **Indoor facilities** | Several multi-sport domes | Limited, mostly outdoor |
| **Video analysis setup** | Growing fast — new academies invest upfront | Mixed — some have it, most don't |
| **GPS tracking** | Becoming standard in elite academies | Still rare outside professional clubs |

### Coaching and Philosophy

**Shenzhen** has attracted many foreign coaches, particularly from Spain and Portugal, bringing a possession-based, technical-first philosophy. Academies here tend to emphasise individual skill development within structured team play.

**Hong Kong** has a mix of British-influenced (direct, physical) and Spanish/Japanese (technical) coaching styles. The variety means players are exposed to different approaches, but consistency across age groups can be a challenge.

### Competitive Structure

Shenzhen academies participate in:

- Shenzhen Youth Football League
- Guangdong-Hong Kong-Macao Greater Bay Area Youth Cup
- National youth competitions (travel to other Chinese cities)

Hong Kong academies compete in:

- HKFA Youth League (age-group divisions)
- JSSL 7-a-side tournaments
- International school leagues
- Various invitational tournaments in Asia

### Data Analytics Maturity

This is where the gap is narrowing fastest. Both cities have traditionally been behind European academies in data adoption, but that's changing:

- **Shenzhen** — Tech-forward culture means academies are quick to adopt platforms like Footstats
- **Hong Kong** — Higher awareness of sports science due to international exposure, but slower adoption due to budget constraints in smaller clubs

### Cross-Border Opportunities

The Greater Bay Area creates unique opportunities:

1. **Inter-city friendlies and tournaments** — Regular competition between Shenzhen and Hong Kong academies
2. **Coach exchange programmes** — Learning from different footballing cultures
3. **Combined talent identification** — Scouting across both cities
4. **Shared analytics infrastructure** — Footstats is uniquely positioned to support academies on both sides

### The Bottom Line

Both cities have immense potential. Shenzhen has the space and investment; Hong Kong has the international exposure and competitive density. Together, supported by data, they could become a genuine football development hub for Asia.
    `,
  },
  {
    slug: "training-session-analysis-guide",
    title: "How to Read Your First Footstats Training Report",
    excerpt:
      "New to data-driven coaching? Here's a simple guide to understanding the key metrics in every Footstats training report — from pass accuracy to heatmaps.",
    date: "2026-06-28",
    author: "Footstats Team",
    category: "Guides",
    content: `
## Making Sense of the Numbers

A Footstats training report can look overwhelming at first — heatmaps, pass networks, event timelines, and dozens of metrics. But once you know what to look for, each report tells a clear story about your team's performance.

### The Key Metrics

#### 1. Pass Accuracy

This is the percentage of passes that reach their intended target. For youth players:

- **U12-U14**: 60-75% is solid
- **U15-U17**: 70-85% is good
- **Above 85%**: Excellent, but check if passes are progressive or sideways/backwards

#### 2. Distance Covered

Total distance a player runs during a session. Watch for:

- **Sudden drops** — possible fatigue or injury
- **Large gaps between players** — tactical disconnect
- **Inconsistent effort** — possible motivation or fitness issues

#### 3. Heatmap Analysis

The heatmap shows where a player spent their time on the pitch. Useful questions to ask:

- Does the player cover their positional zone?
- Are there gaps in their coverage?
- Do they drift too far from position?

#### 4. Event Timeline

Every detected action (pass, shot, tackle, receive) is timestamped and plotted. This helps you:

- Identify patterns in decision-making
- See when concentration drops (more errors in certain periods)
- Compare in-possession vs out-of-possession behaviour

### Quick Guide for Coaches

| Metric | What to look for | Red flag |
|--------|------------------|----------|
| Pass accuracy | Consistency across session | Sharp drop in 2nd half |
| Distance | Effort level | < 2km in a full session |
| Top speed | Athletic development | No sprints |
| Heatmap coverage | Positional discipline | Out of zone > 30% of time |
| Actions per minute | Involvement | < 2 actions/min |

### Putting It Into Practice

Start simple: pick **three metrics** to focus on each week. For example:

- **Week 1**: Pass accuracy + distance covered
- **Week 2**: Heatmap positioning + event timeline
- **Week 3**: Compare trends across multiple sessions

Over time, you'll build a comprehensive picture of each player's development.

> "The best coaches don't drown in data — they use it to ask better questions." — Footstats Coaching Philosophy
    `,
  },
];
