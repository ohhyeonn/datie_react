import './DiaryItem.css';
import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Rating } from '@mui/material';
import EditButton from './EditButton';
import Editor from './Editor';
import axios from 'axios';

const DiaryItem = ({
    diaryNo,
    companyName,
    rate,
    review,
    uploadOrg,
    uploadReal,
}) => {
    const [open, setOpen] = useState(false);
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [images, setImages] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleImageModalOpen = () => setImageModalOpen(true);
    const handleImageModalClose = () => setImageModalOpen(false);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                // 다이어리 번호를 통해 이미지 URL 목록을 가져옵니다.
                const response = await axios.get(
                    `http://localhost:8090/api/diary/image/${diaryNo}`,
                    // { responseType: 'blob' }, // 이미지 파일을 Blob 형태로 요청
                );

                // 이미지 URL을 state에 저장합니다.
                // const imageUrl = URL.createObjectURL(response.data);
                setImages(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [diaryNo]);

    return (
        <div className="DiaryItem">
            <div className="img_section" onClick={handleImageModalOpen}>
                {images.length > 0 && <img src={images[0]} alt="Diary" />}
            </div>
            <div className="info_section">
                <div>
                    <Rating
                        name={rate ? 'conditional-read-only' : 'no-value'}
                        value={rate || null} // rate가 없으면 null로 설정
                        size="small"
                        readOnly={true}
                    />
                </div>
                <div className="date_wrapper">{companyName}</div>

                <div
                    className="content_wrapper"
                    style={{ color: review ? 'black' : 'gray' }}
                >
                    {review || '이 장소에 대한 평가를 남겨주세요!'}
                </div>
            </div>
            <div className="button_section">
                <EditButton onClick={handleOpen} />
            </div>

            {/* 기존 모달 컴포넌트 */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Editor
                        diaryNo={diaryNo}
                        companyName={companyName}
                        rate={rate}
                        review={review}
                        uploadOrg={uploadOrg}
                        onSubmit={handleClose} // 예시로 handleClose를 사용
                    />
                </Box>
            </Modal>

            {/* 이미지 클릭 시 뜨는 새로운 모달 */}
            <Modal
                open={imageModalOpen}
                onClose={handleImageModalClose}
                aria-labelledby="image-modal-title"
                aria-describedby="image-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%', // 큰 화면에서 볼 수 있도록 크기 조절
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt="Diary"
                            style={{ width: '100%', height: 'auto' }} // 이미지가 모달에 맞게 표시되도록 설정
                        />
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default React.memo(DiaryItem);
