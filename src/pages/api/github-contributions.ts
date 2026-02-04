const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
let cached: { data: unknown; time: number } | null = null;

export async function GET() {
  const token = import.meta.env.GITHUB_TOKEN;

  if (!token) {
    return new Response(JSON.stringify({ error: 'GitHub token not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (cached && Date.now() - cached.time < CACHE_TTL_MS) {
    return new Response(JSON.stringify(cached.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  }

  const query = `
    query {
      user(login: "danglorioso") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { userName: 'danglorioso' },
      }),
    });

    const result = await response.json();

    if (result.errors) {
      return new Response(JSON.stringify({ error: result.errors[0].message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const contributions = result.data.user.contributionsCollection.contributionCalendar;
    cached = { data: contributions, time: Date.now() };

    return new Response(JSON.stringify(contributions), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch contributions' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
