import { useContext } from "react"
import { UserContext } from "../store/user-context"

export const useUserContext = () => {
    return useContext(UserContext)
}