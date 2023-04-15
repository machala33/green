import { push, ref, set } from "./firebase"

const addAddress = (user, data) => {
    try {
        const addressesRef = push(ref(db, "users/" + user.userId + "/addresses"))
        set(addressesRef, data)
    } catch (error) {
        
    }
}