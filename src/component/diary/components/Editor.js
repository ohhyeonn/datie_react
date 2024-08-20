import * as React from 'react';
import './Editor.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import Button from '@mui/material/Button';

const Editor = ({ id, placeName, rate, review, images, onSubmit }) => {
    // images가 배열인지 확인하고, 배열이 아닌 경우 빈 배열로 설정
    const [imageList, setImageList] = useState(
        Array.isArray(images) ? images : [],
    );

    const [value, setValue] = useState(rate || 0);
    const [reviewText, setReviewText] = useState(review || '');
    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImageList([...imageList, ...newImages]);
    };

    const handleSubmit = () => {
        // 필요한 데이터와 함께 onSubmit 호출
        onSubmit({
            id,
            placeName,
            rate: value,
            review: reviewText,
            images: imageList,
        });
    };

    return (
        <>
            <div className="Editor">
                <div className="editor_section_head">
                    <h1>{placeName}</h1>
                </div>
                <div className="editor_section">
                    <Rating
                        name="simple-controlled"
                        size="large"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </div>
                <div className="editor_section">
                    <div className="input_wrapper">
                        <textarea
                            placeholder="한줄평을 남겨주세요"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        />
                    </div>
                </div>
                <div className="editor_section">
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                    />
                    <div className="image_preview">
                        {imageList.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`uploaded ${index}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="editor_section bottom_section">
                    <Button
                        variant="outlined"
                        sx={{ fontFamily: '"Gamja Flower", sans-serif' }}
                        onClick={handleSubmit}
                    >
                        작성 완료
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Editor;
