export default function getStudentIdsSum(students) {
  return students.reduce((acc, ls) => acc + ls.id, 0);
}
