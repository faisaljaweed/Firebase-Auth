import { FC, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

// interface PropType {
//   email: string;
//   password: string;
// }

const auth = getAuth(app);

const Signups: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => alert("Success"))
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <h1>Signup</h1>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
        value={email}
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter your password"
        value={password}
      />
      <button onClick={createUser}>Signup</button>
    </div>
  );
};

export default Signups;
