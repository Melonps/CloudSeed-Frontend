import { useEffect, useState } from "react";
import axios from 'axios'

const ShowImage = () => {
    const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')

    const fetchNewImage = async () => {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            if (response.data.status === 'success') {
                setDogUrl(response.data.message);
            } else {
                console.error('Failed to fetch dog image');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="image">
            <img src={dogUrl} className="image" alt="画像" />
            <button onClick={fetchNewImage} className="reload_button">【別の画像を表示】</button>
        </div>
    )
}

export default ShowImage;