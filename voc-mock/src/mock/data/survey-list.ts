import Mock from 'mockjs'

const Random = Mock.Random

export function buildSurveyList(opt: { size: number; isDeleted: boolean; isStar: boolean }) {
  const { size = 10, isDeleted = false, isStar = false } = opt
  const list = []
  for (let i = 0; i < size; i++) {
    list.push({
      id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar,
      answerCount: Random.natural(50, 100),
      createdTime: Random.datetime(),
      isDeleted,
    })
  }
  return list
}

export default buildSurveyList
