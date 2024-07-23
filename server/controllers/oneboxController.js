// Mock data
const oneboxList = [
    { id: '1', subject: 'Subject 1', body: 'Body 1' },
    { id: '2', subject: 'Subject 2', body: 'Body 2' }
  ];
  
  exports.listOnebox = (req, res) => {
    res.json(oneboxList);
  };
  
  exports.getThread = (req, res) => {
    const { thread_id } = req.params;
    const thread = oneboxList.find(thread => thread.id === thread_id);
    res.json(thread);
  };
  
  exports.deleteThread = (req, res) => {
    const { thread_id } = req.params;
    const index = oneboxList.findIndex(thread => thread.id === thread_id);
    if (index > -1) {
      oneboxList.splice(index, 1);
    }
    res.status(204).send();
  };
  