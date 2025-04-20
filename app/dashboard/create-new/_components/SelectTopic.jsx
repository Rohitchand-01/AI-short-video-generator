'use client';
import React, { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const SelectTopic = () => {
  const options = ['Custom Prompt', 'Random AI story', 'Scary Story', 'fun Fact', 'Joke', 'Riddle', 'Poem', 'Song', 'Story', 'Quote'];
  const [selectedOption, setSelectedOption] = useState();

  const onUSerSelect = (key, value) => {
    console.log(`${key}: ${value}`);
    // handle your logic here
  };

  return (
    <div>
      <h2 className='font-bold text-purple-700 text-2xl '>Content</h2>
      <p className='text-gray-500 mb-3'>What is the topic of your video?</p>

      <Select onValueChange={(value) => {
        setSelectedOption(value);
        if (value !== 'Custom Prompt') {
          onUSerSelect('topic', value);
        }
      }}>
        <SelectTrigger className='w-full mt-2 p-6 text-lg '>
          <SelectValue placeholder='Content type' />
        </SelectTrigger>

        <SelectContent>
          {options.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedOption === 'Custom Prompt' && (
        <Textarea
          className='mt-3'
          onChange={(e) => onUSerSelect('topic', e.target.value)}
          placeholder='Write your prompt here on which you want to create a video...'
        />
      )}
    </div>
  );
};

export default SelectTopic;
