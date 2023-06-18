import SignOut from "../components/SignOut";
import ShowImage from "../components/ShowImage";
import InputCloudKeyword from "../components/InputCloudKeyword";
import AddComment from "../components/AddComment";
import { Typography } from "@mui/material";
import { useState } from "react";
import "../App.css";

function Home() {
    const [words, setWords] = useState([]);

    return (
        <div className="App">
            <Typography component="h1" variant="h5">
                Home
            </Typography>
            <section className="min-h-screen flex items-center justify-center py-20 text-dark dark:text-light">
                <div>
                    <Typography component="h1" variant="h3" sx={{ m: 2 }}>
                        Home
                    </Typography>
                    <InputCloudKeyword words={words} setWords={setWords} />
                    <ShowImage words={words} />
                    <AddComment />
                    <SignOut />
                </div>
            </section>
        </div>
    );
}

export default Home;
