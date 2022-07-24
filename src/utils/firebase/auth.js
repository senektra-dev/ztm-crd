import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
