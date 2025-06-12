const ToolList = ({ tools, handleDelete }) => {
  return (
    <div className='tool-list'>
      {tools.map((tool) => (
        <div class='tool-card'>
          <h2>{tool.name}</h2>
          <h5>{tool.desc}</h5>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ToolList;
