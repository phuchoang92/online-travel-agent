
import {useCallback, useContext, useState} from "react";
import {
    useForm
} from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../Button";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import {AuthContext} from "../../context/AuthProvider";
import {variables} from "../../Variables";

const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const { loading, error, dispatch } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const onSubmit = (data) => {
            setIsLoading(true);

            dispatch({ type: "LOGIN_START" });

            try {
                console.log(data);
                fetch(variables.API_URL + 'Login/Login', {
                    method: 'POST',
                    mode:"no-cors",
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Headers': 'Content-Type'
                    },
                    body: {
                        "username": data.username,
                        "password": data.password
                    }
                }).then(res => res.json())
                    .then((result) => {
                        console.log(result)
                    });
            }catch (err) {
                dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
            }

            // signIn('credentials', {
            //     ...data,
            //     redirect: false,
            // })
            //     .then((callback) => {
            //         setIsLoading(false);
            //
            //         if (callback?.ok) {
            //             toast.success('Logged in');
            //             router.refresh();
            //             loginModal.onClose();
            //         }
            //
            //         if (callback?.error) {
            //             toast.error(callback.error);
            //         }
            //     });
        }

    const onToggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome back host"
                subtitle="Login to your account!"
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
            />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
            />
            <div className="text-neutral-500 text-center mt-4 font-light">
                <p>First time using Airbnb?
                    <span
                        onClick={onToggle}
                        className="
                              text-neutral-800
                              cursor-pointer
                              hover:underline"
                    > Create an account</span>
                </p>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default LoginModal;
