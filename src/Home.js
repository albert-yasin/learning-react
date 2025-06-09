import { useState } from 'react';

const Home = () => {
  const [tools, setTools] = useState([
    {
      name: 'Youtube to MP3',
      desc: 'Youtube to MP3 Downloader no ads!',
    },
    {
      name: 'Image to text OCR',
      desc: 'Scan any text from images and paste it immediately',
    },
    {
      name: 'Cover letter maker',
      desc: 'Make a cover letter for job application, send it to email or export it as a .docx',
    },
  ]);

  return (
    <div className='home'>
      {tools.map((tool) => (
        <div class='tool-card'>
          <h2>{tool.name}</h2>
          <h5>{tool.desc}</h5>
        </div>
      ))}
    </div>
  );
};

export default Home;
