import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  // If user data exists, do nothing
  if (userSnapshot.exists()) {
    return userDocRef
  }
  // If user data does not exist, create new user data
  const { displayName, email } = userAuth
  const createdAt = new Date()

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    })
  } catch (error) {
    console.error('Error creating user document', error)
  }

  console.log(userAuth)
}
