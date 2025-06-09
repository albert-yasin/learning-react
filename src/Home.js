import { useState } from 'react';

const Home = () => {
  const [applicants, setApplicants] = useState([
    { name: 'Albert Yasin', role: 'Fullstack Developer Analyst', age: '24' },
    { name: 'Andika Saputra', role: 'Freelance Backend Developer', age: '24' },
    { name: 'Steve Eigha', role: 'Application Specialist Staff', age: '29' },
  ]);

  const hello = (name) => {
    alert('Hello ' + name);
  };

  return (
    <div className='home'>
      {applicants.map((applicant) => (
        <div class='applicant-card'>
          <h2>{applicant.name}</h2>
          <h5>
            {applicant.role}, {applicant.age} years old
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Home;
