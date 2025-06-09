const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>All In One Apps</h1>
      <div className='links'>
        <a href='/'> Home </a>
        <a
          className='btn-create'
          href='/create'
          style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px',
            padding: '15px',
          }}
        >
          New Tools
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
