const EPISODES_URL = 'https://rickandmortyapi.com/api/episode/';

export async function getEpisodes() {
  const response = await fetch(`${EPISODES_URL}`);
  const result = await response.json();
  const response2 = await fetch(result.info.next);
  const result2 = await response2.json();
  const response3 = await fetch(result2.info.next);
  const result3 = await response3.json();

  const data = await [result.results, result2.results, result3.results].flat();
  console.log(data)
  return data;
}
