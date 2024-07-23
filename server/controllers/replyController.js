exports.sendReply = (req, res) => {
    const { thread_id } = req.params;
    const { from, to, subject, body } = req.body;
    console.log(`Reply sent to thread ${thread_id} from ${from} to ${to}: ${subject}, ${body}`);
    res.status(200).send({ message: 'Reply sent' });
  };
  