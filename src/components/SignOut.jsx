import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Button from "@mui/material/Button";

const SignOut = () => {
    const navigate = useNavigate();
    const handleClickSignOut = async () => {
        try {
            await signOut(auth);
            console.log("[Succeeded] Sign out");
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClickSignOut}
        >
            ログアウト
        </Button>
    );
};

export default SignOut;
