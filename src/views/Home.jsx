import SignOut from "../components/SignOut";
import ShowImage from "../components/ShowImage";
import { Typography } from "@mui/material";

import InputCloudKeyword from "../components/InputCloudKeyword";
import { useState } from "react";
import "../App.css";

function Home() {
    const [words, setWords] = useState([]);

    return (
        <div className="App">
            <section className="min-h-screen flex items-center justify-center py-20 text-dark dark:text-light">
                <div>
                    <Typography component="h1" variant="h3" sx={{ m: 2 }}>
                        Home
                    </Typography>
                    <InputCloudKeyword words={words} setWords={setWords} />
                    <ShowImage words={words} />
                    <SignOut />
                </div>
            </section>
        </div>
    );
}

export default Home;
