import LogIn from "../components/LogIn";
import { MainLogoDark } from "../components/Icon";

const SignInPage = () => {
    return (
        <>
            <MainLogoDark className="w-72 xl:w-full h-24 xl:h-40 mx-auto mb-8" />

            <LogIn />
        </>
    );
};

export default SignInPage;
