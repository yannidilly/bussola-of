import bussolaForm from './bussolaForm.json';

const formatFormAnswer = (data) => {
  const { fields } = bussolaForm;
  const answers = fields.map((field) => {
    const actualAnswer = data[field.id];
    if (actualAnswer !== undefined) {
      return {
        type: field.description,
        value: actualAnswer,
      }
    }
    return null;
  });
  const answersNotNull = answers.filter((answers) => answers !== null);
  const SP = answersNotNull.filter((answer) => answer.type === 'SP')
    .reduce((acc, cur) => (Number(acc) + Number(cur.value)), 0);
  const PG = answersNotNull.filter((answer) => answer.type === 'PG')
    .reduce((acc, cur) => (Number(acc) + Number(cur.value)), 0);
  const EMD = answersNotNull.filter((answer) => answer.type === 'EMD')
    .reduce((acc, cur) => (Number(acc) + Number(cur.value)), 0);
  const CD = answersNotNull.filter((answer) => answer.type === 'CD')
    .reduce((acc, cur) => (Number(acc) + Number(cur.value)), 0);
  const CF = answersNotNull.filter((answer) => answer.type === 'CF')
    .reduce((acc, cur) => (Number(acc) + Number(cur.value)), 0) * 1.6;
  return { SP, PG, EMD, CD, CF };
}

export default formatFormAnswer;