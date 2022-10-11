import { getFromDb } from "./fakeDb"

export const storeDataAndTopicData = async () => {
    const topicData = await fetch('https://openapi.programming-hero.com/api/quiz')
    const topic = await topicData.json()

    const storeData = getFromDb();


    return { topic, storeData }
}