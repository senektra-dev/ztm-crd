import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth'

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
