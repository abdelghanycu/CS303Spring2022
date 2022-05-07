import {addDoc, collection, getDocs, getFirestore, setDoc, doc, query, where} from "firebase/firestore";
import {app} from "./Config";

const firestoreDB = getFirestore(app);


async function getUsers() {
    const usersCol = collection(firestoreDB, "users");
    const userSnapshot = await getDocs(usersCol);
    return userSnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
}

export async function getUserById(id) {
    const usersRef = collection(firestoreDB, "users");
    const q = query(usersRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
}

async function addUser(user) {
    await setDoc(doc(firestoreDB, "users", user.id), user);
}

export {getUsers, addUser};