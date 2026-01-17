export async function GET(request: Request) {
  const token = import.meta.env.GITHUB_TOKEN;
  
  if (!token) {
    return new Response(JSON.stringify({ error: 'GitHub token not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
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
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { userName: "danglorioso" }
      })
    });

    const data = await response.json();
    
    if (data.errors) {
      return new Response(JSON.stringify({ error: data.errors[0].message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const contributions = data.data.user.contributionsCollection.contributionCalendar;
    
    return new Response(JSON.stringify(contributions), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch contributions' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}