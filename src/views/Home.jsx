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
        <div className="home-container">
            <section className="section-container min-h-screen flex items-center justify-center">
                <div>
                    <Typography
                        component="h1"
                        variant="h3"
                        className="section-title"
                    >
                        Home
                    </Typography>
                    <InputCloudKeyword words={words} setWords={setWords} />
                    <ShowImage words={words} />
                </div>
            </section>
            <section className="section-container min-h-screen flex items-center justify-center">
                <div>
                    <AddComment />
                    <SignOut />
                </div>
            </section>
        </div>
    );
}

export default Home;
