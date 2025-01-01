import { on } from 'events';
import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

interface EditorProps {
  onUpdate: (value: string) => void;
}

export default function Editor({ onUpdate }: EditorProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
     onUpdate(value);
  }, [value])
  

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}