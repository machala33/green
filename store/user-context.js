import { createContext, useContext, useEffect, useState } from "react";
import { readUserData } from "../util/auth";
import {
  db,
  off,
  onChildAdded,
  onValue,
  push,
  ref,
  set,
} from "../util/firebase";
import { AuthContext } from "./auth-context";

export const UserContext = createContext({
  userAddresses: [],
  deliveryDetails: {},
  user: "",
  loading: Boolean,
});

const UserProvider = ({ children }) => {
  const { userId } = useContext(AuthContext);
  const [user, setUser] = useState();
  const [userAddresses, setUserAddresses] = useState([]);
  const [deliveryDetails, setDeliveryDetails] = useState({
    senderAddressId: "",
    receiverAddressId: "",
    category: "",
    description: "",
    weight: "",
    itemsNo: "",
    itemImage: "",
  });
  const [loading, setLoading] = useState(true);

  const setDelivery = (items) => {
    setDeliveryDetails(items);
  };

  const onDeleteAddress = (addressKey) => {
    console.log(addressKey);
  };

  // const onAddAddress = async (address) => {
  //   const addressRef = push(ref(db, "addresses"));
  //   await set(ref(db, `users/${userId}/addresses/${addressRef.key}`), true);
  //   await set(addressRef, { ...address, uid: userId });
  // };

  const onsetDeliveryDetails = (identifier, value) => {
    setDeliveryDetails((old) => {
      return {
        ...old,
        [identifier]: value,
      };
    });
  };

  let value = {
    userAddresses,
    setUserAddresses,
    deliveryDetails,
    onsetDeliveryDetails,
    user,
    loading,
    onDeleteAddress,
  };

  useEffect(() => {
    const userData = ref(db, "users/" + userId);
    return onValue(userData, (snapshot) => {
      const data = snapshot.val();
      // const user = {...data}
      setUser(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const addressesRef = ref(db, `users/${userId}/addresses`);
    const refs = [addressesRef];

    onChildAdded(addressesRef, (child) => {
      const key = child.key;
      const addressRef = ref(db, `addresses/${key}`);
      refs.push(addressRef);
      onValue(addressRef, (snap) => {
        setUserAddresses((old) => {
          return [...old, { key: key, val: snap.val() }];
        });
      });
    });

    return () => {
      refs.forEach((ref) => {
        off(ref);
      });
    };
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
