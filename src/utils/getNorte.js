const getNorte = (points) => {
  const listPoints = Object.values(points);
  const listNortes = Object.keys(points);
  const createList = listNortes.map((norte, index) => ({ [norte]: listPoints[index] }));
  const getHighestPoints = createList.sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
  const norte = Object.keys(getHighestPoints[0])[0];
  return norte;
}

export default getNorte;
