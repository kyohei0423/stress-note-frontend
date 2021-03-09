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
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800 mb-10">
              新規登録
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-s font-semibold text-gray-600"
                >
                  メールアドレス
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    ref={register({ required: true })}
                    className="block w-full py-2.5 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic mt-1">
                      メールアドレスは必須です
                    </p>
                  )}
                </label>
              </div>
              <div className="mb-10">
                <label
                  htmlFor="password"
                  className="block text-s font-semibold text-gray-600"
                >
                  パスワード
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="パスワード"
                    ref={register({ required: true })}
                    className="block w-full py-2.5 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs italic mt-1">
                      パスワードは必須です
                    </p>
                  )}
                </label>
              </div>
              <input
                type="submit"
                value="新規登録する"
                className="w-full py-3 bg-blue-500 rounded-sm
                    font-medium text-white uppercase cursor-pointer
                    focus:outline-none hover:bg-blue-600 hover:shadow-none"
              />
            </form>
            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              <a href="forgot-password" className="flex-2 underline">
                パスワードをお忘れの方
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
