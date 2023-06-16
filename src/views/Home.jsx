import SignOut from "../components/SignOut";
import { Typography } from "@mui/material";

const Home = () => {
    return (
        <>
            <>
                <div>
                    <Typography component="h1" variant="h5">
                        Home
                    </Typography>
                    <SignOut />
                </div>
            </>
        </>
    );
};

export default Home;
