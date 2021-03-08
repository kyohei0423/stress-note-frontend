import { useForm } from "react-hook-form";

import Layout from "@atoms/layout";

import { getFirebaseAuth } from "infra/firebase";
type FormData = {
  email: string;
  password: string;
};

function Signup() {
  const { register, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const auth = getFirebaseAuth();
    const { email, password } = data;
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
    }
  };

  return (
    <Layout subTitle="新規登録">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="email" name="email" ref={register({ required: true })} />
          {errors.email && <span>メールアドレスは必須です</span>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            ref={register({ required: true })}
          />
          {errors.password && <span>パスワードは必須です</span>}
        </div>
        <div>
          <input type="submit" value="新規登録する" />
        </div>
      </form>
    </Layout>
  );
}

export default Signup;
