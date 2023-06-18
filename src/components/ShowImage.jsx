import { useState } from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import "../App.css";
import Loading from "../components/Loading";

const ShowImage = ({ words }) => {
    const [image, setImage] = useState(null);
    const [imageCreated, setImageCreated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const postData = {
        kw_list: words,
    };

    const fetchNewImage = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                "http://127.0.0.1:5000/word-cloud", // ワードクラウド生成APIのエンドポイントを指定
                postData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    responseType: "blob",
                    timeout: 10000,
                }
            );
            const blob = response.data;
            setImage(URL.createObjectURL(blob));
            setImageCreated(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="image">
            <Button
                className="create_image_button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 4 }}
                onClick={fetchNewImage}
            >
                Generate Word Cloud
            </Button>
            {isLoading && <Loading />}
            {imageCreated && (
                <>
                    <div>
                        <Typography component="h1" variant="h3" sx={{ m: 2 }}>
                            Image Created!!
                        </Typography>
                        <div className="flex justify-center">
                            <img
                                className="WorcCloudimage w-96 my-14"
                                src={image}
                                alt="画像"
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ShowImage;
