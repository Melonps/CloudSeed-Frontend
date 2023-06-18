import { useEffect } from "react";
import LogIn from "../components/LogIn";
import { MainLogoDark } from "../components/Icon";
import { Typography } from "@mui/material";

const SignInPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className="min-h-screen ">
                <div className="App-header flex items-center">
                    <MainLogoDark className="w-72 xl:w-full h-24 xl:h-40 mx-auto mb-8" />
                    <Typography component="p1" variant="p" sx={{ m: 2 }}>
                        Word Cloud
                    </Typography>
                </div>
            </section>
            <section className="min-h-screen flex items-center justify-center py-20 text-dark dark:text-light">
                <div>
                    <LogIn />
                </div>
            </section>
        </>
    );
};

export default SignInPage;
