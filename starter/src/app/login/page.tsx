'use client';
import Image from "next/image"
import { useLoginMutation } from "../../redux/slices/auth_slice";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { root } from "postcss";


export default function Login (){


    const router = useRouter();

    const [loginUser, { 
        data: loginData, 
        isLoading: loginLoading, 
        isError: loginError,
        error: loginErrorInfo,
    }] = useLoginMutation();


    const handleSubmit = (event:any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        if (email && password){

            loginUser({email: email.toString(), password: password.toString()})
        }

      }

      useEffect(() => {
        if (loginData){
            console.log(loginData);
            router.push('/homepage');

        }
        if (loginError){
            console.log(loginErrorInfo);
        }
      }
        ,[loginData, loginError]);


    return (
        <div
            className={`flex justify-center items-center h-screen w-full`}
        >
            {/* picture and text on the left */}

            <div className={`flex flex-col justify-center items-center w-1/2`}>
                {/* A2SV LOGO */}

                <div className={`flex justify-center items-center w-1/2`}>
                    <Image
                        src="/logo.png"
                        alt="A2SV Logo"
                        width={160}
                        height={60}
                    />
                </div>
                {/* image and text */}
                <div className={`flex justify-center items-center w-1/2`}>
                    {/* Image */}
                    <Image
                        src="/login_pic.svg"
                        alt="Login"
                        width={500}
                        height={500}
                    />
                    {/* Text */}
                    <div className={`flex flex-col justify-between items-center w-1/2`}>
                        <h1 className={`text-4xl font-bold`}>Welcome Back!</h1>
                        <p className={`text-sm font-bold`}>Login to receive blogs and learn more about A2SV</p>
                    </div>
                    </div>

            </div>
                
                {/* form on the right */}
                <div className={`flex min-h-screen flex-col justify-between items-center w-1/2 bg-blue-500`}>
                    {/* sign in text */}
                    <div className={`self-end w-1/2 `}>
                        <h1 className={`text-2xl text-white font-bold text-right p-6`}>Sign Up</h1>
                    </div>

                    {/* form */}
                    

                        <div className="m-auto 
                        flex h-[700px] w-[600px] flex-col justify-center  bg-white rounded-3xl">
                            <div className=" p-8 text-left">
                            
                            <h2 className="m-auto text-2xl text-center font-extrabold leading-9 tracking-tight text-gray-900">
                                Login
                            </h2>
                            <p className="text-sm text-center">
                            Hey, Enter your details to sign in to your account 
                            </p>
                            </div>

                            <div className=" mx-auto ">
                            <form onSubmit= {handleSubmit} className="space-y-6 m-auto " action="#" method="POST">
                                <div>
                              
                                <div className="mt-2">
                                    <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Email address"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:pl-4"
                                    />
                                </div>
                                </div>

                                <div>
                                
                                <div className="mt-2">
                                    <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="Password"
                        
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:pl-4"
                                    />
                                </div>
                                </div>
                                <div>

                                <button

                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                                </div>
                            </form>
                            </div>
                        </div>
  

                </div>

           
        </div>
    )
}