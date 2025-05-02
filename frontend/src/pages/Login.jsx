// import { useForm } from "react-hook-form";
// import Input from "../components/Input";
// import Button from "../components/Button";
// import { Link, useNavigate } from "react-router-dom";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";
// import { setCredentials } from "../redux/features/auth/authSlice";
// import { useDispatch } from "react-redux";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import OAuth from "../components/OAuth";

// const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

// const loginUser = async (userData) => {
//   const { data } = await axios.post(`${baseURL}/api/v1/user/login`, userData);
//   return data;
// };

// const loginSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(8, "Password should be at least 8 characters"),
// });

// function Login() {
//   const queryClient = useQueryClient();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//     resolver: zodResolver(loginSchema),
//   });

//   const mutation = useMutation({
//     mutationFn: loginUser,
//     onSuccess: (data) => {
//       dispatch(setCredentials(data));
//       queryClient.setQueryData(["user"], data);
//       toast.success("Login successful");
//       navigate("/");
//     },
//     onError: (error) => {
//       toast.error(
//         error.response?.data?.message || "An error occurred during login"
//       );
//     },
//   });

//   const login = (data) => {
//     mutation.mutate(data);
//   };

//   return (
//     <div className="flex items-center justify-center">
//       <div className="mx-auto w-full max-w-lg rounded-xl p-10">
//         <h2 className="text-2xl font-bold m-2 text-blue-600">Login</h2>
//         <div className="border border-blue-600 rounded-md">
//           <form onSubmit={handleSubmit(login)}>
//             <div className="space-y-4 p-4">
//               <div>
//                 <Input
//                   placeholder="Email"
//                   type="email"
//                   {...register("email")}
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <Input
//                   type="password"
//                   placeholder="Password"
//                   {...register("password")}
//                 />
//                 {errors.password && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.password.message}
//                   </p>
//                 )}
//               </div>
//               <Button
//                 textColor="text-white"
//                 type="submit"
//                 className="w-full"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Logging in..." : "Login"}
//               </Button>
//             </div>
//             <p className="text-center text-black my-4">
//               Dont have an account?{" "}
//               <Link to="/signup" className="text-blue-600 hover:underline">
//                 Sign up
//               </Link>
//             </p>
//             {/* <button className="bg-blue-600 mx-auto block text-white rounded-md p-2 mb-4 hover:bg-blue-700 transition-colors">
//               Login with Google
//             </button> */}
//             <OAuth title={"Login with Google"} />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { setCredentials } from "../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";

const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

const loginUser = async (userData) => {
  const { data } = await axios.post(`${baseURL}/api/v1/user/login`, userData);
  return data;
};

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

function Login() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      dispatch(setCredentials(data));
      queryClient.setQueryData(["user"], data);
      toast.success("Successfully signed in.");
      navigate("/");
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    },
  });

  const login = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl transition-all">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Welcome back. Please enter your credentials.
          </p>
        </div>

        <form onSubmit={handleSubmit(login)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="mt-1"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className="mt-1"
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-900 transition duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <div className="mt-6">
          <OAuth title="Continue with Google" />
        </div>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-black font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
