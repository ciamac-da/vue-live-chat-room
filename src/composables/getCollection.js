import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection).orderBy("Created by")

    const unsub = collectionRef.onSnapshot((snap) => {
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

    watchEffect((onInvalidate) => {
        //Unsub from prev collection when watcher is stopped
        onInvalidate(() => unsub())
    })

    return { error, documents }
}

export default getCollection