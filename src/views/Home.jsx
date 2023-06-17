import SignOut from "../components/SignOut";
import ShowImage from "../components/ShowImage";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import liff from "@line/liff";
import "../App.css";

function Home() {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        liff.init({
            liffId: import.meta.env.VITE_LIFF_ID,
        })
            .then(() => {
                setMessage("LIFF init succeeded.");
            })
            .catch((e) => {
                setMessage("LIFF init failed.");
                setError(`${e}`);
            });
    });

    return (
        <div className="App">
            <h1>create-liff-app</h1>
            {message && <p>{message}</p>}
            {error && (
                <p>
                    <code>{error}</code>
                </p>
            )}
            <a
                href="https://developers.line.biz/ja/docs/liff/"
                target="_blank"
                rel="noreferrer"
            >
                LIFF Documentation
            </a>
            <Typography component="h1" variant="h5">
                Home
            </Typography>
            <ShowImage />
            <SignOut />
        </div>
    );
}

export default Home;
