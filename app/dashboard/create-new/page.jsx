'use client';
import React, { useState } from 'react';
import SelectTopic from './_components/SelectTopic';
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';

const CreateNew = () => {
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const onCreateClickHandler = async () => {
    await GetVideoScript();
  };

  const GetVideoScript = async () => {
    const prompt = `write a script to generate ${formData.duration} video on topic: ${formData.topic} along with image prompt in ${formData.imageStyle} format for each scene and give me result in JSON format with imagePrompt and contextText as fields`;
    
    try {
      const response = await axios.post('/api/get-video-script', { prompt });

      if (response.data.script) {
        console.log('Video script generated:', response.data.script);
      }
    } catch (error) {
      console.error('Error fetching video script:', error.message);

      if (error.response) {
        alert('Error: ' + error.response.data.error);
      } else {
        alert('Error: ' + error.message);
      }
    }
  };

  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-purple-700 text-4xl text-center'>
        Create New
      </h2>

      <div className='shadow-md mt-10 p-5 rounded-lg'>
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <Button className='mt-10 w-full' onClick={onCreateClickHandler}>
          Create Short Video
        </Button>
      </div>
    </div>
  );
};

export default CreateNew;
