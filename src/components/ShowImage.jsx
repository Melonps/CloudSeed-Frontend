import { useEffect, useState } from "react";
import axios from 'axios'
import { Typography, Button } from "@mui/material";

const ShowImage = ({ words }) => {
    const [image, setImage] = useState(null)
    const [imageCreated, setImageCreated] = useState(false)

    

    const postData = {
        "kw_list": words,
    }

    const fetchNewImage = async () => {
        const headers = {
            'Content-Type': 'application/json',
        }

        try {
            // const response = await axios.post('https://cymntn2bea.execute-api.ap-northeast-3.amazonaws.com/dev/word-cloud', postData) { responseType: 'blob', timeout: 10000 }
            const response = await axios.post('http://127.0.0.1:5000/word-cloud', postData, {
                headers: headers,
                responseType: 'blob'
            })
            const blob = response.data
            // const blob = new Blob([response.data], { type: 'image/png' });
            setImage(URL.createObjectURL(blob))
            setImageCreated(true)
            console.log(blob)
            console.log(image)
            // const blob = new Blob([response.data]);
            // const reader = new FileReader();
            // reader.onloadend = () => {
            //     setImage(reader.result);
            // };
            // reader.readAsDataURL(blob);
            // setImageCreated(true);
            // console.log(image)
                // .then(response => response.blob())
                // .then(blob => {
                //     const reader = new FileReader();
                //     reader.onloadend = () => {
                //         setImage(reader.result)
                //     }
                //     reader.readAsDataURL(blob)
                //     setImageCreated(true)
                // })
                // const response = await axios.get('http://127.0.0.1:5000/word-cloud')
                    // .then(response => console.log(response))
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="image">
            {imageCreated? (
                <img src={image} className="image" alt="画像" />
            ) :(
                <></>
            )}
            <Button
                className="create_image_button"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 4 }}
                onClick={fetchNewImage}
            >
                ワードクラウドを作成
            </Button>
        </div>
    )
}

export default ShowImage;