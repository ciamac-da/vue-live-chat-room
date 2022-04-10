import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection).orderBy("Created by")

    collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({...doc.data(), id:doc.id})
        })
        documetns.value = results
        error.value = null
    }, err => {
        console.log(err.message)
        document.value = null
        error.value = "Could not fetch the data"
    })
    return { error, documents }
}

export default getCollection