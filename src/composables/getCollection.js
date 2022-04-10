import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const documetns = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection).orderBy("Created by")

    collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({...doc.data(), id:doc.id})
        })
        documetns.value = results
        error.value = null
    })
}

export default getCollection